import React from "react";
import { MenuItem } from "./menuItem/MenuItem";
import { DotsMenu, Wrapper } from "./Sidebar.styles";

const Sidebar = () => {
  const menuItems = [
    { id: 1, link: "1", title: "your info" },
    { id: 2, link: "2", title: "select plan" },
    { id: 3, link: "3", title: "add-ons" },
    { id: 4, link: "4", title: "summary" },
  ];

  return (
    <Wrapper>
      <DotsMenu>
        {menuItems.map((props) => (
          <MenuItem key={props.id} {...props} />
        ))}
      </DotsMenu>
    </Wrapper>
  );
};

export default Sidebar;
