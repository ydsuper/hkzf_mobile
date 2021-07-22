import { defineConfig } from 'vite'
import { resolve } from "path";
import reactRefresh from '@vitejs/plugin-react-refresh'
import vitePluginImp from 'vite-plugin-imp'  // method[1]
// import vitePluginImp2 from 'vite-plugin-babel-import'  // method[2]


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve('src')
    }
  },
  plugins: [
    reactRefresh(),
    // CSS according to the Need to Import
    vitePluginImp({
      libList: [
        {
          libName: "antd-mobile",
          style: (name) => `antd-mobile/es/${name}/style/index.css`
        }
      ]
    }),
    // vitePluginImp2([
    //   {
    //     libraryName: 'antd-mobile',
    //     libraryDirectory: 'es',
    //     style: (name) => {
    //       return `antd-mobile/lib/${name}/style/index.css`
    //     },
    //   },
    // ])
  ],
  // server 指定端口
  server: {
    open: true,
    port: 8888,
  }
})
