import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SmoothScrollProvider from "../providers/SmoothScrollProvider";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <SmoothScrollProvider>
          <Outlet />
        </SmoothScrollProvider>
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
