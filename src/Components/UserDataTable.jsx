import { useContext } from "react";
import { FaStar } from "react-icons/fa6";
import { DataContext } from "../DataContext";

const tableHeader = [
  {
    name: "Name",
    width: "20%",
  },
  {
    name: "Mobile Number",
    width: "15%",
  },
  {
    name: "E-mail",
    width: "20%",
  },
  {
    name: "Ratings",
    width: "12%",
  },
  {
    name: "Feedback",
    width: "33%",
  },
];

const UserDataTable = () => {
  const { tableData, currentUser, setCurrentUser } = useContext(DataContext);
  return (
    <table className="w-full border-separate border-spacing-x-0 border-spacing-y-4 mt-4 tracking-tight">
      <thead className="rounded-[15px] bg-[#D9D9D9]">
        <tr>
          {tableHeader.map((item, i) => (
            <th
              style={{ width: item.width }}
              className={`text-xs font-medium p-3 text-[#202020] ${
                i < tableHeader.length - 1
                  ? "border-r-[#202020] border-opacity-30 border-r-[0.3px]"
                  : ""
              }  `}
              key={i}
            >
              {item.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="">
        {tableData.map((user, i) => (
          <tr
            onClick={() => setCurrentUser(user)}
            className={`cursor-pointer text-[#404040] text-xs ${
              currentUser && currentUser.id === user.id
                ? "bg-[#E4E0EE]"
                : "bg-white"
            } rounded-[15px] text-center`}
            key={i}
          >
            <td className="p-3 border-r-[#202020] border-opacity-30 border-r-[0.3px]">
              {user.name}
            </td>
            <td className="p-3 border-r-[#202020] border-opacity-30 border-r-[0.3px]">
              {user.mobile_no}
            </td>
            <td className="p-3 border-r-[#202020] border-opacity-30 border-r-[0.3px]">
              {user.email}
            </td>
            <td className="p-3 flex items-center justify-center gap-1 text-[13px] h-[100px]">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={
                    i < user.Rating ? "text-[#FBB337]" : "text-[#929292]"
                  }
                >
                  <FaStar />
                </div>
              ))}
            </td>
            <td className="p-3 text-left border-l-[#202020] border-opacity-30 border-l-[0.3px]">
              {user.feedback}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserDataTable;
