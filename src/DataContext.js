import { createContext, useEffect, useState } from "react";
import userReviewList from "./data";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [showDropDown, setShowDropDown] = useState("");
  const [tableData, setTableData] = useState(userReviewList);
  const [originalData, setOriginalData] = useState(userReviewList);
  const [currentUser, setCurrentUser] = useState();
  // const [selectedFilterRating, setSelectedFilterRating] = useState(null);

  const handleFilterRating = (rating) => {
    const filteredData = originalData.filter((data) => data.Rating === rating);
    setTableData(filteredData);
    setShowDropDown("");
  };

  const handleDateChange = (e) => {
    const date = new Date(e);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2);
    const formattedDate = `${day}-${month}-${year}`;

    const filteredData = originalData.filter((data) =>
      data.createdAt.includes(formattedDate)
    );
    setTableData(filteredData);
    console.log(filteredData);
    setShowDropDown("");
  };

  // const fetchData = async () => {
  //   const response = await fetch(
  //     "http://192.168.1.10:3000/api/admin/getAll/reviewData"
  //   );

  //   const data = await response.json();
  //   setTableData(data.message);
  //   setOriginalData(data.message);
  //   console.log(data.message);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <DataContext.Provider
      value={{
        tableData,
        setTableData,
        currentUser,
        setCurrentUser,
        // selectedFilterRating,
        // setSelectedFilterRating,
        handleDateChange,
        showDropDown,
        setShowDropDown,
        handleFilterRating,
        // fetchData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
