import Footer from "./footer/Footer";
import dynamic from "next/dynamic";
import TempFooter from "./TempFooter";

const Navbar = dynamic(() => import("./navbar/Navbar"), { ssr: false });

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <TempFooter />
    </div>
  );
}

export default Layout;
