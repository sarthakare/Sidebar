"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import styles from "./Sidebar.module.css";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AssessmentIcon from "@mui/icons-material/Assessment";
import WorkIcon from "@mui/icons-material/Work";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import BuildIcon from "@mui/icons-material/Build";
import GroupIcon from "@mui/icons-material/Group";

const SidebarComponent = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const menuItems = [
    {
      label: "Dashboard",
      icon: <HomeIcon />, 
      link: "/dashboard",
    },
    {
      label: "Reports",
      icon: <DashboardIcon />,
      subItems: [
        {
          label: "Overview",
          icon: <AssessmentIcon />,
        },
        {
          label: "Detailed Reports",
          icon: <AssessmentIcon />,
        },
        {
          label: "Advanced Reports",
          icon: <BuildIcon />,
          subItems: [
            {
              label: "Custom Reports",
              icon: <AssessmentIcon />,
            },
            {
              label: "Analytics",
              icon: <AssessmentIcon />,
            },
            {
              label: "Team Analytics",
              icon: <GroupIcon />,
              subItems: [
                {
                  label: "Team Overview",
                },
                {
                  label: "Individual Performance",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: "Projects",
      icon: <WorkIcon />, 
      link: "/projects",
    },
    {
      label: "Tasks",
      icon: <WorkIcon />,
    },
    {
      label: "Settings",
      icon: <SettingsIcon />,
      subItems: [
        {
          label: "General",
          icon: <SettingsIcon />,
        },
        {
          label: "Profile",
          icon: <AccountCircleIcon />,
        },
      ],
    },
    {
      label: "Log out",
      icon: <ExitToAppIcon />, 
    },
  ];

  const renderMenu = (items) => {
    return items.map((item, index) => {
      if (item.subItems) {
        return (
          <SubMenu key={index} label={item.label} icon={item.icon} className={styles.menuItem}>
            {renderMenu(item.subItems)}
          </SubMenu>
        );
      }

      if (item.link) {
        return (
          <Link href={item.link} key={index} className={styles.link}>
            <MenuItem icon={item.icon} className={styles.menuItem}>{item.label}</MenuItem>
          </Link>
        );
      }

      return (
        <MenuItem key={index} icon={item.icon} className={styles.menuItem}>
          {item.label}
        </MenuItem>
      );
    });
  };

  return (
    <main>
      <div className={styles.sidebarWrapper}>
        <Sidebar
          className={styles.sidebar}
          width="400px"
          collapsed={collapsed}
          collapsedWidth="80px"
          transitionDuration={300}
        >
          {/* Sidebar Header */}
          <div className={styles.sidebarHeader}>
            <Menu>
              <MenuItem
                className={styles.hamburgerMenu}
                icon={<MenuRoundedIcon />}
                onClick={toggleSidebar}
              />
            </Menu>
          </div>

          {/* Main Sidebar Menu */}
          <Menu width="400px">
            {renderMenu(menuItems)}
          </Menu>
        </Sidebar>
      </div>
    </main>
  );
};

export default SidebarComponent;