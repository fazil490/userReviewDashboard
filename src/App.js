import UserReviewDashboard from "./Components/UserReviewDashboard";
import { DataProvider } from "./DataContext";
import UserDetails from "./Components/UserDetails";
import "react-calendar/dist/Calendar.css";

function App() {
  return (
    <DataProvider>
      <div className="App flex font-Roboto">
        <div className="w-[18%] sticky top-0 left-0 bg-[#252B5C] h-screen"></div>
        <div className="w-[60%] bg-[#F5F4F8] border-r-[1px] border-r-[#404040]">
          <UserReviewDashboard />
        </div>
        <div className="w-[22%] bg-[#F5F4F8]">
          <UserDetails />
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
