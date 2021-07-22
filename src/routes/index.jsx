import React, { lazy } from "react";
import { Redirect } from "react-router-dom";

// 【导入组件】
// import App from "../App";
import Home from "../pages/Home";
const HomeIndex = lazy(() => import("@/pages/HomeIndex"));

export default [
  // [/] 重定向 [/home]
  {
    path: "/",
    exact: true /*精确匹配*/,
    render: () => <Redirect to="/home" /> /*重定向*/,
  },
  // tabBar-router
  {
    path: "/home",
    component: Home,
  },
];
