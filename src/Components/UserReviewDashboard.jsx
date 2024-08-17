import { IoMdArrowDropdown } from "react-icons/io";
import UserDataTable from "./UserDataTable";
import { FaStar } from "react-icons/fa6";
import { useContext } from "react";
import { DataContext } from "../DataContext";
import Calendar from "react-calendar";
import userReiewList from "../data"

const ratingsDropDown = [1, 2, 3, 4, 5];

const UserReviewDashboard = () => {
  const {
    handleFilterRating,
    handleDateChange,
    showDropDown,
    setTableData,
    setShowDropDown,
    // fetchData
  } = useContext(DataContext);
  return (
    <div>
      <h2 className="font-bold text-xl px-4 pt-11 pb-5 border-b-[1px] border-[#404040]">
        User Review - Dashboard
      </h2>
      <div className="p-2 relative">
        <div className="flex items-center gap-4 my-2 text-xs">
          <div
            onClick={() =>
              showDropDown === "DateDropDown"
                ? setShowDropDown("")
                : setShowDropDown("DateDropDown")
            }
            className="cursor-pointer bg-[#FFFFFF] w-[170px] pl-6 pr-4 py-2 rounded-[8px] shadow-sm flex items-center justify-between"
          >
            Report Date{" "}
            <span className="text-lg">
              <IoMdArrowDropdown />
            </span>
          </div>
          <div
            onClick={() =>
              showDropDown === "RatingsDropDown"
                ? setShowDropDown("")
                : setShowDropDown("RatingsDropDown")
            }
            className="cursor-pointer bg-[#FFFFFF] w-[170px] pl-6 pr-4 py-2 rounded-[8px] shadow-sm flex items-center justify-between"
          >
            Ratings{" "}
            <span className="text-lg">
              <IoMdArrowDropdown />
            </span>
          </div>
          <button onClick={() => setTableData(userReiewList)} className="hover:underline">Reset</button>
          <div
            className={`absolute ${
              showDropDown === "DateDropDown" ? "block" : "hidden"
            } left-2 top-[54px] z-10 bg-white rounded-[8px] shadow-md transition-all duration-500`}
          >
            <Calendar onChange={(e) => handleDateChange(e)} />
          </div>
          <div
            className={`absolute ${
              showDropDown === "RatingsDropDown"
                ? "top-[54px] z-10"
                : "-top-0 -z-10"
            }  left-[195px] flex flex-col items-center justify-center bg-white rounded-[8px] shadow-md transition-all duration-500`}
          >
            {ratingsDropDown.map((item, i) => (
              <div
                onClick={() => handleFilterRating(item)}
                className="cursor-pointer hover:bg-zinc-100 flex items-center gap-2 text-sm px-[33px] py-2 border-b-[#8E8E8E] border-b-[0.3px] border-opacity-30"
                key={i}
              >
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={i < item ? "text-[#FBB337]" : "text-[#929292]"}
                  >
                    <FaStar />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <UserDataTable />
      </div>
    </div>
  );
};

export default UserReviewDashboard;
