import { useState } from "react";
import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import SideNavbar from "../components/Side-Navbar";
import AvatarImage from "../assets/images.jpg";

import UserProfile from "../components/UserProfile";

const Layout = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex flex-col min-h-screen shadow-lg ring ring-gray-900/5">
      <div className="lg:hidden p-4 flex justify-between items-center">
        <img src={AvatarImage} alt="person" className="size-12 rounded-full" />
        <button onClick={() => setNav(!nav)} className="text-2xl">
          <FaBars />
        </button>
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`
            fixed z-40 top-0 left-0 h-full w-64 bg-white shadow-xl transition-transform duration-300
            ${nav ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0 lg:static lg:block lg:shadow-none lg:ring lg:ring-gray-900/5 lg:px-6 lg:py-8 rounded-lg
          `}
        >
          <SideNavbar closeNav={() => setNav(false)} />
        </aside>

        {/* user Profile */}
        <div className="flex-1 flex flex-col ">
          <UserProfile
            src={AvatarImage}
            className={"hidden lg:flex justify-end items-cente"}
          />

          {/* Main content (Outlet) */}
          <main className="flex-1 px-4">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
