import React from 'react';
import {
  Table as MuiTable,
  TableBody as MuiTableBody,
  TableCell as MuiTableCell,
  TableContainer as MuiTableContainer,
  TableFooter as MuiTableFooter,
  TableHead as MuiTableHead,
  TableRow as MuiTableRow,
  TablePagination as MuiTablePagination,
  IconButton
} from '@mui/material';
import type { TableContainerProps } from '@mui/material/TableContainer';
import type { TableProps } from '@mui/material/Table';
import type { TableHeadProps } from '@mui/material/TableHead';
import type { TableBodyProps } from '@mui/material/TableBody';
import type { TableFooterProps } from '@mui/material/TableFooter';
import type { TableRowProps } from '@mui/material/TableRow';
import type { TableCellProps } from '@mui/material/TableCell';
import type { TablePaginationProps } from '@mui/material/TablePagination';
import { styled } from '@mui/material/styles';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const TableCss = styled(MuiTable)(() => ({
  borderCollapse: 'collapse',
  width: '100%',

  '&.MuiTable-stickyHeader': {
    '& .ft-table-head .MuiTableCell-root': {
      background: '#f5f5f5'
    }
  },

  '& .ft-table-head': {
    background: '#f5f5f5',
  },

  '& .ft-table-head > .ft-table-row > .ft-table-cell': {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: '150%',

    borderBottom: '1px solid rgba(158, 162, 174, 0.30)',
    color: '#424242',
    padding: '10px 16px',

    '&:first-of-type': {
      borderTopLeftRadius: '10px',
    },

    '&:last-of-type': {
      borderTopRightRadius: '10px',
    },

    '&:active': {
      cursor: 'grab',
    },

    '&.dragging': {
      opacity: '0.5',
    },

    '&.placeholder': {
      background: '#e0f2fe'
    },

    '&.placeholder::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: '-2px',
      width: '4px',
      height: '100%',
      backgroundColor: '#0284c7',
      borderRadius: '2px'
    }
  },

  '& .ft-table-body > .ft-table-row > .ft-table-cell': {
    borderBottom: '1px solid rgba(213, 213, 213, 0.59)',
    padding: '12px 16px',
  },

  '& .ft-table-footer > .ft-table-row > .ft-table-cell': {
    border: 'none',
    color: '#424242',
    fontWeight: 500,

    '&:first-of-type': {
      borderBottomLeftRadius: '10px',
    },

    '&:last-of-type': {
      borderBottomRightRadius: '10px',
    }
  },

  '& .ft-table-footer > .ft-table-row > .MuiTableCell-footer': {
    border: 'none',
  },

  // hover row
  '& .ft-table-head > .ft-table-row': {
    transition: 'all 0.25s ease',
  },

  '& .ft-table-body > .ft-table-row': {
    transition: 'all 0.25s ease-in-out',

    '&:hover': {
      background: 'rgba(20, 61, 199, 0.05)',
    }
  }
}))


export const TableContainer = (props: TableContainerProps) => {
  const { children } = props;
  return (
    <MuiTableContainer {...props}>
      {children}
    </MuiTableContainer>
  )
}


interface ITableProps extends TableProps { }

export const Table = (props: ITableProps) => {
  const { children, ...rest } = props;
  return (
    <TableCss {...rest}>
      {children}
    </TableCss>
  )
}

export const TableHead = (props: TableHeadProps) => {
  const { children, ...rest } = props;
  return (
    <MuiTableHead
      {...rest}
      className='ft-table-head'
    >
      {children}
    </MuiTableHead>
  )
}

export const TableBody = (props: TableBodyProps) => {
  const { children, ...rest } = props;
  return (
    <MuiTableBody {...rest} className='ft-table-body'>
      {children}
    </MuiTableBody>
  )
}

export const TableFooter = (props: TableFooterProps) => {
  const { children, ...rest } = props;
  return (
    <MuiTableFooter {...rest} className='ft-table-footer'>
      {children}
    </MuiTableFooter>
  )
}

export const TableRow = (props: TableRowProps) => {
  const { children, ...rest } = props;
  return (
    <MuiTableRow {...rest} className='ft-table-row'>
      {children}
    </MuiTableRow>
  )
}


interface ITableCellProps extends TableCellProps {
  isDragging?: boolean;
  activePlaceholderColumn?: boolean;
}

export const TableCell = (props: ITableCellProps) => {
  const { children, isDragging, activePlaceholderColumn, ...rest } = props;
  return (
    <MuiTableCell
      {...rest}
      className={
        'ft-table-cell' +
        (isDragging ? ' dragging' : '') +
        (activePlaceholderColumn ? ' placeholder' : '')
      }
    >
      {children}
    </MuiTableCell>
  )
}


const ActionsContainer = styled('div')(() => ({
  alignItems: 'center',
  display: 'flex',
  marginLeft: '30px',

  '& .ft-table-pagination-button': {
    height: '38px',
    width: '38px'
  }
}));

interface ITablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  disableButton?: boolean;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

const TablePaginationActions = (props: ITablePaginationActionsProps) => {
  const { count, page, rowsPerPage, disableButton, onPageChange } = props;

  const handleBackButtonClick = (event: any) => {
    onPageChange(event, page - 1)
  }

  const handleNextButtonClick = (event: any) => {
    onPageChange(event, page + 1)
  }

  const handleFirstPage = (event: any) => {
    onPageChange(event, 0);
  }

  const handleLastPage = (event: any) => {
    onPageChange(event, Math.ceil(count / rowsPerPage) - 1);
  }

  return (
    <ActionsContainer>
      <IconButton
        type='button'
        onClick={handleFirstPage}
        disabled={page === 0 || disableButton}
        aria-label='Primeira página'
        className='ft-table-pagination-button'
      >
        <KeyboardDoubleArrowLeftIcon />
      </IconButton>

      <IconButton
        type='button'
        onClick={handleBackButtonClick}
        disabled={page === 0 || disableButton}
        aria-label='Página anterior'
        className='ft-table-pagination-button'
      >
        <ArrowBackIcon />
      </IconButton>

      <IconButton
        type='button'
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1 || disableButton}
        aria-label='Próxima página'
        className='ft-table-pagination-button'
      >
        <ArrowForwardIcon />
      </IconButton>

      <IconButton
        onClick={handleLastPage}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1 || disableButton}
        aria-label='Última página'
        className='ft-table-pagination-button'
      >
        <KeyboardDoubleArrowRightIcon />
      </IconButton>
    </ActionsContainer>
  )
}

export const TablePagination = (props: TablePaginationProps) => {
  return (
    <MuiTablePagination
      {...props}
      labelRowsPerPage='Itens por página'
      labelDisplayedRows={({ from, to, count }) => (
        `${from}-${to} de ${count !== -1 ? count : `'mais de' ${to}`}`
      )}
      ActionsComponent={TablePaginationActions}
    />
  )
}
