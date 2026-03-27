import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow
} from '../components/Table';

type Person = {
  id: string;
  name: string;
  description: string;
  birthdate: string;
  gender: string;
  phone: string;
  nationality: string;
  occupation: string;
}

const peopleData: Person[] = [
  {
    id: '1',
    name: 'Ana Beatriz',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    birthdate: '1994-03-12',
    gender: 'Feminino',
    phone: '(11) 98765-4321',
    nationality: 'Brasileira',
    occupation: 'Designer'
  },
  {
    id: '2',
    name: 'Carlos Eduardo',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    birthdate: '1988-07-25',
    gender: 'Masculino',
    phone: '(21) 99876-1234',
    nationality: 'Brasileiro',
    occupation: 'Engenheiro de Software'
  },
  {
    id: '3',
    name: 'Mariana Silva',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    birthdate: '1996-11-08',
    gender: 'Feminino',
    phone: '(31) 91234-5678',
    nationality: 'Brasileira',
    occupation: 'Analista de Marketing'
  },
  {
    id: '4',
    name: 'João Pedro',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
    birthdate: '1991-01-19',
    gender: 'Masculino',
    phone: '(41) 93456-7890',
    nationality: 'Brasileiro',
    occupation: 'Administrador'
  },
  {
    id: '5',
    name: 'Fernanda Oliveira',
    description: 'Cillum dolore eu fugiat nulla pariatur, excepteur sint occaecat.',
    birthdate: '1985-09-30',
    gender: 'Feminino',
    phone: '(51) 97654-3210',
    nationality: 'Brasileira',
    occupation: 'Contadora'
  },
  {
    id: '6',
    name: 'Rafael Santos',
    description: 'Sunt in culpa qui officia deserunt mollit anim id est laborum.',
    birthdate: '1993-05-14',
    gender: 'Masculino',
    phone: '(61) 98888-7777',
    nationality: 'Brasileiro',
    occupation: 'Arquiteto'
  },
  {
    id: '7',
    name: 'Camila Rocha',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.',
    birthdate: '1998-02-03',
    gender: 'Feminino',
    phone: '(71) 95555-4444',
    nationality: 'Brasileira',
    occupation: 'Psicóloga'
  },
  {
    id: '8',
    name: 'Lucas Martins',
    description: 'Tempor incididunt ut labore et dolore magna aliqua ut enim.',
    birthdate: '1990-10-21',
    gender: 'Masculino',
    phone: '(81) 96666-3333',
    nationality: 'Brasileiro',
    occupation: 'Analista de Sistemas'
  },
  {
    id: '9',
    name: 'Juliana Costa',
    description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    birthdate: '1995-06-17',
    gender: 'Feminino',
    phone: '(91) 97777-2222',
    nationality: 'Brasileira',
    occupation: 'Jornalista'
  },
  {
    id: '10',
    name: 'Bruno Almeida',
    description: 'Ex ea commodo consequat duis aute irure dolor in reprehenderit.',
    birthdate: '1987-12-05',
    gender: 'Masculino',
    phone: '(11) 94444-1111',
    nationality: 'Brasileiro',
    occupation: 'Gerente de Projetos'
  }
];

interface PaginationResult<T> {
  data: T[];
  currentPage: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
}

function paginate<T>(
  items: T[],
  currentPage: number,
  perPage: number
): PaginationResult<T> {
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / perPage);

  // garante que a página está dentro do intervalo válido
  const safePage = Math.max(1, Math.min(currentPage, totalPages));

  const startIndex = (safePage - 1) * perPage;
  const endIndex = startIndex + perPage;

  const data = items.slice(startIndex, endIndex);

  return {
    data,
    currentPage: safePage,
    perPage,
    totalItems,
    totalPages,
  };
}

const initialColumns = [
  { key: 'id', label : 'ID' },
  { key: 'name', label: 'Nome' },
  { key: 'phone', label: 'Telefone' },
  { key: 'nationality', label: 'Nacionalidade' },
  { key: 'occupation', label: 'Ocupação' }
]

