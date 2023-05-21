import "../styles/globals.css";

import localFont from "next/font/local";

// Font files can be colocated inside of `app`
const circular = localFont({
  src: "../styles//Circular//CircularStd-Book.otf",
  display: "swap",
});

function MyApp({ Component, pageProps }) {
  return (
    <div
      className={circular.className}
    >
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
