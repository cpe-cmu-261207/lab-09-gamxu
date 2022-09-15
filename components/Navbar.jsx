import Link from "next/link";
import React from "react";

export default function Navbar(props) {
  return (
    <div 
       style={{fontWeight:"bolder", maxWidth:"1000px", fontStyle:"oblique"}}
       className="d-flex justify-content-center gap-2 fs-5 mt-2 mx-auto"
      >
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/experience">
        <a>Experience</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <Link href="/lab-07">
        <a>Lab07</a>
      </Link>
    </div>
    
  );
}
