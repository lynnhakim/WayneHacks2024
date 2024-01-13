export default function Navbar() {
  return (
    <div className="flex bg-white h-16 items-center z-40">
      <div className="flex text-sm items-center mr-5 justify-end w-full">
        <p className="mx-3 text-gray font-bold hover:underline cursor-pointer">
          Score
        </p>
        <p className="hidden md:block mx-3 text-gray font-bold hover:underline cursor-pointer">
          LeaderBoard
        </p>
        <p className="hidden md:block mx-3 text-gray font-bold hover:underline cursor-pointer">
          Profile
        </p>
      </div>
    </div>
  );
}
