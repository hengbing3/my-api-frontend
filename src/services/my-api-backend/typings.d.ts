declare namespace API {
  type CommonResultInterfaceInfo = {
    code?: number;
    data?: InterfaceInfo;
    message?: string;
  };

  type CommonResultlong = {
    code?: number;
    data?: string;
    message?: string;
  };

  type CommonResultobject = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type CommonResultPageInterfaceInfo = {
    code?: number;
    data?: PageInterfaceInfo;
    message?: string;
  };

  type CommonResultPageUserInfoVO = {
    code?: number;
    data?: PageUserInfoVO;
    message?: string;
  };

  type CommonResultstring = {
    code?: number;
    data?: string;
    message?: string;
  };

  type CommonResultUserInfoVO = {
    code?: number;
    data?: UserInfoVO;
    message?: string;
  };

  type CommonResultVoid = {
    code?: number;
    message?: string;
  };

  type deleteByIdUsingDELETEParams = {
    /** id */
    id?: number;
  };

  type InterfaceInfo = {
    createTime?: string;
    createUserId?: string;
    deletedFlag?: number;
    description?: string;
    id?: number;
    method?: string;
    name?: string;
    requestHeader?: string;
    requestParams?: string;
    responseHeader?: string;
    status?: number;
    updateTime?: string;
    updateUserId?: string;
    url?: string;
  };

  type InterfaceInfoInvokeParam = {
    id: string;
    userRequestParams?: string;
  };

  type InterfaceInfoParam = {
    createUserId?: string;
    description: string;
    id?: number;
    method: string;
    name: string;
    requestHeader: string;
    requestParams: string;
    responseHeader: string;
    status?: number;
    updateUserId?: string;
    url: string;
  };

  type onlineInterfaceInfoUsingPUTParams = {
    /** id */
    id?: number;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type outlineInterfaceInfoUsingPUTParams = {
    /** id */
    id?: number;
  };

  type PageInterfaceInfo = {
    countId?: string;
    current?: string;
    maxLimit?: string;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: string;
    records?: InterfaceInfo[];
    searchCount?: boolean;
    size?: string;
    total?: number;
  };

  type PageUserInfoVO = {
    countId?: string;
    current?: string;
    maxLimit?: string;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: string;
    records?: UserInfoVO[];
    searchCount?: boolean;
    size?: string;
    total?: string;
  };

  type queryByIdUsingGETParams = {
    /** id */
    id: string;
  };

  type QueryInterfaceInfoParam = {
    current: number;
    description?: string;
    name?: string;
    pageSize: number;
    start?: number;
    url?: string;
  };

  type queryUserInfoByIdUsingGETParams = {
    /** id */
    id: string;
  };

  type UserInfoVO = {
    id?: string;
    token?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPermissionList?: string[];
    userProfile?: string;
    userRole?: string;
  };

  type UserLoginParam = {
    userAccount: string;
    userPassword: string;
  };

  type UserQueryParam = {
    current: number;
    id?: string;
    mpOpenId?: string;
    pageSize: number;
    start?: number;
    unionId?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserRegisterParam = {
    checkPassword: string;
    mpOpenId?: string;
    unionId?: string;
    userAccount: string;
    userAvatar?: string;
    userName?: string;
    userPassword: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserUpdateParam = {
    id?: string;
    userAvatar?: string;
    userName: string;
    userProfile?: string;
  };
}
