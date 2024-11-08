import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaOpencart } from "react-icons/fa";
const Header = () => {
  return (
    <div>
      <div className="font-poppins text-16 pt-40 pb-16 flex items-center justify-between p-pageSide">
        <h2 className="text-Text2 font-inter text-24 font-bold">Exclusive</h2>
        <div className="flex gap-12">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/signup">SignUp</Link>
        </div>
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-24">
            <IoIosSearch />
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-Secondary w-full  rounded-md py-2 pl-12 pr-3 shadow-sm focus:outline-none sm:text-sm focus:ring focus:ring-Text1 focus:ring-opacity-5"
            placeholder="Search for anything..."
            type="text"
            name="search"
          />
        </label>
        <div className="flex gap-4 text-36">
          <IoMdHeartEmpty />
          <FaOpencart />
        </div>
      </div>
      <div className="border-t opacity-30 "></div>
    </div>
  );
};

export default Header;
