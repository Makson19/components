
interface PaginationResult<T> {
  data: T[];
  currentPage: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
}

export function paginate<T>(
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
