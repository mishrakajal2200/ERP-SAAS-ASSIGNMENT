// src/components/ui/Pagination.jsx

const Pagination = ({ page, setPage }) => {
  return (
    <div className="flex gap-2 mt-4">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="px-3 py-1 bg-gray-200 rounded"
      >
        Prev
      </button>

      <span>{page}</span>

      <button
        onClick={() => setPage(page + 1)}
        className="px-3 py-1 bg-gray-200 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;