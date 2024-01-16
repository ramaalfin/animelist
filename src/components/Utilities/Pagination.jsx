export default function Pagination({ page, lastPage, setPage }) {
  const handlePrev = () => {
    setPage((prev) => prev - 1);
    scrollTop();
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
    scrollTop();
  };

  const scrollTop = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="text-color-primary flex items-center justify-center gap-4 px-2 py-4 text-xl">
      {page > 1 && (
        <button
          className="hover:text-color-accent transition-all"
          onClick={handlePrev}
        >
          Previos
        </button>
      )}
      <p>
        {page} of {lastPage}
      </p>

      {page < lastPage && (
        <button
          className="hover:text-color-accent transition-all"
          onClick={handleNext}
        >
          Next
        </button>
      )}
    </div>
  );
}
