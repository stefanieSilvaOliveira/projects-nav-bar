"use client";

import Link from "next/link"
import Image from "next/image"
import Navitem, { NavItemInterface } from "../Navitem"
import "./index.css"
import { usePathname } from "next/navigation"

import { FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {

    const items: NavItemInterface[] = [
        {
            url: "/",
            label: "Inicio"
        },

        {
            url: "/menu",
            label: "Cardápio"
        },

        {
            url: "/promotion",
            label: "Promoções"
        },

        {
            url: "/contacts",
            label: "Contatos"
        },
    ]

    const pathname = usePathname();
    
    const [openMenu,setOpenMenu] = useState<boolean>(false);

    return(
   
        <header>
            <nav className="navbar">
              <Link href="/">
              <Image className="logo"
              src="/logo-image.png" 
              width={100}
              height={100} 
              alt="logo-burguer"/>
             
              </Link>

             <ul className={`nav-items ${openMenu ? 'open' : ""}`}>
                {items.map((item, index) => (

                    <Navitem
                       key={index}
                       url={item.url}
                       label={item.label}
                       isActive={pathname === item.url}
                       />
                ))}   
             
             </ul>

             <button className="btn-mobile" onClick={() => setOpenMenu(!openMenu)}>
             <FaBars />
             </button>
                 
             <button className="btn-default">Cupom 10%</button>
             </nav>
             </header>
             
            );
          }