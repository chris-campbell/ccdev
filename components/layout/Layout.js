import Footer from "./footer/Footer";
import dynamic from "next/dynamic";

const Navbar = process.browser
  ? dynamic(() => import("./navBar/NavBar"), { ssr: false })
  : null;
// console.log("Procress", process.browser);

function Layout({ children }) {
  return (
    <div>
      {process.browser ? <Navbar /> : ""}
      {/* <Navbar /> */}
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
