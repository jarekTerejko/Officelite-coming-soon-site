import React from "react";
import { ContainerElement } from "../Container/Container";
import { NavbarContent, NavbarWrapper } from "./NavbarElements";
import Logo from "../../public/assets/shared/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <ContainerElement>
        <NavbarContent>
          <Link href="/">
            <a>
              <Image src={Logo} />
            </a>
          </Link>
        </NavbarContent>
      </ContainerElement>
    </NavbarWrapper>
  );
};

export default Navbar;
