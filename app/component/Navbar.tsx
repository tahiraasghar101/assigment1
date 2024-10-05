import React from "react";
import Link from "next/link";

export default function Navbar(){
    return(
        <>
        <ul className="flex gap-4 items-center justify-right text-purple-950 cursor-pointer
        hover:bg-slate-600">
        <li>
        <Link  href="/">  HOME  </Link>  |
        <Link  href="/about" >  ABOUT  </Link>  |
        <Link  href="/contact" >  CONTACT  </Link>  |
        <Link  href="/feedback" >  FEEDBACK  </Link>  |
        <Link  href="/country" >  COUNTRY  </Link>  |
        
         </li></ul>
         </>
    )
}