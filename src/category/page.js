import React from "react";
import Pagination from "react-js-pagination";

function Page(props) {
  const page = props.pageData[0];
  const setPage = props.pageData[1];
  const data = props.data;
  const handlePageChange = (page) => {
    setPage(page);
  };
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={18}
      totalItemsCount={data.length}
      pageRangeDisplayed={10}
      onChange={handlePageChange}
      itemClassFirst="first"
      itemClassPrev="prev"
      itemClassNext="next"
      itemClassLast="last"
      firstPageText="≪"
      lastPageText="≫"
    ></Pagination>
  );
}

export default Page;
