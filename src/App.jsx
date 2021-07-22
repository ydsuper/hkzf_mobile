import React, { Suspense, useLayoutEffect, useState } from "react";

// 导入react-router
import { useHistory, useLocation } from "react-router-dom";
// 导入解析路由配置
import { renderRoutes } from "react-router-config";
// 导入动画
import { CSSTransition, TransitionGroup } from "react-transition-group";
// 导入路由配置
import routes from "./routes";
console.log(routes);

// 导入样式文件
import "./App.css";

const ANIMATION_MAP = {
  PUSH: "forward",
  POP: "back",
};

console.log(0, location.pathname); //@log
// 【BUG】待解决：路由跳转问题 [已解决]
let isHome = location.pathname.includes("/home");
// tabBar-取消动画过渡
function App(props) {
  const history = useHistory();
  const location = useLocation();
  console.log(111, history, location); //@log

  useLayoutEffect(() => {
    // 判断路由 to & from
    isHome = location.pathname.includes("/home");
    console.log("update", isHome); //@log
  }, [location]);

  console.log("render:", location.pathname.includes("/home"), isHome); //@log
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="app">
        {/* 配置路由pages */}
        {/* {renderRoutes(routes)} */}
        <TransitionGroup
          className="router-wrapper"
          childFactory={(child) =>
            React.cloneElement(child, {
              classNames:
                isHome && location.pathname.includes("/home")
                  ? ""
                  : ANIMATION_MAP[history.action],
            })
          }
        >
          <CSSTransition
            key={location.pathname}
            timeout={isHome && location.pathname.includes("/home") ? 0 : 500}
          >
            {/* 注意：location必须加上 */}
            {renderRoutes(routes, {}, { location: location })}
          </CSSTransition>
        </TransitionGroup>
      </div>
    </Suspense>
  );
}

// export default withRouter(App);
export default App;
