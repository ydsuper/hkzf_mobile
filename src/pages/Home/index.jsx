import React, { useEffect, useRef, useState } from 'react';

// 导入react-router
// import { Switch, Route } from "react-router-dom";
// 导入解析路由配置
import { renderRoutes } from "react-router-config";
// 导入路由配置
// import routes from "@/routes";
// 导入antd-mobile
import { TabBar } from "antd-mobile";

// 导入样式文件
import style from "./index.module.css";

function index(props) {
    // console.log(props); //@log

    //#region TabList
    const tabList = [
        {
            title: "首页",
            icon: "icon-ind",
            path: "/home"
        },
        {
            title: '找房',
            icon: 'icon-findHouse',
            path: '/home/find'
        },
        {
            title: '资讯',
            icon: 'icon-infom',
            path: '/home/news'
        },
        {
            title: '我的',
            icon: 'icon-my',
            path: '/home/profile'
        }
    ];
    //#endregion

    // 记录pathName
    const pathName = useRef(props.location.pathname);
    // 当前的tabBar
    const [curTab, setCurTab] = useState(props.location.pathname);

    //#region 实现生命周期
    useEffect(() => {
        // 判断路径是否不同，不同就更新
        if (pathName.current != props.location.pathname) {
            // console.log(2, props.location.pathname); //@log
            setCurTab(props.location.pathname);
        }
        return () => {
            // preProps-pathname
            pathName.current = props.location.pathname;
            // console.log(1, pathName.current); //@log
        }
    })
    //#endregion

    //#region TabBar-render——Function
    function renderTabBar() {
        return tabList.map((item) => (
            <TabBar.Item
                title={item.title}
                key={item.title}
                icon={<i className={`iconfont ${item.icon}`}></i>}
                selectedIcon={<i className={`iconfont ${item.icon}`}></i>}
                selected={curTab === item.path}
                onPress={() => {
                    // 更新tabBar
                    // setCurTab(item.path);
                    // 跳转路由
                    props.history.push(item.path);
                }}
            ></TabBar.Item>
        ))
    }
    //#endregion

    return (
        <div className={style.home}>
            {/* 配置路由pages */}
            {/* {renderRoutes(routes)} */}
            {renderRoutes(props.route.routes)}

            {/* TabBar start */}
            <TabBar
                unselectedTintColor="#888"  //未选中字颜色
                tintColor="#21b97a"  //选中字颜色
                barTintColor="white"  //背景色
                noRenderContent={true}
            >
                {/* TabBar-Item——Function() */}
                {renderTabBar()}
            </TabBar>
            {/* TabBar end */}


        </div>
    );
}

export default index;