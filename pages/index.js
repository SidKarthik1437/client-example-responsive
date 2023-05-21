import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Card from "../components/Card";
import { useSwiper } from "swiper/react";

export default function Home() {
  const swiper = useSwiper();
  return (
    <div className="flex flex-col w-full h-full items-center justify-center overflow-y-scroll overflow-x-hidden scrollbar-none">
      <Head>
        <title>Assignment</title>
        <meta name="description" content="Assignment For Client" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <SubHeader />

      <section
        className="w-full h-auto select-none
      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
      gap-4 p-4 overflow-y-scroll scroll-smooth scrollbar-thin
      lg:px-40
      "
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
      <div className="flex flex-col lg:flex-row w-full gap-y-10 lg:h-96 bg-[#0A0A0A] mt-10 text-white lg:items-center justify-around p-20">
        {/* <div className="flex w-full "> */}
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-x-1">
            <span className="w-10 h-10 bg-[#ED0641] rounded-full"></span>
            <span className="text-2xl font-semibold">Logoipsum</span>
          </div>
          <div className="w-72 lg:w-96">
            Lorem ipsum dolor sit amet consectetur. Leo lorem consequat
            scelerisque quis eu. Dolor nulla cursus eu in velit viverra. A sed
            pellentesque aenean ultrices eu nisl lorem. Tristique interdum donec
            sit amet.
          </div>
          <div className="flex items-center">
            <span className="hover:bg-[#ED0641] w-auto h-auto rounded transition-all duration-100 ease-in-out">
              <svg
                width="35"
                height="35"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.1704 14.7625L16.4146 13.2004H14.888V12.1866C14.888 11.7592 15.1013 11.3427 15.785 11.3427H16.479V10.0126C16.479 10.0126 15.8492 9.9071 15.247 9.9071C13.9899 9.9071 13.1681 10.6553 13.1681 12.0098V13.2004H11.7707V14.7625H13.1681V18.539H14.888V14.7625H16.1704Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className="hover:bg-[#ED0641] w-auto h-auto rounded transition-all duration-100 ease-in-out">
              <svg
                width="35"
                height="12"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.942 2.30506C7.94748 2.3887 7.94748 2.47236 7.94748 2.55601C7.94748 5.10731 6.16745 8.04701 2.91407 8.04701C1.91176 8.04701 0.980671 7.73032 0.197449 7.18065C0.339857 7.19856 0.47677 7.20454 0.624658 7.20454C1.45168 7.20454 2.213 6.89982 2.82096 6.38C2.04321 6.36207 1.39144 5.8064 1.16688 5.0416C1.27643 5.05951 1.38596 5.07146 1.50099 5.07146C1.65982 5.07146 1.81867 5.04756 1.96654 5.00575C1.15594 4.82649 0.547966 4.04975 0.547966 3.11168V3.08779C0.78347 3.23119 1.05735 3.32081 1.34761 3.33275C0.871104 2.98619 0.558924 2.39468 0.558924 1.72548C0.558924 1.36699 0.646541 1.03836 0.799908 0.751562C1.67076 1.92265 2.97979 2.68744 4.44762 2.7711C4.42024 2.6277 4.40381 2.47834 4.40381 2.32896C4.40381 1.26541 5.19251 0.399048 6.1729 0.399048C6.68226 0.399048 7.14233 0.632071 7.46548 1.00849C7.8653 0.924849 8.24869 0.763517 8.58828 0.542448C8.45681 0.990581 8.17749 1.367 7.81054 1.60599C8.16655 1.56418 8.5116 1.45661 8.82926 1.30725C8.58831 1.68963 8.28706 2.03019 7.942 2.30506V2.30506Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className="hover:bg-[#ED0641] w-auto h-auto rounded transition-all duration-100 ease-in-out">
              <svg
                width="35"
                height="35"
                viewBox="0 0 30 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.1192 11.2883C20.9782 10.7446 20.5627 10.3164 20.0352 10.171C19.079 9.90698 15.2448 9.90698 15.2448 9.90698C15.2448 9.90698 11.4107 9.90698 10.4545 10.171C9.92695 10.3164 9.51148 10.7446 9.37047 11.2883C9.11426 12.2738 9.11426 14.3299 9.11426 14.3299C9.11426 14.3299 9.11426 16.3861 9.37047 17.3716C9.51148 17.9153 9.92695 18.3256 10.4545 18.4709C11.4107 18.735 15.2448 18.735 15.2448 18.735C15.2448 18.735 19.079 18.735 20.0352 18.4709C20.5627 18.3256 20.9782 17.9153 21.1192 17.3716C21.3754 16.3861 21.3754 14.3299 21.3754 14.3299C21.3754 14.3299 21.3754 12.2738 21.1192 11.2883V11.2883ZM13.9908 16.1967V12.4631L17.1954 14.33L13.9908 16.1967V16.1967Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className="hover:bg-[#ED0641] w-auto h-auto rounded transition-all duration-100 ease-in-out">
              <svg
                width="35"
                height="35"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.165192"
                  width="28.4459"
                  height="28.4459"
                  rx="8"
                  fill=""
                />
                <path
                  d="M18.2276 9.71069H10.1542C9.78425 9.71069 9.48367 10.0028 9.48367 10.3613V18.0843C9.48367 18.4428 9.78425 18.7349 10.1542 18.7349H18.2276C18.5976 18.7349 18.9002 18.4428 18.9002 18.0843V10.3613C18.9002 10.0028 18.5976 9.71069 18.2276 9.71069ZM12.3297 17.4457H10.934V13.1391H12.3318V17.4457H12.3297ZM11.6318 12.5509C11.1841 12.5509 10.8226 12.2024 10.8226 11.7754C10.8226 11.3483 11.1841 10.9999 11.6318 10.9999C12.0774 10.9999 12.4411 11.3483 12.4411 11.7754C12.4411 12.2044 12.0795 12.5509 11.6318 12.5509V12.5509ZM17.5613 17.4457H16.1656V15.3508C16.1656 14.8513 16.1551 14.2087 15.4405 14.2087C14.7132 14.2087 14.6018 14.7526 14.6018 15.3146V17.4457H13.2062V13.1391H14.5451V13.7273H14.564C14.7511 13.3889 15.2072 13.0323 15.8861 13.0323C17.2986 13.0323 17.5613 13.9247 17.5613 15.0849V17.4457V17.4457Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className="hover:bg-[#ED0641] w-auto h-auto rounded transition-all duration-100 ease-in-out">
              <svg
                width="35"
                height="35"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.68 12.0098C13.4553 12.0098 12.4674 12.9979 12.4674 14.2229C12.4674 15.4479 13.4553 16.436 14.68 16.436C15.9048 16.436 16.8926 15.4479 16.8926 14.2229C16.8926 12.9979 15.9048 12.0098 14.68 12.0098ZM14.68 15.6617C13.8886 15.6617 13.2416 15.0165 13.2416 14.2229C13.2416 13.4294 13.8867 12.7841 14.68 12.7841C15.4734 12.7841 16.1185 13.4294 16.1185 14.2229C16.1185 15.0165 15.4715 15.6617 14.68 15.6617V15.6617ZM17.4992 11.9193C17.4992 12.2063 17.2682 12.4355 16.9832 12.4355C16.6962 12.4355 16.4671 12.2043 16.4671 11.9193C16.4671 11.6342 16.6982 11.4031 16.9832 11.4031C17.2682 11.4031 17.4992 11.6342 17.4992 11.9193ZM18.9647 12.4432C18.9319 11.7517 18.774 11.1392 18.2676 10.6346C17.7631 10.1299 17.1507 9.97199 16.4594 9.93732C15.7469 9.89687 13.6113 9.89687 12.8988 9.93732C12.2094 9.97006 11.597 10.128 11.0906 10.6326C10.5841 11.1373 10.4282 11.7498 10.3935 12.4413C10.353 13.1539 10.353 15.29 10.3935 16.0026C10.4262 16.6941 10.5841 17.3066 11.0906 17.8112C11.597 18.3159 12.2075 18.4738 12.8988 18.5085C13.6113 18.5489 15.7469 18.5489 16.4594 18.5085C17.1507 18.4757 17.7631 18.3178 18.2676 17.8112C18.7721 17.3066 18.93 16.6941 18.9647 16.0026C19.0051 15.29 19.0051 13.1558 18.9647 12.4432V12.4432ZM18.0442 16.7673C17.894 17.1448 17.6032 17.4357 17.2239 17.5878C16.6558 17.8132 15.3078 17.7612 14.68 17.7612C14.0523 17.7612 12.7024 17.8112 12.1362 17.5878C11.7588 17.4376 11.468 17.1467 11.3159 16.7673C11.0906 16.1991 11.1426 14.8508 11.1426 14.2229C11.1426 13.595 11.0925 12.2448 11.3159 11.6785C11.4661 11.301 11.7569 11.0102 12.1362 10.858C12.7043 10.6326 14.0523 10.6846 14.68 10.6846C15.3078 10.6846 16.6577 10.6346 17.2239 10.858C17.6013 11.0082 17.8921 11.2991 18.0442 11.6785C18.2695 12.2467 18.2175 13.595 18.2175 14.2229C18.2175 14.8508 18.2695 16.201 18.0442 16.7673Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="flex flex-col items-left gap-y-5">
          <span className="font-medium text-xl tracking-wide">Guideline</span>
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span>Cities Page</span>
          <span>Blogs</span>
        </div>
        <div className="flex flex-col items-left gap-y-5">
          <span className="font-medium text-xl tracking-wide">Company</span>
          <span>About Us</span>
          <span>Contact Us</span>
          <span>Products</span>
          <span>FAQ</span>
        </div>
        <div className="flex flex-col items-left gap-y-5">
          <span className="font-medium text-xl tracking-wide">
            Get In Touch
          </span>
          <span>Location</span>
          <span>Contact Number</span>
          <span>Email</span>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
