import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

const options = {
  burgerColor: "grey",
  burgerColorHover: "#006d77",
  logo,
  logoWidth: "20vmax",
  navColor1: "#edf6f9",
  logoHoverSize: "10px",
  logoHoverColor: "#006d77",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "2.3vmax",
  link1Color: "#006d77",
  link1ColorHover: "#ff9f1c",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1Margin: "2vmax",
  link1Family: "cursive",
  profileIconUrl: "/login",
  searchIconUrl: "/search",
  cartIconUrl: "/me",
  profileIconColor: "#006d77",
  searchIconColor: "#006d77",
  cartIconColor: "#006d77",
  profileIconColorHover: "#ff9f1c",
  searchIconColorHover: "#ff9f1c",
  cartIconColorHover: "#ff9f1c",
  cartIconMargin: "1vmax",
  profileIconMargin: "1vmax",
  searchIconMargin: "1vmax",

  logoTransition: "0.1",
  logoAnimationTime: "0.1",

  nav1Transition: "0.1",
  nav2Transition: "0.2",
  nav3Transition: "0.3",
  nav4Transition: "0.4",

  link1Transition: "0.1",
  link2Transition: "0.2",
  link3Transition: "0.3",
  link4Transition: "0.4",

  link1AnimationTime: "0.1",
  link2AnimationTime: "0.2",
  link3AnimationTime: "0.3",
  link4AnimationTime: "0.4",

  searchIconTransition:"0.2",
  cartIconTransition:"0.2",
  profileIconTransition:"0.2",

  searchIconAnimationTime	: "0.2",
  cartIconAnimationTime	: "0.2",
  profileIconAnimationTime	: "0.2",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;