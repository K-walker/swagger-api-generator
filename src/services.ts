/**
 * AUTO_GENERATED Do not change this file directly, use config.ts file instead
 *
 * @version 4
 */
import { AxiosRequestConfig } from "axios";
import { SwaggerResponse } from "./config";
import { Http } from "./httpRequest";

//@ts-ignore
const __DEV__ = process.env.NODE_ENV !== "production";

function overrideConfig(
  config?: AxiosRequestConfig,
  configOverride?: AxiosRequestConfig
): AxiosRequestConfig {
  return {
    ...config,
    ...configOverride,
    headers: {
      ...config?.headers,
      ...configOverride?.headers
    }
  };
}

//@ts-ignore
function template(path: string, obj: { [x: string]: any } = {}) {
  Object.keys(obj).forEach(key => {
    const re = new RegExp(`{${key}}`, "i");
    path = path.replace(re, obj[key]);
  });

  return path;
}

/**
 * 删除公司信息
 */
export const deleteCompanyDeleteCompanyId = async (
  id: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.deleteRequest(
    template("/company/deleteCompany/{id}", { id }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 校验公司名称是否唯一
 */
export const getCompanyCheckCompanyNameUnique = async (
  queryParams: GetCompanyCheckCompanyNameUniqueQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataSysCompanyDTO>> => {
  return Http.getRequest(
    "/company/checkCompanyNameUnique",
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 获取公司级别parentIds 根据公司id递归层级
 */
export const getCompanyGetTreeLevelByIdId = async (
  id: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataString>> => {
  return Http.getRequest(
    template("/company/getTreeLevelById/{id}", { id }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 根据公司编号查询 编号对应的子公司列表
 */
export const getCompanySelectChildCompanyByIdId = async (
  id: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataListSysCompanyDTO>> => {
  return Http.getRequest(
    template("/company/selectChildCompanyById/{id}", { id }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 获取公司基本信息
 */
export const getCompanySelectCompanyInfoByIdId = async (
  id: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataSysCompanyDTO>> => {
  return Http.getRequest(
    template("/company/selectCompanyInfoById/{id}", { id }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 用户认证 是否是超级管理员
 */
export const getUserUserId = async (
  userId: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataBoolean>> => {
  return Http.getRequest(
    template("/user/{userId}", { userId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 用户认证 授权查询
 */
export const getUserUserName = async (
  userName: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataSysUserDTO>> => {
  return Http.getRequest(
    template("/user/{userName}", { userName }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 新增公司信息
 */
export const postCompanyAddCompany = async (
  requestBody: SysCompanyAddRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataSysCompanyDTO>> => {
  return Http.postRequest(
    "/company/addCompany",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 编辑公司信息
 */
export const postCompanyEditCompany = async (
  requestBody: SysCompanyUpdateRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataSysCompanyDTO>> => {
  return Http.postRequest(
    "/company/editCompany",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 查询公司列表树
 */
export const postCompanyListAllSysCompanyTree = async (
  requestBody: SysCompanyRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataListSysCompanyDTO>> => {
  return Http.postRequest(
    "/company/listAllSysCompanyTree",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 添加字典数据信息
 */
export const postDictAddDictData = async (
  requestBody: SysDictRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.postRequest(
    "/dict/addDictData",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 添加字典类型信息
 */
export const postDictAddDictType = async (
  requestBody: SysDictRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.postRequest(
    "/dict/addDictType",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 删除字典数据信息
 */
export const postDictDeleteDictData = async (
  requestBody: SysDictRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.postRequest(
    "/dict/deleteDictData",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 删除字典类型信息
 */
export const postDictDeleteDictType = async (
  requestBody: SysDictRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.postRequest(
    "/dict/deleteDictType",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 编辑字典数据信息
 */
export const postDictEditDictData = async (
  requestBody: SysDictRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.postRequest(
    "/dict/editDictData",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 编辑字典类型信息
 */
export const postDictEditDictType = async (
  requestBody: SysDictRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.postRequest(
    "/dict/editDictType",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 查询字典数据信息列表
 */
export const postDictListDictDataList = async (
  requestBody: SysDictRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataListSysDictDataDTO>> => {
  return Http.postRequest(
    "/dict/listDictDataList",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 查询字典类型列表
 */
export const postDictListDictTypeList = async (
  requestBody: SysDictRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataPageDataSysDictTypeDTO>> => {
  return Http.postRequest(
    "/dict/listDictTypeList",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 查询字典数据信息
 */
export const postDictSelectDictDataInfo = async (
  requestBody: SysDictRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataSysDictDataDTO>> => {
  return Http.postRequest(
    "/dict/selectDictDataInfo",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 查询字典类型信息
 */
export const postDictSelectDictTypeInfo = async (
  requestBody: SysDictRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataSysDictTypeDTO>> => {
  return Http.postRequest(
    "/dict/selectDictTypeInfo",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 新增菜单信息
 */
export const postMenuAddMenu = async (
  requestBody: SysMenuRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.postRequest(
    "/menu/addMenu",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 校验菜单名称是否唯一
 */
export const postMenuCheckMenuNameUnique = async (
  requestBody: SysMenuRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataSysMenuDTO>> => {
  return Http.postRequest(
    "/menu/checkMenuNameUnique",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 删除菜单信息
 */
export const postMenuDeleteMenu = async (
  requestBody: SysMenuRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.postRequest(
    "/menu/deleteMenu",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 编辑菜单信息
 */
export const postMenuEditMenu = async (
  requestBody: SysMenuRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.postRequest(
    "/menu/editMenu",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 获取菜单级别parentIds 根据菜单id递归层级
 */
export const postMenuGetTreeLevelById = async (
  requestBody: SysMenuRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataString>> => {
  return Http.postRequest(
    "/menu/getTreeLevelById",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 查询菜单列表
 */
export const postMenuListAllSysMenu = async (
  requestBody: SysMenuRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataListSysMenuDTO>> => {
  return Http.postRequest(
    "/menu/listAllSysMenu",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 查询菜单列表树
 */
export const postMenuListAllSysMenuTree = async (
  requestBody: SysMenuRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataListSysMenuDTO>> => {
  return Http.postRequest(
    "/menu/listAllSysMenuTree",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

export const postMenuListSysMenu = async (
  requestBody: SysMenuRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataPageDataSysMenuDTO>> => {
  return Http.postRequest(
    "/menu/listSysMenu",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 根据菜单编号查询 编号对应的子菜单列表
 */
export const postMenuSelectChildMenuById = async (
  requestBody: SysMenuRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataListSysMenuDTO>> => {
  return Http.postRequest(
    "/menu/selectChildMenuById",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 获取菜单基本信息
 */
export const postMenuSelectMenuInfoById = async (
  requestBody: SysMenuRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataSysMenuDTO>> => {
  return Http.postRequest(
    "/menu/selectMenuInfoById",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 查询所有菜单以及菜单对应的上级菜单名称
 */
export const postMenuSelectSysMenulist = async (
  requestBody: SysMenuRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataListSysMenuDTO>> => {
  return Http.postRequest(
    "/menu/selectSysMenulist",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 新增机构部门信息
 */
export const postOfficeAddOffice = async (
  requestBody: SysOfficeRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.postRequest(
    "/office/addOffice",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 校验机构部门名称是否唯一
 */
export const postOfficeCheckOfficeNameUnique = async (
  requestBody: SysOfficeRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataSysOfficeDTO>> => {
  return Http.postRequest(
    "/office/checkOfficeNameUnique",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 删除机构部门信息
 */
export const postOfficeDeleteOffice = async (
  requestBody: SysOfficeRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.postRequest(
    "/office/deleteOffice",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 编辑机构部门信息
 */
export const postOfficeEditOffice = async (
  requestBody: SysOfficeRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.postRequest(
    "/office/editOffice",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 获取机构部门级别parentIds 根据机构部门id递归层级
 */
export const postOfficeGetTreeLevelById = async (
  requestBody: SysOfficeRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataString>> => {
  return Http.postRequest(
    "/office/getTreeLevelById",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 查询机构部门列表树
 */
export const postOfficeListAllSysOfficeTree = async (
  requestBody: SysOfficeRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataListSysOfficeDTO>> => {
  return Http.postRequest(
    "/office/listAllSysOfficeTree",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 分页查询机构部门父列表
 */
export const postOfficeListSysOffice = async (
  requestBody: SysOfficeRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataPageDataSysOfficeDTO>> => {
  return Http.postRequest(
    "/office/listSysOffice",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 根据机构部门编号查询 编号对应的子机构部门列表
 */
export const postOfficeSelectChildOfficeById = async (
  requestBody: SysOfficeRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataListSysOfficeDTO>> => {
  return Http.postRequest(
    "/office/selectChildOfficeById",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 获取机构部门基本信息
 */
export const postOfficeSelectOfficeInfoById = async (
  requestBody: SysOfficeRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataSysOfficeDTO>> => {
  return Http.postRequest(
    "/office/selectOfficeInfoById",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 查询所有机构部门以及机构部门对应的上级机构部门名称
 */
export const postOfficeSelectSysOfficelist = async (
  requestBody: SysOfficeRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataListSysOfficeDTO>> => {
  return Http.postRequest(
    "/office/selectSysOfficelist",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 新增角色信息
 */
export const postRoleAddRole = async (
  requestBody: SysRoleRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.postRequest(
    "/role/addRole",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 删除角色信息
 */
export const postRoleDeleteRole = async (
  requestBody: SysRoleRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.postRequest(
    "/role/deleteRole",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 编辑角色信息
 */
export const postRoleEditRole = async (
  requestBody: SysRoleRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.postRequest(
    "/role/editRole",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 获取所有角色列表
 */
export const postRoleListAllSysRole = async (
  requestBody: SysRoleRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataListSysRoleDTO>> => {
  return Http.postRequest(
    "/role/listAllSysRole",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 分页查询角色列表
 */
export const postRoleListSysRole = async (
  requestBody: SysRoleRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataPageDataSysRoleDTO>> => {
  return Http.postRequest(
    "/role/listSysRole",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 获取所有菜单权限树
 */
export const postRoleSelectMenuTree = async (
  requestBody: SysRoleRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataListSysMenuDTO>> => {
  return Http.postRequest(
    "/role/selectMenuTree",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 查询角色详情
 */
export const postRoleSelectRoleInfo = async (
  requestBody: SysRoleRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataSysRoleDTO>> => {
  return Http.postRequest(
    "/role/selectRoleInfo",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 获取角色对应的菜单权限树
 */
export const postRoleSelectRoleMenuTree = async (
  requestBody: SysRoleRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataListSysMenuDTO>> => {
  return Http.postRequest(
    "/role/selectRoleMenuTree",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 新增用户信息
 */
export const postUserAddUser = async (
  requestBody: SysUserRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.postRequest(
    "/user/addUser",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 添加用户菜单权限
 */
export const postUserAddUserMenu = async (
  requestBody: SysUserRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.postRequest(
    "/user/addUserMenu",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 添加用户角色
 */
export const postUserAddUserRole = async (
  requestBody: SysRoleRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.postRequest(
    "/user/addUserRole",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 用户密码修改
 */
export const postUserChangePassword = async (
  requestBody: SysUserPassRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.postRequest(
    "/user/changePassword",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 删除用户信息
 */
export const postUserDeleteUser = async (
  requestBody: SysUserRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.postRequest(
    "/user/deleteUser",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 编辑用户信息
 */
export const postUserEditUser = async (
  requestBody: SysUserRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.postRequest(
    "/user/editUser",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 编辑用户菜单权限
 */
export const postUserEditUserMenu = async (
  requestBody: SysUserRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.postRequest(
    "/user/editUserMenu",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 编辑用户角色
 */
export const postUserEditUserRole = async (
  requestBody: SysRoleRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.postRequest(
    "/user/editUserRole",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 分页查询用户列表
 */
export const postUserList = async (
  requestBody: ListSysUserRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataPageDataSysUserDTO>> => {
  return Http.postRequest(
    "/user/list",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 查询用户详情
 */
export const postUserSelectUserInfo = async (
  requestBody: SysUserRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataSysUserDTO>> => {
  return Http.postRequest(
    "/user/selectUserInfo",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 获取用户匹配的菜单权限树
 */
export const postUserSelectUserMenuTree = async (
  requestBody: SysUserRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataListSysMenuDTO>> => {
  return Http.postRequest(
    "/user/selectUserMenuTree",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 获取用户匹配的菜单权限列表
 */
export const postUserSelectUserMenulist = async (
  requestBody: SysUserRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataListSysMenuDTO>> => {
  return Http.postRequest(
    "/user/selectUserMenulist",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 获取用户角色列表
 */
export const postUserSelectUserRoleList = async (
  requestBody: SysRoleRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataListSysUserRoleDTO>> => {
  return Http.postRequest(
    "/user/selectUserRoleList",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 获取用户所属角色匹配的菜单权限列表
 */
export const postUserSelectUserRoleMenuList = async (
  requestBody: SysUserRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataListSysMenuDTO>> => {
  return Http.postRequest(
    "/user/selectUserRoleMenuList",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 用户认证 获取当前用户所拥有的菜单URL union
 */
export const postUserSelectUserUnionMenuUrlList = async (
  requestBody: SysUserRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataListSysMenuDTO>> => {
  return Http.postRequest(
    "/user/selectUserUnionMenuUrlList",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 用户认证  获取所有 用户角色菜单权限，用户菜单权限 union
 */
export const postUserSelectUserUnionPermissionList = async (
  requestBody: SysUserRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataListSysMenuDTO>> => {
  return Http.postRequest(
    "/user/selectUserUnionPermissionList",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

export interface GetCompanyCheckCompanyNameUniqueQueryParams {
  request?: SysCompanyRequest;
}

export interface ListSysUserRequest {
  /**
      * 
当前页码
       Format: int64
      */
  currentPage: number;
  /**
      * 
每页查询数量
       Format: int64
       maxLength: 100
      */
  pageSize: number;
  /**
      * 
数据状态(0正常(默认), 1删除, 2停用, 空值代表所有)
      */
  dataStatus?: string;
  /**
      * 
全局唯一序列
      */
  requestNo?: string;
  /**
      * 
角色ID
      */
  roleId?: string;
}

export interface PageDataSysDictTypeDTO {
  /**
      * 
当前页码
       Format: int64
      */
  currentPage?: number;
  /**
      * 
每页总数
       Format: int64
      */
  pageSize?: number;
  /**
      * 
数据集
      */
  records?: SysDictTypeDTO[];
  /**
      * 
数据总数
       Format: int64
      */
  totalSize?: number;
}

export interface PageDataSysMenuDTO {
  /**
      * 
当前页码
       Format: int64
      */
  currentPage?: number;
  /**
      * 
每页总数
       Format: int64
      */
  pageSize?: number;
  /**
      * 
数据集
      */
  records?: SysMenuDTO[];
  /**
      * 
数据总数
       Format: int64
      */
  totalSize?: number;
}

export interface PageDataSysOfficeDTO {
  /**
      * 
当前页码
       Format: int64
      */
  currentPage?: number;
  /**
      * 
每页总数
       Format: int64
      */
  pageSize?: number;
  /**
      * 
数据集
      */
  records?: SysOfficeDTO[];
  /**
      * 
数据总数
       Format: int64
      */
  totalSize?: number;
}

export interface PageDataSysRoleDTO {
  /**
      * 
当前页码
       Format: int64
      */
  currentPage?: number;
  /**
      * 
每页总数
       Format: int64
      */
  pageSize?: number;
  /**
      * 
数据集
      */
  records?: SysRoleDTO[];
  /**
      * 
数据总数
       Format: int64
      */
  totalSize?: number;
}

export interface PageDataSysUserDTO {
  /**
      * 
当前页码
       Format: int64
      */
  currentPage?: number;
  /**
      * 
每页总数
       Format: int64
      */
  pageSize?: number;
  /**
      * 
数据集
      */
  records?: SysUserDTO[];
  /**
      * 
数据总数
       Format: int64
      */
  totalSize?: number;
}

export interface ResponseDataBoolean {
  /**
      * 
状态码
      */
  code?: string;
  /**
      * 
数据集
      */
  data?: boolean;
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataInteger {
  /**
      * 
状态码
      */
  code?: string;
  /**
      * 
数据集
       Format: int32
      */
  data?: number;
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataListSysCompanyDTO {
  /**
      * 
状态码
      */
  code?: string;
  /**
      * 
数据集
      */
  data?: SysCompanyDTO[];
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataListSysDictDataDTO {
  /**
      * 
状态码
      */
  code?: string;
  /**
      * 
数据集
      */
  data?: SysDictDataDTO[];
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataListSysMenuDTO {
  /**
      * 
状态码
      */
  code?: string;
  /**
      * 
数据集
      */
  data?: SysMenuDTO[];
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataListSysOfficeDTO {
  /**
      * 
状态码
      */
  code?: string;
  /**
      * 
数据集
      */
  data?: SysOfficeDTO[];
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataListSysRoleDTO {
  /**
      * 
状态码
      */
  code?: string;
  /**
      * 
数据集
      */
  data?: SysRoleDTO[];
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataListSysUserRoleDTO {
  /**
      * 
状态码
      */
  code?: string;
  /**
      * 
数据集
      */
  data?: SysUserRoleDTO[];
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataPageDataSysDictTypeDTO {
  /**
      * 
状态码
      */
  code?: string;
  data?: PageDataSysDictTypeDTO;
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataPageDataSysMenuDTO {
  /**
      * 
状态码
      */
  code?: string;
  data?: PageDataSysMenuDTO;
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataPageDataSysOfficeDTO {
  /**
      * 
状态码
      */
  code?: string;
  data?: PageDataSysOfficeDTO;
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataPageDataSysRoleDTO {
  /**
      * 
状态码
      */
  code?: string;
  data?: PageDataSysRoleDTO;
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataPageDataSysUserDTO {
  /**
      * 
状态码
      */
  code?: string;
  data?: PageDataSysUserDTO;
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataString {
  /**
      * 
状态码
      */
  code?: string;
  /**
      * 
数据集
      */
  data?: string;
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataSysCompanyDTO {
  /**
      * 
状态码
      */
  code?: string;
  data?: SysCompanyDTO;
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataSysDictDataDTO {
  /**
      * 
状态码
      */
  code?: string;
  data?: SysDictDataDTO;
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataSysDictTypeDTO {
  /**
      * 
状态码
      */
  code?: string;
  data?: SysDictTypeDTO;
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataSysMenuDTO {
  /**
      * 
状态码
      */
  code?: string;
  data?: SysMenuDTO;
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataSysOfficeDTO {
  /**
      * 
状态码
      */
  code?: string;
  data?: SysOfficeDTO;
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataSysRoleDTO {
  /**
      * 
状态码
      */
  code?: string;
  data?: SysRoleDTO;
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataSysUserDTO {
  /**
      * 
状态码
      */
  code?: string;
  data?: SysUserDTO;
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface SysCompanyAddRequest {
  /**
      * 
当前页码
       Format: int64
      */
  currentPage: number;
  /**
      * 
每页查询数量
       Format: int64
       maxLength: 100
      */
  pageSize: number;
  /**
      * 
区域编码
      */
  areaCode?: string;
  /**
      * 
公司编码
      */
  companyCode?: string;
  /**
      * 
公司名称
      */
  companyName?: string;
  /**
      * 
数据状态(0正常(默认), 1删除, 2停用, 空值代表所有)
      */
  dataStatus?: string;
  /**
      * 
公司全称
      */
  fullName?: string;
  /**
      * 
父级ID
      */
  parentId?: string;
  /**
      * 
所有父级ID
      */
  parentIds?: string;
  /**
      * 
全局唯一序列
      */
  requestNo?: string;
  /**
      * 
状态（0正常 1删除 2停用）
      */
  status?: string;
  /**
      * 
是否最末级
      */
  treeLeaf?: string;
  /**
      * 
层次级别
       Format: int32
      */
  treeLevel?: number;
  /**
      * 
全节点名
      */
  treeNames?: string;
  /**
      * 
本级排序号（升序）
       Format: int64
      */
  treeSort?: number;
  /**
      * 
所有级别排序号
      */
  treeSorts?: string;
  /**
      * 
公司代码
      */
  viewCode?: string;
}

export interface SysCompanyDTO {
  /**
      * 
区域编码
      */
  areaCode?: string;
  /**
      * 
子公司列表
      */
  child?: SysCompanyDTO[];
  /**
      * 
公司编码
      */
  companyCode?: string;
  /**
      * 
公司名称
      */
  companyName?: string;
  /**
      * 
公司所包含的部门信息列表
      */
  companyOfficeList?: SysCompanyOfficeDTO[];
  /**
      * 
租户代码
      */
  corpCode?: string;
  /**
      * 
租户名称
      */
  corpName?: string;
  /**
      * 
公司全称
      */
  fullName?: string;
  /**
      * 
主键
      */
  id?: string;
  /**
      * 
父级ID
      */
  parentId?: string;
  /**
      * 
所有父级ID
      */
  parentIds?: string;
  /**
      * 
备注信息
      */
  remarks?: string;
  /**
      * 
状态（0正常 1删除 2停用）
      */
  status?: string;
  /**
      * 
是否最末级
      */
  treeLeaf?: string;
  /**
      * 
层次级别
       Format: int32
      */
  treeLevel?: number;
  /**
      * 
全节点名
      */
  treeNames?: string;
  /**
      * 
本级排序号（升序）
       Format: int64
      */
  treeSort?: number;
  /**
      * 
所有级别排序号
      */
  treeSorts?: string;
  /**
      * 
公司代码
      */
  viewCode?: string;
}

export interface SysCompanyOfficeDTO {
  /**
      * 
公司编码
      */
  companyId?: string;
  /**
      * 
主键
      */
  id?: string;
  /**
      * 
机构编码
      */
  officeId?: string;
  /**
      * 
状态（0正常 1删除 2停用）
      */
  status?: string;
}

export interface SysCompanyRequest {
  /**
      * 
当前页码
       Format: int64
      */
  currentPage: number;
  /**
      * 
每页查询数量
       Format: int64
       maxLength: 100
      */
  pageSize: number;
  /**
      * 
公司编码
      */
  companyCode?: string;
  /**
      * 
公司名称
      */
  companyName?: string;
  /**
      * 
数据状态(0正常(默认), 1删除, 2停用, 空值代表所有)
      */
  dataStatus?: string;
  /**
      * 
主键
      */
  id?: string;
  /**
      * 
父级ID
      */
  parentId?: string;
  /**
      * 
全局唯一序列
      */
  requestNo?: string;
  /**
      * 
公司代码
      */
  viewCode?: string;
}

export interface SysCompanyUpdateRequest {
  /**
      * 
当前页码
       Format: int64
      */
  currentPage: number;
  /**
      * 
每页查询数量
       Format: int64
       maxLength: 100
      */
  pageSize: number;
  /**
      * 
区域编码
      */
  areaCode?: string;
  /**
      * 
公司编码
      */
  companyCode?: string;
  /**
      * 
公司名称
      */
  companyName?: string;
  /**
      * 
数据状态(0正常(默认), 1删除, 2停用, 空值代表所有)
      */
  dataStatus?: string;
  /**
      * 
公司全称
      */
  fullName?: string;
  /**
      * 
主键
      */
  id?: string;
  /**
      * 
父级ID
      */
  parentId?: string;
  /**
      * 
所有父级ID
      */
  parentIds?: string;
  /**
      * 
全局唯一序列
      */
  requestNo?: string;
  /**
      * 
状态（0正常 1删除 2停用）
      */
  status?: string;
  /**
      * 
是否最末级
      */
  treeLeaf?: string;
  /**
      * 
层次级别
       Format: int32
      */
  treeLevel?: number;
  /**
      * 
全节点名
      */
  treeNames?: string;
  /**
      * 
本级排序号（升序）
       Format: int64
      */
  treeSort?: number;
  /**
      * 
所有级别排序号
      */
  treeSorts?: string;
  /**
      * 
公司代码
      */
  viewCode?: string;
}

export interface SysDictDataDTO {
  /**
      * 
css类名（如：red）
      */
  cssClass?: string;
  /**
      * 
css样式（如：color:red)
      */
  cssStyle?: string;
  /**
      * 
字典描述
      */
  description?: string;
  /**
      * 
字典编码
      */
  dictCode?: string;
  /**
      * 
字典主键
      */
  dictId?: string;
  /**
      * 
字典标签
      */
  dictLabel?: string;
  /**
      * 
字典类型
      */
  dictType?: string;
  /**
      * 
字典键值
      */
  dictValue?: string;
  /**
      * 
系统内置（1是 0否）
      */
  isSys?: string;
  /**
      * 
父级ID
      */
  parentId?: string;
  /**
      * 
所有父级ID
      */
  parentIds?: string;
  /**
      * 
备注信息
      */
  remarks?: string;
  /**
      * 
状态（0正常 1删除 2停用）
      */
  status?: string;
  /**
      * 
是否最末级
      */
  treeLeaf?: string;
  /**
      * 
层次级别
       Format: int32
      */
  treeLevel?: number;
  /**
      * 
全节点名
      */
  treeNames?: string;
  /**
      * 
本级排序号（升序）
       Format: int64
      */
  treeSort?: number;
  /**
      * 
所有级别排序号
      */
  treeSorts?: string;
}

export interface SysDictRequest {
  /**
      * 
当前页码
       Format: int64
      */
  currentPage: number;
  /**
      * 
每页查询数量
       Format: int64
       maxLength: 100
      */
  pageSize: number;
  /**
      * 
数据状态(0正常(默认), 1删除, 2停用, 空值代表所有)
      */
  dataStatus?: string;
  /**
      * 
字典编码
      */
  dictCode?: string;
  /**
      * 
字典数据主键编号
      */
  dictId?: string;
  /**
      * 
字典标签
      */
  dictLabel?: string;
  /**
      * 
字典名称
      */
  dictName?: string;
  /**
      * 
字典类型
      */
  dictType?: string;
  /**
      * 
字典类型主键编号
      */
  dictTypeId?: string;
  /**
      * 
字典键值
      */
  dictValue?: string;
  /**
      * 
是否系统字典
      */
  isSys?: string;
  /**
      * 
父节点编号
      */
  parentId?: string;
  /**
      * 
父节点parentIds
      */
  parentIds?: string;
  /**
      * 
全局唯一序列
      */
  requestNo?: string;
  /**
      * 
状态（0正常 1删除 2停用）
      */
  status?: string;
  /**
      * 
树节点层级
       Format: int32
      */
  treeLevel?: number;
  /**
      * 
排序编号
       Format: int64
      */
  treeSort?: number;
  /**
      * 
排序编号集合
      */
  treeSorts?: string;
}

export interface SysDictTypeDTO {
  /**
      * 
字典名称
      */
  dictName?: string;
  /**
      * 
字典类型
      */
  dictType?: string;
  /**
      * 
编号
      */
  dictTypeId?: string;
  /**
      * 
是否系统字典
      */
  isSys?: string;
  /**
      * 
备注信息
      */
  remarks?: string;
  /**
      * 
状态（0正常 1删除 2停用）
      */
  status?: string;
}

export interface SysMenuDTO {
  /**
      * 
子菜单列表
      */
  child?: SysMenuDTO[];
  /**
      * 
创建者
       Format: int64
      */
  createBy?: number;
  /**
      * 
描述
      */
  discription?: string;
  /**
      * 
主键
      */
  id?: string;
  /**
      * 
菜单编码
      */
  menuCode?: string;
  /**
      * 
菜单地址
      */
  menuHref?: string;
  /**
      * 
图标地址
      */
  menuIcon?: string;
  /**
      * 
菜单名称
      */
  menuName?: string;
  /**
      * 
请求链接
      */
  menuTarget?: string;
  /**
      * 
菜单类型（1菜单 2权限 3开发）
      */
  menuType?: string;
  parent?: SysMenuDTO;
  /**
      * 
父级ID
      */
  parentId?: string;
  /**
      * 
所有父级ID
      */
  parentIds?: string;
  /**
      * 
父菜单名称
      */
  parentName?: string;
  /**
      * 
菜单权限
      */
  permission?: string;
  /**
      * 
1:读写；0：只读
       Format: int32
      */
  readOnly?: number;
  /**
      * 
角色id
       Format: int64
      */
  roleId?: number;
  /**
      * 
菜单是否选中
      */
  selected?: boolean;
  /**
      * 
是否最末级
      */
  treeNodeLeaf?: boolean;
  /**
      * 
排序编号
       Format: int32
      */
  treeSort?: number;
}

export interface SysMenuRequest {
  /**
      * 
当前页码
       Format: int64
      */
  currentPage: number;
  /**
      * 
每页查询数量
       Format: int64
       maxLength: 100
      */
  pageSize: number;
  /**
      * 
数据状态(0正常(默认), 1删除, 2停用, 空值代表所有)
      */
  dataStatus?: string;
  /**
      * 
菜单主键
      */
  id?: string;
  /**
      * 
菜单编码
      */
  menuCode?: string;
  /**
      * 
菜单URL
      */
  menuHref?: string;
  /**
      * 
菜单名称
      */
  menuName?: string;
  /**
      * 
菜单类型（1菜单 2权限 3开发）
      */
  menuType?: string;
  /**
      * 
父级ID
      */
  parentId?: string;
  /**
      * 
所有父级ID
      */
  parentIds?: string;
  /**
      * 
菜单权限
      */
  permission?: string;
  /**
      * 
全局唯一序列
      */
  requestNo?: string;
  /**
      * 
是否最末级
      */
  treeLeaf?: string;
  /**
      * 
菜单等级
       Format: int32
      */
  treeLevel?: number;
  /**
      * 
全节点名
      */
  treeNames?: string;
  /**
      * 
本级排序号（升序） ASC
       Format: int64
      */
  treeSort?: number;
  /**
      * 
菜单所有级别排序号
      */
  treeSorts?: string;
}

export interface SysOfficeDTO {
  /**
      * 
 联系地址
      */
  address?: string;
  /**
      * 
子部门列表
      */
  child?: SysOfficeDTO[];
  /**
      * 
公司编码 根据公司查询机构，组织机构所属公司
      */
  companyCode?: string;
  /**
      * 
电子邮箱
      */
  email?: string;
  /**
      * 
机构全称
      */
  fullName?: string;
  /**
      * 
主键
      */
  id?: string;
  /**
      * 
负责人
      */
  leader?: string;
  /**
      * 
机构编码
      */
  officeCode?: string;
  /**
      * 
机构名称
      */
  officeName?: string;
  /**
      * 
机构类型
      */
  officeType?: string;
  /**
      * 
父级ID
      */
  parentId?: string;
  /**
      * 
所有父级ID
      */
  parentIds?: string;
  /**
      * 
办公电话
      */
  phone?: string;
  /**
      * 
备注信息
      */
  remarks?: string;
  /**
      * 
状态（0正常 1删除 2停用）
      */
  status?: string;
  /**
      * 
是否最末级
      */
  treeLeaf?: string;
  /**
      * 
层次级别
       Format: int32
      */
  treeLevel?: number;
  /**
      * 
全节点名
      */
  treeNames?: string;
  /**
      * 
是否最末级
      */
  treeNodeLeaf?: boolean;
  /**
      * 
本级排序号（升序）
       Format: int64
      */
  treeSort?: number;
  /**
      * 
所有级别排序号
      */
  treeSorts?: string;
  /**
      * 
机构代码
      */
  viewCode?: string;
  /**
      * 
邮政编码
      */
  zipCode?: string;
}

export interface SysOfficeRequest {
  /**
      * 
当前页码
       Format: int64
      */
  currentPage: number;
  /**
      * 
每页查询数量
       Format: int64
       maxLength: 100
      */
  pageSize: number;
  /**
      * 
联系地址
      */
  address?: string;
  /**
      * 
数据状态(0正常(默认), 1删除, 2停用, 空值代表所有)
      */
  dataStatus?: string;
  /**
      * 
电子邮箱
      */
  email?: string;
  /**
      * 
机构全称
      */
  fullName?: string;
  /**
      * 
菜单主键
      */
  id?: string;
  /**
      * 
负责人
      */
  leader?: string;
  /**
      * 
机构编码
      */
  officeCode?: string;
  /**
      * 
机构名称
      */
  officeName?: string;
  /**
      * 
机构类型
      */
  officeType?: string;
  /**
      * 
父级ID
      */
  parentId?: string;
  /**
      * 
所有父级ID
      */
  parentIds?: string;
  /**
      * 
办公电话
      */
  phone?: string;
  /**
      * 
全局唯一序列
      */
  requestNo?: string;
  /**
      * 
状态（0正常 1删除 2停用）
      */
  status?: string;
  /**
      * 
是否最末级
      */
  treeLeaf?: string;
  /**
      * 
层次级别
       Format: int32
      */
  treeLevel?: number;
  /**
      * 
全节点名
      */
  treeNames?: string;
  /**
      * 
本级排序号（升序）
       Format: int64
      */
  treeSort?: number;
  /**
      * 
所有级别排序号
      */
  treeSorts?: string;
  /**
      * 
机构代码
      */
  viewCode?: string;
  /**
      * 
邮政编码
      */
  zipCode?: string;
}

export interface SysRoleDTO {
  /**
      * 
适应业务范围（不同的功能，不同的数据权限支持）
      */
  bizScope?: string;
  /**
      * 
数据范围设置（0未设置  1全部数据 2自定义数据）
      */
  dataScope?: string;
  /**
      * 
主键
      */
  id?: string;
  /**
      * 
系统内置（1是 0否）
      */
  isSys?: string;
  /**
      * 
角色编码
      */
  roleCode?: string;
  /**
      * 
角色名称
      */
  roleName?: string;
  /**
      * 
角色排序（升序）
       Format: int64
      */
  roleSort?: number;
  /**
      * 
角色分类（高管、中层、基层、其它）
      */
  roleType?: string;
  /**
      * 
状态（0正常 1删除 2停用）
      */
  status?: string;
  /**
      * 
用户类型（employee员工 member会员）
      */
  userType?: string;
}

export interface SysRoleRequest {
  /**
      * 
当前页码
       Format: int64
      */
  currentPage: number;
  /**
      * 
每页查询数量
       Format: int64
       maxLength: 100
      */
  pageSize: number;
  /**
      * 
数据状态(0正常(默认), 1删除, 2停用, 空值代表所有)
      */
  dataStatus?: string;
  /**
      * 
角色主键
      */
  id?: string;
  /**
      * 
角色拥有的菜单权限集合
      */
  menuIds?: string;
  /**
      * 
全局唯一序列
      */
  requestNo?: string;
  /**
      * 
角色编码
      */
  roleCode?: string;
  /**
      * 
用户拥有的角色集合
      */
  roleIds?: string;
  /**
      * 
角色名称
      */
  roleName?: string;
  /**
      * 
角色排序
       Format: int64
      */
  roleSort?: number;
  /**
      * 
角色类型
      */
  roleType?: string;
  /**
      * 
用户ID
      */
  userId?: string;
}

export interface SysUserDTO {
  /**
      * 
头像路径
      */
  avatar?: string;
  /**
      * 
电子邮箱
      */
  email?: string;
  /**
      * 
登录账号
      */
  loginCode?: string;
  /**
      * 
手机号码
      */
  mobile?: string;
  /**
      * 
登录密码
      */
  password?: string;
  /**
      * 
办公电话
      */
  phone?: string;
  /**
      * 
用户性别
      */
  sex?: string;
  /**
      * 
个性签名
      */
  sign?: string;
  /**
      * 
用户昵称
      */
  userName?: string;
  /**
      * 
绑定的微信号
      */
  wxOpenid?: string;
}

export interface SysUserPassRequest {
  /**
      * 
当前新密码确认密码
       maxLength: 18
      */
  curPass: string;
  /**
      * 
当前页码
       Format: int64
      */
  currentPage: number;
  /**
      * 
新的密码
       maxLength: 18
      */
  newPass: string;
  /**
      * 
原有老的密码
       maxLength: 18
      */
  oldPass: string;
  /**
      * 
每页查询数量
       Format: int64
       maxLength: 100
      */
  pageSize: number;
  /**
      * 
用户ID
      */
  userId: string;
  /**
      * 
数据状态(0正常(默认), 1删除, 2停用, 空值代表所有)
      */
  dataStatus?: string;
  /**
      * 
全局唯一序列
      */
  requestNo?: string;
}

export interface SysUserRequest {
  /**
      * 
当前页码
       Format: int64
      */
  currentPage: number;
  /**
      * 
每页查询数量
       Format: int64
       maxLength: 100
      */
  pageSize: number;
  /**
      * 
头像路径
      */
  avatar?: string;
  /**
      * 
数据状态(0正常(默认), 1删除, 2停用, 空值代表所有)
      */
  dataStatus?: string;
  /**
      * 
电子邮箱
      */
  email?: string;
  /**
      * 
ID
      */
  id?: string;
  /**
      * 
登录账号
      */
  loginCode?: string;
  /**
      * 
管理员类型（0非管理员 1系统管理员  2二级管理员）
      */
  mgrType?: string;
  /**
      * 
手机号码
      */
  mobile?: string;
  /**
      * 
登录密码
      */
  password?: string;
  /**
      * 
办公电话
      */
  phone?: string;
  /**
      * 
全局唯一序列
      */
  requestNo?: string;
  /**
      * 
角色ID
      */
  roleId?: string;
  /**
      * 
用户性别
      */
  sex?: string;
  /**
      * 
个性签名
      */
  sign?: string;
  /**
      * 
用户编码
      */
  userCode?: string;
  /**
      * 
用户id集合
      */
  userIds?: string;
  /**
      * 
用户拥有的菜单集合
      */
  userMenuIds?: string;
  /**
      * 
用户昵称
      */
  userName?: string;
  /**
      * 
用户类型
      */
  userType?: string;
  /**
      * 
绑定的微信号
      */
  wxOpenid?: string;
}

export interface SysUserRoleDTO {
  /**
      * 
是否选中：true、false
      */
  checked?: boolean;
  /**
      * 
角色ID
      */
  roleId?: string;
  /**
      * 
用户角色ID
      */
  urId?: string;
  /**
      * 
用户ID
      */
  userId?: string;
}
export const _CONSTANT0 = {
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*"
  }
};
