import React from "react";

export interface IHeaderProps {}

const Header = (props: IHeaderProps) => {
  console.log("render header");
  return <div className="header">Header</div>;
};

export default Header;
