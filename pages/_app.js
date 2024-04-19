import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import "../public/assets/css/tailwind2.css";
import Axios from "@/utils/axios";
import Loader from "@/components/common/Loader";
import Login from "./login";
import { Slide, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MyApp = ({ Component, pageProps }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { http, token, logout } = Axios();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }


  if (typeof window !== undefined) {
    if (!token) {
      return (
        <>

          {loading ? (
            <Loader />
          ) : (
            <>

              <Login />

              <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                draggable={false}
                closeOnClick
                pauseOnHover
                transition={Slide}
              />
            </>
          )}
        </>
      );
    }
  }


  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>

          <Layout>
            <Component {...pageProps} />
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              draggable={false}
              closeOnClick
              pauseOnHover
              transition={Slide}
            />
          </Layout>
        </>
      )}
    </>

  )
}
export default MyApp;