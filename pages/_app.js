import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "../styles/nprogress.css";
import { store } from "../store";
import { Provider } from "react-redux";
import Footer from "../components/Footer";
import Router from "next/router";
import nProgress from "nprogress";


Router.events.on("routeChangeStart", nProgress.start)
Router.events.on("routeChangeError", nProgress.done)
Router.events.on("routeChangeComplete", nProgress.done)

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
