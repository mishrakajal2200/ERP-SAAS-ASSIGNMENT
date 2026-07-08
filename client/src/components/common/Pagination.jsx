const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="flex gap-3 mt-5">
      <button
        disabled={currentPage === 1}
        onClick={() =>
          onPageChange(currentPage - 1)
        }
        className="
          px-4 py-2
          bg-white/5
          rounded-xl
          text-white
        "
      >
        Prev
      </button>

      <span className="text-white">
        {currentPage} / {totalPages}
      </span>

      <button
        disabled={
          currentPage === totalPages
        }
        onClick={() =>
          onPageChange(currentPage + 1)
        }
        className="
          px-4 py-2
          bg-white/5
          rounded-xl
          text-white
        "
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;