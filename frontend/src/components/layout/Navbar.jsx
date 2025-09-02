import { useState } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // 모바일 메뉴의 열림/닫힘 상태를 관리하는 State

  return (
    <nav className="bg-zinc-900 text-white shadow-lg">
      {/* <div className="max-w-7xl mx-auto px-4"> */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* 왼쪽: 로고 */}
          <div className="flex-shrink-0 flex items-center">
            <RouteLink className="font-bold text-xl tracking-wider" to="/">
              HoLab
            </RouteLink>
          </div>
          
          {/* 오른쪽: 메뉴 링크와 버튼을 포함하는 그룹 (lg 사이즈 이상에서 보임) */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {/* 메뉴 링크 */}
            <div className="flex space-x-4">
              <ScrollLink
                className="text-gray-300 hover:bg-zinc-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer"
                to="home"
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
              >
                Home
              </ScrollLink>
              <ScrollLink
                className="text-gray-300 hover:bg-zinc-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer"
                to="service"
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
              >
                Service
              </ScrollLink>
              <ScrollLink
                className="text-gray-300 hover:bg-zinc-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer"
                to="about"
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
              >
                About Me
              </ScrollLink>
            </div>
            
            {/* 로그인/가입 버튼 */}
            {/* <div className="flex items-center space-x-2">
              <button type="button" className="text-white border border-gray-300 hover:bg-gray-100 hover:text-zinc-900 font-semibold py-1 px-3 rounded-md transition-colors duration-200 text-sm">
                Login
              </button>
              <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded-md transition-colors duration-200 text-sm"
              >
                Sign Up
              </button>
            </div> */}
          </div>
          
          {/* 모바일 메뉴 버튼 (lg 사이즈 미만에서 보임) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)} // 클릭 시 isOpen 상태 토글
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* 아이콘: isOpen 상태에 따라 햄버거 또는 X 모양으로 변경 */}
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 (isOpen이 true일 때만 보임) */}
      {isOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <ScrollLink
              className="text-gray-300 hover:bg-zinc-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 cursor-pointer"
              to="home"
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
            >
              Home
            </ScrollLink>
            <ScrollLink
              className="text-gray-300 hover:bg-zinc-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 cursor-pointer"
              to="service"
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
            >
              Service
            </ScrollLink>
            <ScrollLink
              className="text-gray-300 hover:bg-zinc-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 cursor-pointer"
              to="about"
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
            >
              About Me
            </ScrollLink>
          </div>
          {/* 모바일 화면의 로그인/가입 버튼 */}
          {/* <div className="px-4 pb-3 flex gap-2">
            <button type="button" className="flex-1 text-white border border-gray-300 hover:bg-gray-100 hover:text-zinc-900 font-semibold py-1 px-3 rounded-md transition-colors duration-200 text-sm">
              Login
            </button>
            <button
              type="button"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded-md transition-colors duration-200 text-sm"
            >
              Sign Up
            </button>
          </div> */}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
