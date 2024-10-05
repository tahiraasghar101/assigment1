import React from "react";
 import Link from "next/link";


const Country=() => {
    return(
        <div>
            <ul>
                <u className="flex gap-4 items-center justify-right text-blue-700 cursor-pointer
        hover:bg-slate-600">
                   <li className="text-blue-900"> <Link  href="/pakistan" />PAKISTAN</li>
                <li className="text-green-800"><Link  href="/india" />INDIA</li>
                <li className=" text-red-700"><Link  href="/bangladesh" />BANGLADESH</li>
                <li className="text-amber-950"><Link  href="/soudiarabia" />SOUDIARABIA</li>
                <li className="text-purple-950"><Link  href="/turkey" />TURKEY</li>
                </u>
            </ul>
        </div>
    );
};

export default Country;