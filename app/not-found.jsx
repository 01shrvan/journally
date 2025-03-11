import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        {" "}
        Oops! The page you are looking for might have been removed or had its
        name changed.
      </p>
      <Link href="/">
      <Button variant="journal">Return Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
