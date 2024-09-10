import { useState } from "react";

function Leaderboard() {
    const [leaderboardFilter, setLeaderboardFilter] = useState("all"); // Filter for the leaderboard

    const profileImg = "assets/gallery/events/sample1.png"; // Temporary image for the leaderboard
    const name = "John Doe"; // Temporary name for the leaderboard
    const ranking = "1st"; // Temporary ranking for the leaderboard
    const hours = "14"; // Temporary hours for the leaderboard

    return (
        <div className="h-full w-4/5 pt-7 flex flex-col items-center bg-white rounded-2xl">
            <h2 className="text-primary text-section-header font-semibold">Leaderboard</h2>

            <img src={profileImg} alt="profile" className="w-[90px] h-[90px] rounded-full m-2" />
            
            <h3 className="text-detail mb-1">{name}</h3>

            <div className="flex flex-row items-center justify-center">
                <p className="text-detail text-[10pt] text-primary-dark">{"Rank: " + ranking}</p>
                <p className="text-detail text-[10pt] text-primary-dark ml-5">{"Hours: " + hours}</p>
            </div>

            <div className="flex flex-row items-center justify-center mt-5">
                <button className={leaderboardFilter == "all" ? "bg-white text-black after:block after:h-1 after:rounded-lg after:bg-primary-dark" :"bg-white text-grey"} onClick={() => setLeaderboardFilter("all")}>All</button>
                <button className={leaderboardFilter == "friends" ? "bg-white text-black after:block after:h-1 after:rounded-lg after:bg-primary-dark" :"bg-white text-grey"} onClick={() => setLeaderboardFilter("friends")}>My Friends</button>
            </div>

        </div>
    );
}

export default Leaderboard;