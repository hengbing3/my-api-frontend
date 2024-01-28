/*
 * @Author: Christer hongweibin3@gmail.com
 * @Date: 2024-01-21 15:07:32
 * @LastEditors: Christer hongweibin3@gmail.com
 * @LastEditTime: 2024-01-21 21:05:07
 * @FilePath: \AggregationApiFrontend\config\routes.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default [
  { name: '登录', path: '/user', layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  { name: '欢迎',path: '/welcome', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    name: '管理页',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', component: './Admin', name: "二级管理页" },
    ],
  },
  { icon: 'table', path: '/list', component: './TableList',  name: '查询表格'},
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];