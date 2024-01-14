import { HomeIcon } from "@heroicons/react/24/solid";
import Profile from "../Profile/page";
Profile
export default function Navbar({Score}) {
  return (
    <div className="flex bg-black h-16 items-center z-40">
      <a href="/">
        <HomeIcon className="h-8 w-8 ml-5" />
      </a>
      <div className="flex text-sm items-center mr-5 justify-end w-full">
        <a href="/Score">
          <p className="mx-3 text-gray font-bold hover:underline cursor-pointer">
            {Score}
          </p>
        </a>
        <a href="/Leaderboard">
          <p className="hidden md:block mx-3 text-gray font-bold hover:underline cursor-pointer">
            Leaderboard
          </p>
        </a>
        <a href="/Profile">
          <p className="hidden md:block mx-3 text-gray font-bold hover:underline cursor-pointer">
            Profile
          </p>
        </a>
      </div>
    </div>
  );
}
