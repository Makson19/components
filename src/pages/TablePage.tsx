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
import { peopleData, type Person } from '../utils/dataMockup';
import { paginate } from '../utils/functions';

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
