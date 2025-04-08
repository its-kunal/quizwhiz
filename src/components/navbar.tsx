import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-231f20 text-f3dfa2 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          QuizWhiz
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/quizzes" className="hover:text-bb4430">
            Quizzes
          </Link>
          <Link href="/about" className="hover:text-bb4430">
            About
          </Link>
          <Link href="/contact" className="hover:text-bb4430">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          {/* Mobile Menu Icon (Hamburger) - You can implement the functionality using JavaScript */}
          <button className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
