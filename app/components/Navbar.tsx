"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="nav fixed top-0 left-0 w-full h-18 border-b  bg-white bg-opacity-20 backdrop-blur-md  z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/">
              {/* Container for inline icon and text */}
              <div className="flex items-center justify-center space-x-2 mb-2">
                <span className="inline-flex items-center text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    // class="bi bi-stack"
                    viewBox="0 0 16 16"
                  >
                    <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.6.6 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.6.6 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.6.6 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535z" />
                    <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.6.6 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0z" />
                  </svg>
                </span>
                <h6 className="text-2xl font-extrabold font-sans">Tyco</h6>

                {/* Sub Tags */}

                <sub className="text-xs ">
                  Engineering Services International
                </sub>
              </div>
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-950 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" passHref>
              <span className="text-zinc-950 hover:bg-gray-200 px-3 py-2 rounded transition duration-300">
                Home
              </span>
            </Link>
            <Link href="/about" passHref>
              <span className="text-zinc-950 hover:bg-gray-200 px-3 py-2 rounded transition duration-300">
                About
              </span>
            </Link>
            <Link href="/services" passHref>
              <span className="text-zinc-950 hover:bg-gray-200 px-3 py-2 rounded transition duration-300">
                Services
              </span>
            </Link>

            <Link href="/team" passHref>
              <span className="text-zinc-950 hover:bg-gray-200 px-3 py-2 rounded transition duration-300">
                Team
              </span>
            </Link>
            <Link href="/projects" passHref>
              <span className="bg-primary text-white px-3 py-2 rounded transition duration-300">
                Projects
              </span>
            </Link>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            isOpen ? "block" : "hidden"
          } absolute top-14 left-0 w-full bg-secondary p-4`}
        >
          <Link href="/" passHref>
            <span
              onClick={handleLinkClick}
              className="block text-zinc-950 text-center hover:bg-gray-200 hover:text-zinc-950 px-3 py-2 rounded transition duration-300"
            >
              Home
            </span>
          </Link>
          <Link href="/about" passHref>
            <span
              onClick={handleLinkClick}
              className="block text-zinc-950 text-center hover:bg-gray-200 hover:text-zinc-950 px-3 py-2 rounded transition duration-300"
            >
              About
            </span>
          </Link>
          <Link href="/services" passHref>
            <span
              onClick={handleLinkClick}
              className="block text-zinc-950 text-center hover:bg-gray-200 hover:text-zinc-950 px-3 py-2 rounded transition duration-300"
            >
              Services
            </span>
          </Link>
          <Link href="/team" passHref>
            <span
              onClick={handleLinkClick}
              className="block text-zinc-950 text-center hover:bg-gray-200 px-3 py-2 rounded transition duration-300"
            >
              Team
            </span>
          </Link>
          <Link href="/projects" passHref>
            <span
              onClick={handleLinkClick}
              className="block text-zinc-950 text-center hover:bg-gray-200 hover:text-zinc-950 px-3 py-2 rounded transition duration-300"
            >
              Projects
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
