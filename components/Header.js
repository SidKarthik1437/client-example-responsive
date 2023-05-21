import React from 'react'

function Header() {
    return (
      <div className="flex w-full h-[136px] bg-white items-center justify-around self-center shadow sticky top-0 z-20">
        <div className="hidden md:flex items-center gap-x-1">
          <span className="w-10 h-10 bg-[#ED0641] rounded-full"></span>
          <span className="text-2xl font-semibold">Logoipsum</span>
        </div>
        <div className="flex w-full md:w-4/12 h-12 items-center border border-gray-300 rounded-lg px-4 mx-1 gap-x-2  ">
          <input
            type="text"
            placeholder="Search Anything"
            className="w-full h-full outline-none"
          />
          <div className="flex flex-1 items-center w-12 h-8 p-1 bg-[#ED0641] rounded-lg cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="w-9 h-5 flex items-center"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-x-4 ">
          <div className="flex items-center text-gray-500 gap-x-1 hover:scale-105 transform transition-all duration-50 ease-in-out cursor-pointer">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#6B7280"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
            </span>
            <span>Join as Pro</span>
          </div>
          <div className="flex items-center border-gray-300 antialiased border p-2 rounded-xl gap-x-2 hover:shadow hover:scale-105 transform transition-all duration-50 ease-in-out cursor-pointer">
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#6B7280"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#6B7280"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    );
}

export default Header