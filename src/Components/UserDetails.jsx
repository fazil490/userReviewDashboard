import React, { useContext } from "react";
import { DataContext } from "../DataContext";

const UserDetails = () => {
  const { currentUser } = useContext(DataContext);
  return (
    <>
      {currentUser && (
        <div className="bg-[#E4E0EE] mt-[90px] rounded-[15px] mx-1 p-6 font-bold text-[13px]">
          <h3 className="border-b-[1px] border-[#404040] border-opacity-65 text-xs">
            User Details
          </h3>
          <div className="flex flex-col gap-2 mt-2">
            <div>
              Name : <span>{currentUser.name}</span>
            </div>
            <div>
              Company Name : <span>{currentUser.company_name}</span>
            </div>
            <div>
              Mobile Number : <span>{currentUser.mobile_no}</span>
            </div>
            <div>
              E-mail : <span>{currentUser.email}</span>
            </div>
            {/* <div>
              User Type : <span>{currentUser.userType}</span>
            </div> */}
          </div>
          <div className="flex flex-col gap-8 mt-6">
            <div>
              <h4 className="border-b-[1px] border-b-[#404040] border-opacity-65 text-xs">
                Posted Date
              </h4>
              <p>{currentUser.createdAt}</p>
            </div>
            <div>
              <h4 className="border-b-[1px] border-b-[#404040] border-opacity-65 text-xs">
                Ratings
              </h4>
              <p>{currentUser.Rating}</p>
            </div>
            <div>
              <h4 className="border-b-[1px] border-b-[#404040] border-opacity-65 text-xs">
                Feedback
              </h4>
              <p>{currentUser.feedback}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDetails;
