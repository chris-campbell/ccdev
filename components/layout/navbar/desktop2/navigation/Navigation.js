import React from "react";
import Link from "next/link";
import { NavigationContainer } from "./styles/styles";
import { useRouter } from "next/router";

const Navigation = () => {
  const { pathname } = useRouter();

  return (
    <NavigationContainer>
      <ul>
        {pathname === "/" && (
          <>
            <li>
              <Link href="#me">Me</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
          </>
        )}
        <li>
          <Link href="/articles">Blog</Link>
        </li>
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
