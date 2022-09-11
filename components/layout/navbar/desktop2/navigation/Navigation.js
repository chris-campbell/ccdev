import React from "react";
import Link from "next/link";
import { NavigationContainer } from "./styles/styles";

const Navigation = () => {
  return (
    <NavigationContainer>
      <ul>
        <li>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">Blog</Link>
        </li>
        <li>
          <Link href="#">Work</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
