import { useState } from "react";

const usePagination = (initialPage = 1) => {
  const [page, setPage] = useState(initialPage);
  const [limit, setLimit] = useState(10);

  return {
    page,
    limit,
    setPage,
    setLimit,
  };
};

export default usePagination;