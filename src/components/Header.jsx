import { Link, Links } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { FaShoppingCart, FaSun, FaMoon } from "react-icons/fa";
import { LuGrape } from "react-icons/lu";
import { useDarkMode } from "../hooks/useDarkMode";

function Header() {
  const [isDark, setIsDark] = useDarkMode();
  return (
    <div className="bg-base-100 shadow-sm">
      <header className="navbar bg-base-100  main-container grow-0">
        <div className="navbar-start">
          <div className="dropdown md:hidden">
            <Link to="/" className="md:flex gap-4 items-center ">
              {<LuGrape className="text-3xl" />}
            </Link>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="md:flex gap-4 items-center hidden">
            {<LuGrape className="text-3xl" />}
            <span className="text-xl">Ituzum</span>
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu  menu-horizontal  rounded-box">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/basket" className="btn btn-ghost btn-circle mr-4">
            {<FaShoppingCart className="text-4xl " />}
          </Link>
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
              onClick={() => setIsDark(!isDark)}
            />

            {/* sun icon */}
            <FaSun className="swap-on h-10 w-10 fill-current" />

            {/* moon icon */}
            <FaMoon className="swap-off h-10 w-10 fill-current" />
          </label>
        </div>
      </header>
    </div>
  );
}

export default Header;
