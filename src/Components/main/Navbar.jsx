
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Dashboard", path: "/" },
    { name: "Employees", path: "/employees" },
    { name: "Departments", path: "/departments" },
    { name: "Attendance", path: "/attendance" },
    { name: "Reports", path: "/reports" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            EmpManager
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-600 font-bold"
                    : "text-gray-600 hover:text-indigo-600"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Login Register */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Register
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 py-4">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-indigo-600"
              >
                {link.name}
              </NavLink>
            ))}

            <hr />

            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="text-indigo-600"
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="text-indigo-600"
            >
              Register
            </Link>

          </div>
        )}

      </div>
    </nav>
  );
}
