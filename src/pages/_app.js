import AppContext from "@context/AppContext";
import Script from "next/script";
import Header from "@components/Header";
import useInitialState from "@hooks/useInitialState";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Header />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-X0S23TM5E8"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
    
            gtag('config', 'G-X0S23TM5E8');`}
      </Script>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
