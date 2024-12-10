import {
  Disc,
  DiscAlbum,
  Ellipsis,
  Flame,
  Pen,
  RotateCw,
  StepForward,
  Users,
} from "lucide-react";
import profile from "../assets/don-toliver.jpg";

// icons
import spotifyIcon from "../assets/icons/Spotify_icon.svg";
import appleMusicIcon from "../assets/icons/Apple_Music_icon.svg";
import soundCloudIcon from "../assets/icons/icons8-soundcloud.svg";

const DayOne = () => {
  return (
    <div className="grid grid-cols-[auto_250px_250px] grid-rows-[280px_100px] gap-4">
      <div className="bg-white rounded-3xl px-6 py-8 shadow-drop-1 row-span-2 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <h4>Profile</h4>
          <RotateCw className="text-gray-500" size={20} />
        </div>
        <div className="flex items-center justify-center flex-col">
          <div className="flex justify-center">
            <div className="relative size-28">
              <svg
                className="size-full -rotate-90"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-current text-gray-200"
                  stroke-width="2"
                ></circle>
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-current text-blue-60"
                  stroke-width="2"
                  stroke-dasharray="100"
                  stroke-dashoffset="75"
                  stroke-linecap="round"
                ></circle>
              </svg>
              <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center">
                <img
                  className="rounded-full"
                  src={profile}
                  alt=""
                  width={75}
                  height={75}
                />
              </div>
              <button className="absolute bg-black p-1.5 rounded-full right-0 bottom-0">
                <Pen size={12} color="white" />
              </button>
            </div>
          </div>

          <div>
            <h1 className="text-2xl text-center font-semibold">Don Toliver</h1>
            <p className="text-sm text-center text-gray-500">American Rapper</p>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="flex gap-2 rounded-full bg-white shadow-lg px-4 py-2 items-center">
            <Users size={16} />
            <span className="text-sm">1M+</span>
          </div>
          <div className="flex gap-2 rounded-full bg-white shadow-lg px-4 py-2 items-center">
            <Disc size={16} />
            <span className="text-sm">754</span>
          </div>
          <div className="flex gap-2 rounded-full bg-white shadow-lg px-4 py-2">
            <Flame size={16} />
            <span className="text-sm">10M</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl px-6 py-8 flex flex-col justify-between shadow-drop-1 relative overflow-hidden">
        <div className="bg-[#FF8A77] w-[220px] h-[220px] absolute blur-3xl rounded-full z-0 -right-40 -top-10" />
        <div className="bg-[#FED6BC] w-[220px] h-[220px] absolute blur-3xl rounded-full z-0 -right-5 -top-48" />
        <div className="bg-purple-300 w-[220px] h-[220px] absolute blur-3xl rounded-full z-0 -left-40 -bottom-10" />
        <div className="bg-[#FCB8DB] w-[220px] h-[220px] absolute blur-3xl rounded-full z-0 -bottom-40" />

        <div className="flex items-center justify-between z-50">
          <div>
            <p className="text-lg">Songs</p>
            <p className="text-md">Posted</p>
          </div>
          <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg">
            <StepForward />
          </div>
        </div>

        <div className="z-50">
          <h2 className="text-5xl font-semibold">356</h2>
          <span className="text-sm text-gray-600">Songs played</span>
        </div>
      </div>
      <div className="bg-white rounded-3xl px-6 py-8 flex flex-col justify-between shadow-drop-1 relative overflow-hidden">
        {/* bg gradient overlays */}
        <div className="bg-[#6591FF] w-[220px] h-[220px] absolute blur-3xl rounded-full z-0 -right-40 -top-10" />
        <div className="bg-[#95B2FF] w-[220px] h-[220px] absolute blur-3xl rounded-full z-0 -right-5 -top-48" />
        <div className="bg-[#7EF6E5] w-[220px] h-[220px] absolute blur-3xl rounded-full z-0 -left-40 -bottom-10" />
        <div className="bg-[#58D1ED] w-[220px] h-[220px] absolute blur-3xl rounded-full z-0 -bottom-40" />

        <div className="flex items-center justify-between z-50">
          <div>
            <p className="text-lg">Albums</p>
            <p className="text-md">Created</p>
          </div>
          <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg">
            <DiscAlbum />
          </div>
        </div>

        <div className="z-50">
          <h2 className="text-5xl font-semibold">102</h2>
          <span className="text-sm text-gray-600">Albums</span>
        </div>
      </div>

      <div className="bg-white/50 backdrop-lg rounded-3xl px-6 py-6.5 flex items-center shadow-drop-1 col-span-2 justify-between">
        <div>
          <p>Trackers connected</p>
          <p className="text-sm text-gray-500">3 active connections</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex">
            <div className="bg-white p-2 rounded-full border-[3px] border-[#EBECF0]">
              <img src={spotifyIcon} width={30} height={30} />
            </div>
            <div className="bg-white p-2 rounded-full border-[3px] border-[#EBECF0] -ml-3">
              <img src={soundCloudIcon} width={30} height={30} />
            </div>
            <div className="bg-white p-2 rounded-full border-[3px] border-[#EBECF0] -ml-3">
              <img src={appleMusicIcon} width={30} height={30} />
            </div>
          </div>
          <Ellipsis />
        </div>
      </div>
    </div>
  );
};

export default DayOne;
