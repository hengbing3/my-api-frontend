/*
 * @Author: Christer hongweibin3@gmail.com
 * @Date: 2024-01-21 15:07:32
 * @LastEditors: Christer hongweibin3@gmail.com
 * @LastEditTime: 2024-02-07 18:54:41
 * @FilePath: \AggregationApiFrontend\config\routes.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default [
  { name: '主页', path: '/', icon: 'smile', component: './Index' },
  {
    name: '登录',
    path: '/user',
    layout: false,
    routes: [{ path: '/user/login', component: './User/Login' }],
  },
  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    name: '管理页',
    routes: [
      {
        icon: 'table',
        access: 'canAdmin',
        path: '/admin/interface-info',
        component: './Admin/InterfaceInfo',
        name: '接口管理',
      },
      // { path: '/admin', redirect: '/admin/sub-page' },
      // { path: '/admin/sub-page', component: './Admin', name: "二级管理页" },
    ],
  },
  // { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
