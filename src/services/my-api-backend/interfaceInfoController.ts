// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 根据id查看接口详情 GET /api/interfaceInfo */
export async function queryByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResultInterfaceInfo>('/api/interfaceInfo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 编辑接口数据 PUT /api/interfaceInfo */
export async function editInterFaceInfoUsingPut(
  body: API.InterfaceInfoParam,
  options?: { [key: string]: any },
) {
  return request<API.CommonResultVoid>('/api/interfaceInfo', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增接口数据 POST /api/interfaceInfo */
export async function addInterFaceInfoUsingPost(
  body: API.InterfaceInfoParam,
  options?: { [key: string]: any },
) {
  return request<API.CommonResultVoid>('/api/interfaceInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除接口数据 DELETE /api/interfaceInfo */
export async function deleteByIdUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteByIdUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResultVoid>('/api/interfaceInfo', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 接口调试 POST /api/interfaceInfo/invoke */
export async function invokeInterfaceInfoUsingPost(
  body: API.InterfaceInfoInvokeParam,
  options?: { [key: string]: any },
) {
  return request<API.CommonResultobject>('/api/interfaceInfo/invoke', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 接口发布（上线） PUT /api/interfaceInfo/online */
export async function onlineInterfaceInfoUsingPut(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.onlineInterfaceInfoUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResultVoid>('/api/interfaceInfo/online', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 接口下线 PUT /api/interfaceInfo/outline */
export async function outlineInterfaceInfoUsingPut(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.outlineInterfaceInfoUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResultVoid>('/api/interfaceInfo/outline', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 接口信息-分页查询 POST /api/interfaceInfo/page */
export async function queryByPageUsingPost(
  body: API.QueryInterfaceInfoParam,
  options?: { [key: string]: any },
) {
  return request<API.CommonResultPageInterfaceInfo>('/api/interfaceInfo/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
