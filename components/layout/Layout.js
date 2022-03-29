import Footer from "./footer/Footer";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./navbar/NavBar"), { ssr: false });

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
