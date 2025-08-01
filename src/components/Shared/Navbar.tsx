'use client';
import React, {useState, useEffect, useCallback} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {IoMdCloudDownload} from 'react-icons/io';
import {HiMiniXMark} from 'react-icons/hi2';
import {FaBarsStaggered} from 'react-icons/fa6';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    {title: 'Home', path: '/'},
    {title: 'About', path: '/about'},
    {title: 'Services', path: '/services'},
    {title: 'Department', path: '/department'},
    {title: 'Doctors', path: '/doctors'},
  ];

  const moreMenuItems = [
    {title: 'Donation', path: '/donation'},
    {title: 'Machines', path: '/machines'},
    {title: 'Blog', path: '/blogs'},
    {title: 'Gallery', path: '/gallery'},
  ];

  // Use useCallback for better performance
  const handleScroll = useCallback(() => {
    const shouldSticky = window.scrollY > 150;
    if (shouldSticky !== isSticky) {
      setIsSticky(shouldSticky);
    }
  }, [isSticky]);

  useEffect(() => {
    // Add passive: true for better scroll performance
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      {/* Placeholder div to prevent layout shift */}
      <div className={`h-[60px] ${isSticky ? 'block' : 'hidden'} `}></div>

      {/* Outer container that maintains 1280px width */}
      <div
        className={`w-full bg-white/80 ${
          isSticky ? 'sticky top-0 z-50 shadow-md shadow-blue-300/50' : ''
        }`}>
        {/* Inner container with max-width */}
        <div className="max-w-[1280px] mx-auto">
          <nav
            className={`w-full transition-all duration-300 ${
              isSticky ? '' : 'relative'
            }`}
            style={{
              transform: isSticky ? 'translateZ(0)' : 'none',
              willChange: isSticky ? 'transform' : 'auto',
            }}>
            <div className="mx-auto px-2 py-1 flex items-center justify-between">
              {/* Rest of your navbar content remains exactly the same */}
              {/* Brand Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="text-2xl font-bold">
                  hwwwee
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-10">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`font-medium transition-all duration-300 hover:text-myColor ${
                      pathname === item.path ? 'text-myColor' : 'text-accent'
                    }`}>
                    {item.title}
                  </Link>
                ))}

                {/* More Dropdown */}
                <div className="relative group">
                  <button className="font-medium text-accent hover:text-myColor transition-all duration-300">
                    More...
                  </button>
                  <div className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-lg hidden group-hover:block z-20">
                    {moreMenuItems.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        className={`block px-4 py-2 hover:text-myColor ${
                          pathname === item.path
                            ? 'text-myColor'
                            : 'text-accent'
                        }`}>
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Report Button */}
                <Link
                  target="_blank"
                  href="http://203.76.220.102:8526/"
                  className="border-2 text-myColor border-myColor px-6 py-2.5 font-medium rounded-md hover:bg-myColor hover:text-white transition-all duration-300 flex items-center gap-2">
                  Report
                  <IoMdCloudDownload size={23} />
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-1 border border-myColor rounded">
                  {isMenuOpen ? (
                    <HiMiniXMark size={26} />
                  ) : (
                    <FaBarsStaggered size={26} />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="lg:hidden bg-white pt-4 pb-6 px-4 space-y-4">
                {[...menuItems, ...moreMenuItems].map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`block py-2 px-4 ${
                      pathname === item.path ? 'text-myColor' : 'text-accent'
                    }`}
                    onClick={() => setIsMenuOpen(false)}>
                    {item.title}
                  </Link>
                ))}
                <p>hello</p>
              </div>
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