const TablePage = () => {
  const [perPage, setPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const [dataPaginated, setDataPaginated] = React.useState<Person[]>([]);
  const [columns, setColumns] = React.useState(initialColumns);
  const [dragIndex, setDragIndex] = React.useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = React.useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDragIndex(index);
  }

  const handleDragOver = (index: number) => {
    setHoverIndex(index);
  }

  const handleDrop = (dropIndex: number) => {
    if (dragIndex === null || dragIndex === dropIndex) return;
    const updatedColumns = [...columns];
    const [moved] = updatedColumns.splice(dragIndex, 1);
    updatedColumns.splice(dropIndex, 0, moved);
    setColumns(updatedColumns);
    setDragIndex(null);
    setHoverIndex(null);
  }

  const data = peopleData.filter(person => ({
    id: person.id,
    name: person.name,
    phone: person.phone,
    nationality: person.nationality,
    occupation: person.occupation
  }))

  const handleChangePage = (_event: unknown, newPage: number) => {
    const newData = paginate(data, newPage + 1, perPage);
    setDataPaginated(newData.data);
    setPage(newPage);
  }

  const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = paginate(data, 1, parseInt(e.target.value, 10));
    setDataPaginated(newDate.data);
    setPerPage(parseInt(e.target.value, 10));
    setPage(0);
  }

  React.useEffect(() => {
    const newData = paginate(data, page + 1, perPage);
    setDataPaginated(newData.data);
  }, [])

  return (
    <div>
      <h1 className='title'>Table</h1>

      <div className='section-container'>
        <h2 className='subtitle'>Tabela Simples</h2>
        <div>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Nome</TableCell>
                  <TableCell>Telefone</TableCell>
                  <TableCell>Nacionalidade</TableCell>
                  <TableCell>Ocupação</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map(person => (
                  <TableRow key={person.id}>
                    <TableCell>{person.id}</TableCell>
                    <TableCell>{person.name}</TableCell>
                    <TableCell>{person.phone}</TableCell>
                    <TableCell>{person.nationality}</TableCell>
                    <TableCell>{person.occupation}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      <div className='section-container'>
        <h2 className='subtitle'>Tabela com cabeçalho fixo</h2>
        <div>
          <TableContainer sx={{ maxHeight: 400 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Nome</TableCell>
                  <TableCell>Descrição</TableCell>
                  <TableCell>Nascimento</TableCell>
                  <TableCell>Gênero</TableCell>
                  <TableCell>Telefone</TableCell>
                  <TableCell>Nacionalidade</TableCell>
                  <TableCell>Ocupação</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {peopleData?.map((person) => (
                  <TableRow key={person.id}>
                    <TableCell>{person.id}</TableCell>
                    <TableCell>{person.name}</TableCell>
                    <TableCell>{person.description}</TableCell>
                    <TableCell>{person.birthdate}</TableCell>
                    <TableCell>{person.gender}</TableCell>
                    <TableCell>{person.phone}</TableCell>
                    <TableCell>{person.nationality}</TableCell>
                    <TableCell>{person.occupation}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      <div className='section-container'>
        <h2 className='subtitle'>Fixando a primeira e última coluna</h2>
        <div>
          <TableContainer sx={{ minWidth: '900px', maxHeight: '400px' }}>
            <Table stickyHeader stickyFirstColumn stickyLastColumn>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ whiteSpace: 'nowrap', textAlign: 'center' }}>Nome</TableCell>
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>Descrição</TableCell>
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>Nascimento</TableCell>
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>Gênero</TableCell>
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>Telefone</TableCell>
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>Nacionalidade</TableCell>
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>Ocupação</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {peopleData?.map((person) => (
                  <TableRow key={person.id}>
                    <TableCell sx={{ whiteSpace: 'nowrap' }}>{person.name}</TableCell>
                    <TableCell sx={{ whiteSpace: 'nowrap' }}>{person.description}</TableCell>
                    <TableCell sx={{ whiteSpace: 'nowrap' }}>{person.birthdate}</TableCell>
                    <TableCell sx={{ whiteSpace: 'nowrap' }}>{person.gender}</TableCell>
                    <TableCell sx={{ whiteSpace: 'nowrap' }}>{person.phone}</TableCell>
                    <TableCell sx={{ whiteSpace: 'nowrap' }}>{person.nationality}</TableCell>
                    <TableCell sx={{ whiteSpace: 'nowrap' }}>{person.occupation}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      <div className='section-container'>
        <h2 className='subtitle'>Tabela com paginação</h2>
        <div>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Nome</TableCell>
                  <TableCell>Telefone</TableCell>
                  <TableCell>Nacionalidade</TableCell>
                  <TableCell>Ocupação</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataPaginated?.map(person => (
                  <TableRow key={person.id}>
                    <TableCell>{person.id}</TableCell>
                    <TableCell>{person.name}</TableCell>
                    <TableCell>{person.phone}</TableCell>
                    <TableCell>{person.nationality}</TableCell>
                    <TableCell>{person.occupation}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[2, 5]}
                    colSpan={5}
                    count={data.length}
                    rowsPerPage={perPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </div>
      </div>

      <div className='section-container'>
        <h2 className='subtitle'>Ordenando colunas via <em>drag and drop</em></h2>
        <div>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {columns?.map((col, index) => {
                    return (
                      <TableCell
                        key={col.key}
                        isDragging={dragIndex === index}
                        activePlaceholderColumn={hoverIndex === index}
                        draggable
                        onDragStart={() => handleDragStart(index)}
                        onDragOver={(e) => {
                          e.preventDefault();
                          handleDragOver(index);
                        }}
                        onDragLeave={() => setHoverIndex(null)}
                        onDrop={() => handleDrop(index)}
                      >
                        {col.label}
                      </TableCell>
                    )
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((row, rowIndex) => {
                  return (
                    <TableRow key={rowIndex}>
                      {columns?.map((col) => (
                        <TableCell key={col.key}>
                          {row?.[col.key as keyof typeof row]}
                        </TableCell>
                      ))}
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  )
}

export default TablePage;
