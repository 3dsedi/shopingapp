import React from "react";

interface Props {
  postPerPage: number;
  totalPosts: number;
  currentPage: number;
  paginate: (number: number) => void;
}

export const Pagination = ({
  postPerPage,
  totalPosts,
  currentPage,
  paginate,
}: Props) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    if (i <= 5 || i === pageNumbers.length || Math.abs(currentPage - i) <= 1)
      pageNumbers.push(i);
  }
  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <p key={number}>
          <a onClick={() => paginate(number)} href="/">
            {number}
          </a>
        </p>
      ))}
      <a href="/">&raquo;</a>
    </div>
  );
};
