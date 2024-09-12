import Leaderboard from "./Leaderboard";
import WelcomeStats from "./WelcomeStats";
import UpcomingEvents from "./UpcomingEvents";

function DashboardDashboard() {
  return (
    <div className="overflow-hidden flex flex-row w-[100%] h-screen px-5 gap-5">
      {/* width of the gallery */}
      <div className="w-[70%] flex flex-col gap-5">
        <WelcomeStats />
        <UpcomingEvents />
      </div>

      <div className="bg-green-100 w-[30%] h-[40vw]">
        {/* adjust sizes and stuff as needed */}
        <Leaderboard />
      </div>
    </div>
  );
}

export default DashboardDashboard;
