import React from 'react';

interface NavProps {
  cartItemCount: number;
}
const NavBar = ({ cartItemCount }: NavProps) => {
  return <div>NavBar: {cartItemCount}</div>;
};

export default NavBar;
