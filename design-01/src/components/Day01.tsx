import { Disc, Flame, Pen, RotateCw, Users } from "lucide-react";
import profile from "../assets/don-toliver.jpg";

const DayOne = () => {
  return (
    <div className="grid grid-cols-3">
      <div className="bg-white rounded-xl px-6 py-8">
        <div className="flex items-center justify-between mb-3">
          <h4>Profile</h4>
          <RotateCw className="text-gray-500" size={20} />
        </div>
        <div className="flex justify-center mb-4">
          <div className="relative size-24">
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
                width={60}
                height={60}
              />
            </div>
            <button className="absolute bg-black p-1.5 rounded-full right-0 bottom-0">
              <Pen size={12} color="white" />
            </button>
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-xl text-center font-semibold">Don Toliver</h1>
          <p className="text-sm text-center text-gray-500">American Rapper</p>
        </div>

        <div className="flex gap-6">
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
    </div>
  );
};

export default DayOne;
