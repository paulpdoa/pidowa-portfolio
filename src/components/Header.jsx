import React, { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      className={`px-4 py-6 sm:px-6 lg:px-8 ${theme === 'light' ? 'bg-white text-slate-900' : 'bg-slate-950 text-slate-100'}`}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
        <div className="logo flex-shrink-0 mx-auto md:mx-0">
          <img
            width={160}
            height={160}
            className="rounded-lg w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover"
            src="/photos/me.jpg"
            alt="profile picture"
          />
        </div>

        <div className="flex-1 min-w-0 w-full">
          <div className="flex sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <h1 className="text-xl sm:text-2xl font-bold truncate">Paul Andres</h1>
              <svg
                viewBox="0 0 22 22"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 flex-shrink-0"
                aria-label="Verified user"
              >
                <path
                  d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                  fill="#1d9bf0"
                ></path>
              </svg>
            </div>
            <button
              onClick={toggleTheme}
              className="relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-0 min-w-0 bg-gray-600 hover:bg-gray-700 cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <div className="absolute left-0.5 top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out translate-x-0">
                  <svg className="h-3 w-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              ) : (
                <div className="absolute left-0.5 top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out translate-x-5">
                  <svg className="h-3 w-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                </div>
              )}
            </button>
          </div>

          <p className="text-xs sm:text-sm text-foreground/70 mt-0.5 flex items-center gap-1">
            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span className="truncate">Metro Manila, Philippines</span>
          </p>

          <div className="mt-2">
            <p className="text-sm sm:text-lg md:text-lg lg:text-[20px]">
              Developer <span className="text-gray-400 dark:text-gray-500">\</span> Core Banking Technical Consultant
            </p>
          </div>

          <div className="flex flex-wrap items-center mt-3 gap-2">
            <div className={`w-auto text-sm sm:text-base p-2 rounded-lg transition-colors duration-300 cursor-pointer flex items-center gap-2 ${theme === 'light' ? 'bg-slate-50 hover:bg-slate-100 text-slate-700' : 'bg-slate-900 hover:bg-slate-800 text-slate-300'}`}>
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span>polopdoandres@gmail.com</span>
            </div>
            <div className={`w-auto text-sm sm:text-base p-2 rounded-lg transition-colors duration-300 cursor-pointer flex items-center gap-2 ${theme === 'light' ? 'bg-slate-50 hover:bg-slate-100 text-slate-700' : 'bg-slate-900 hover:bg-slate-800 text-slate-300'}`}>
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span>+639214231007</span>
            </div>
            <div className={`w-auto text-sm sm:text-base p-2 rounded-lg transition-colors duration-300 cursor-pointer flex items-center gap-2 ${theme === 'light' ? 'bg-slate-50 hover:bg-slate-100 text-slate-700' : 'bg-slate-900 hover:bg-slate-800 text-slate-300'}`}>
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>linkedin.com/in/paul-andres174747210/</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
