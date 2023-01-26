import React from "react";
interface Props {
    postPerPage: number,
    totalPosts: number,
    paginate : (number : number) => void
        
    }


export const Pagination = ({ postPerPage, totalPosts , paginate }: Props) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
        {pageNumbers.map(number=> (
            <li key={number}>
                <a onClick={()=>paginate(number)} href="!#">{number}</a>
            </li>
        ))}
      </ul>
    </nav>
  );
};
