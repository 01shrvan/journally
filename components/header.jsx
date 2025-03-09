import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="container mx-auto">
      <nav className="py-6 px-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-orange-800 text-3xl font-bold tracking-wide hover:text-orange-700 transition-colors"
        >
          journally<span className="text-orange-600">.</span>
        </Link>

        <div className="flex items-center gap-4">
            {/* ctas */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
