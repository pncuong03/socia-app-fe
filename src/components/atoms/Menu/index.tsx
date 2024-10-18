import React from "react";
import { Menu } from "antd";
import type { GetProp, MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import { useColorScheme } from "@mui/material";
import routesName from "src/routes/enum.routes";

type MenuItem = GetProp<MenuProps, "items">[number];

interface Props {
  items: MenuItem[];
  defaultSelectedKey: string;
}

const MenuCustomzie = (props: Props) => {
  const navigate = useNavigate();
  const { mode } = useColorScheme();

  const handleMenuClick = (e: any) => {
    if (e.key.startsWith(routesName.HOME)) {
      navigate(e.key);
    }
  };

  const menuItems = props.items.map((item: any) => ({
    key: item.key,
    label: (
      <div className="flex h-10 items-center text-2xl font-normal">
        {item.icon && <span className="mr-2">{item.icon}</span>}

        <span>{item.label}</span>
      </div>
    ),
  }));

  return (
    <Menu
      className={`flex w-full flex-col gap-1 shadow-md ${mode === "light" ? "bg-white" : "bg-black-300"}`}
      items={menuItems}
      onClick={handleMenuClick}
      defaultSelectedKeys={[props.defaultSelectedKey]}
    />
  );
};

export default MenuCustomzie;
