import Footer from "./footer/Footer";
import dynamic from "next/dynamic";
import { Analytics } from '@vercel/analytics/react';

const Navbar = dynamic(() => import("./navbar/Navbar"), { ssr: false });

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Analytics />
      <Footer />
    </div>
  );
}

export default Layout;
