import logo1 from "../../assets/logo1.png";

import { MdHomeFilled } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
  const data = {
    fullName: "Apeksha Hatle",
    username: "apexsa",
    profileImg: "/avatars/girl1.jpg",
  };

  return (
    <div className="md:flex-[2_2_0] w-18 max-w-52">
      <div className="sticky top-0 left-0 h-screen flex flex-col border-r border-gray-300 w-20 md:w-full bg-[#FFF9E5]"> {/* Very light yellow background */}
        {/* Logo */}
        <Link to="/" className="flex justify-center md:justify-start">
          <img
            src={logo1}
            alt="Logo"
            className="px-2 w-28 h-auto rounded-full hover:bg-[#FFF4CC] hover:scale-105 transition-transform duration-300" // Light yellow shade for hover
          />
        </Link>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-3 mt-4">
          <li className="flex justify-center md:justify-start">
            <Link
              to="/"
              className="flex gap-3 items-center hover:bg-primary hover:text-white transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer"
            >
              <MdHomeFilled className="w-8 h-8 text-secondary" />
              <span className="text-lg hidden md:block">Home</span>
            </Link>
          </li>

          <li className="flex justify-center md:justify-start">
            <Link
              to="/notifications"
              className="flex gap-3 items-center hover:bg-primary hover:text-white transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer"
            >
              <IoNotifications className="w-6 h-6 text-secondary" />
              <span className="text-lg hidden md:block">Notifications</span>
            </Link>
          </li>

          <li className="flex justify-center md:justify-start">
            <Link
              to={`/profile/${data?.username}`}
              className="flex gap-3 items-center hover:bg-primary hover:text-white transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer"
            >
              <FaUser className="w-6 h-6 text-secondary" />
              <span className="text-lg hidden md:block">Profile</span>
            </Link>
          </li>
        </ul>

        {/* Profile Section */}
        {data && (
          <Link
            to={`/profile/${data.username}`}
            className="mt-auto mb-10 flex gap-2 items-start transition-all duration-300 hover:bg-[#FDE68A] py-2 px-4 rounded-full" // Updated hover color
          >
            <div className="avatar hidden md:inline-flex">
              <div className="w-8 rounded-full">
                <img src={data?.profileImg || "/avatar-placeholder.png"} />
              </div>
            </div>
            <div className="flex justify-between flex-1">
              <div className="hidden md:block">
                <p className="text-neutral font-bold text-sm w-20 truncate">{data?.fullName}</p>
                <p className="text-slate-500 text-sm">@{data?.username}</p>
              </div>
              <BiLogOut className="w-5 h-5 text-secondary cursor-pointer" />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
