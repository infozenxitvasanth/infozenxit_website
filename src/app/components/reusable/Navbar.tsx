
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiChevronDown, FiChevronUp, FiMenu, FiX } from "react-icons/fi";
import { ButtonOne } from "./button/Button";
import { usePathname } from "next/navigation";
import logo from '@/assets/logo/white_logo.jpg'
import Image from "next/image";
const NAV_ITEMS = [
    {
        navName: "Home",
        route: "/",
        dropdown: false,
    },
    {
        navName: "Services",
        route: "/services",
        dropdown: true,
        dropdownList: [
            { name: "Web Design & Development", route: "/services/web-design-development" },
            { name: "Mobile App Development", route: "/services/mobile-app-development" },
            { name: "Logo Design & Graphic Design", route: "/services/logo-design-graphic-design" },
            { name: "Support & Maintenance", route: "/services/support-maintenance" },
            { name: "E-commerce Development", route: "/services/ecommerce-development" },
            { name: "SEO & Digital Marketing Services", route: "/services/seo-digital-marketing" },



        ],
    },
    {
        navName: "Internship",
        route: "/internship",
        dropdown: false,
    },
    //     {
    //     navName: "Course",
    //     route: "/course",
    //     dropdown: false,
    // },
    {
  navName: "Gallery",
        route: "/gallery",
        dropdown: false,
    },
    {
        navName: "Career",
        route: "/career",
        dropdown: false,
    },
    {
        navName: "About",
        route: "/about",
        dropdown: false,
    },
];

const Navbar = () => {

    const pathname = usePathname();

    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const closeMobile = () => {
        setIsMobileOpen(false);
        setOpenDropdown(null);
    };

    const handleDesktopEnter = (name: string) => {
        setOpenDropdown(name);
    };

    const handleDesktopLeave = () => {
        setOpenDropdown(null);
    };

    const toggleDesktopDropdown = (name: string) => {
        setOpenDropdown((prev) => (prev === name ? null : name));
    };

    const toggleMobileDropdown = (name: string) => {
        setOpenDropdown((prev) => (prev === name ? null : name));
    };
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <header
                className={`navbar flex justify-center items-center shadow-md ${isSticky ? "navbar-sticky" : ""
                    }`}
            >
                <div className="container">
                    <div className="navbar-container">
                        {/* Logo */}
            <Link href={'/'}>            <div className="navbar-logo">
                               <Image src={logo} alt={`border rounded-md`}  height={60} />
                        </div></Link>

                        {/* Desktop menu */}
                        <nav className="navbar-menu">
                            {NAV_ITEMS.map((item) =>
                                item.dropdown ? (
                                    <div
                                        key={item.navName}
                                        className="menu-item has-dropdown"
                                        onMouseEnter={() => handleDesktopEnter(item.navName)}
                                        onMouseLeave={handleDesktopLeave}
                                    >
                                        <Link
                                            href={item.route}
                                            type="button"
                                            // className={`menu-link ${item.route === pathname ? "active" : ""}`}
                                            className={`${item.route === pathname ? "active" : ""} menu-link dropdown-toggle flex items-center gap-1`}
                                            onClick={() => toggleDesktopDropdown(item.navName)}
                                        >
                                            {item.navName}
                                            {openDropdown === item.navName ? (
                                                <FiChevronUp className="dropdown-icon" />
                                            ) : (
                                                <FiChevronDown className="dropdown-icon" />
                                            )}
                                        </Link>

                                        <div
                                            className={`dropdown-menu ${openDropdown === item.navName ? "dropdown-open" : ""
                                                }`}
                                        >
                                            {item.dropdownList?.map((child) => (
                                                <Link
                                                    key={child.name}
                                                    href={child.route}
                                                    className="dropdown-link"
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        key={item.navName}
                                        href={item.route}
                                        className={`menu-link ${item.route === pathname ? "active" : ""}`}
                                    >
                                        {item.navName}
                                    </Link>
                                )
                            )}
                        </nav>

                        {/* Right side: button + mobile toggle */}
                        <div className="navbar-right">
                            <Link href="/contact" >
                                <ButtonOne fun={closeMobile} name="Contact" />
                            </Link>

                            {/* Mobile hamburger / X */}
                            <button
                                className="mobile-menu-toggle"
                                type="button"
                                onClick={() => setIsMobileOpen((prev) => !prev)}
                            >
                                {isMobileOpen ? <FiX /> : <FiMenu />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Overlay (click outside to close) */}
            <div
                className={`mobile-overlay ${isMobileOpen ? "open" : ""}`}
                onClick={closeMobile}
            />

            {/* Mobile slide-in menu */}
            <div className={`mobile-menu ${isMobileOpen ? "open" : ""}`}>
                {NAV_ITEMS.map((item) =>
                    item.dropdown ? (
                        <div key={item.navName}>
                            <button
                                className="mobile-link"
                                type="button"
                                onClick={() => toggleMobileDropdown(item.navName)}
                            >
                                <Link href={item.route}> <span>{item.navName}</span></Link>
                                {openDropdown === item.navName ? (
                                    <FiChevronUp className="dropdown-icon" />
                                ) : (
                                    <FiChevronDown className="dropdown-icon" />
                                )}
                            </button>

                            {openDropdown === item.navName && (
                                <div className="mobile-submenu">
                                    {item.dropdownList?.map((child) => (
                                        <Link
                                            key={child.name}
                                            href={child.route}
                                            onClick={closeMobile}
                                        >
                                            {child.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link
                            key={item.navName}
                            href={item.route}
                            className="mobile-link"
                            onClick={closeMobile}
                        >
                            {item.navName}
                        </Link>
                    )
                )}

                {/* Contact in mobile menu */}
                {/* <Link href="/contact" >
                    <ButtonOne fun={closeMobile} name="Contact" />
                </Link> */}
            </div>
        </>
    );
};

export default Navbar;
