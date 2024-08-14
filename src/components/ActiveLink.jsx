import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-primary bg-slate-50 rounded-full px-4 p-2 font-medium"
          : " font-medium hover:bg-slate-50 rounded-full "
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
