import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, BrowserRouter } from "react-router-dom";
// import { renderRoutes } from "react-router-config";
// import routes from "./routes";

// 导入antd-mobile样式
// import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'

// 导入字体图标库的样式
import "./assets/fonts/iconfont.css";


// 组件放在样式后面，避免被覆盖
import App from './App';
// 全局样式放在组件库样式后面
import './index.css';


ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
)
