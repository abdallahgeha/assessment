import React from "react";
import classNames from "classnames";
import './pagination.css';

const Pagination = ({ page, lastPage, setPage }) => {
  const goToFirstPage = () => page > 2 && setPage(1);
  const goToPreviousPage = () => page > 1 && setPage(page - 1);
  const goToNextPage = () => page < lastPage - 1 && setPage(page + 1);
  const goToLastPage = () => page < lastPage - 2 && setPage(lastPage);

  return (
    <div className="pagination">
      <div
        onClick={goToFirstPage}
        className={classNames("navigate", { noNav: page <= 2 })}
      >
        {"<<"}
      </div>
      <div
        onClick={goToPreviousPage}
        className={classNames("navigate", { noNav: page <= 1 })}
      >
        {"<"}
      </div>
      <h4>{page}</h4>
      <div
        onClick={goToNextPage}
        className={classNames("navigate", { noNav: page >= lastPage - 1 })}
      >
        {">"}
      </div>
      <div
        onClick={goToLastPage}
        className={classNames("navigate", { noNav: page >= lastPage - 1 })}
      >
        {">>"}
      </div>
    </div>
  );
};

export default Pagination;
