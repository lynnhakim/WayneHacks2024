import { HomeIcon } from "@heroicons/react/24/solid";
import Profile from "../Profile/page";
import { UserButton } from "@clerk/nextjs";

Profile;
export default function Navbar() {
  return (
    <div className="flex bg-black h-16 items-center z-40">
      <a href="/">
        <HomeIcon className="h-8 w-8 ml-5 cursor-pointer" />
      </a>
      <div className="flex text-sm items-center mr-5 justify-end w-full">
          <p className="mx-3 text-gray font-bold hover:underline cursor-pointer">
            Score
          </p>
        <a href="/Leaderboard">
          <p className="hidden md:block mx-3 text-gray font-bold hover:underline cursor-pointer">
            Leaderboard
          </p>
        </a>
        <a href="/Flashcards">
          <p className="hidden md:block mx-3 text-gray font-bold hover:underline cursor-pointer">
            FlashCards
          </p>
        </a>
        <p className="hidden md:block mx-3">
          <UserButton afterSignOutUrl="/"/>
        </p>
      </div>
    </div>
  );
}