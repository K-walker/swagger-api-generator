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

export const deleteAdminAttributeId = async (
  id: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.deleteRequest(
    template("/admin/attribute/{id}", { id }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

export const deleteAdminAttributeOptionId = async (
  id: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.deleteRequest(
    template("/admin/attributeOption/{id}", { id }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 品牌删除
 */
export const deleteAdminBrandId = async (
  id: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.deleteRequest(
    template("/admin/brand/{id}", { id }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 分类删除
 */
export const deleteAdminCategoryId = async (
  id: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.deleteRequest(
    template("/admin/category/{id}", { id }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 服务承诺删除
 */
export const deleteAdminCommitmentId = async (
  id: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.deleteRequest(
    template("/admin/commitment/{id}", { id }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 商品逻辑删除
 */
export const deleteAdminGoodsId = async (
  id: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataBoolean>> => {
  return Http.deleteRequest(
    template("/admin/goods/{id}", { id }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 标签删除
 */
export const deleteAdminLabelId = async (
  id: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.deleteRequest(
    template("/admin/label/{id}", { id }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

export const getAdminAttribute = async (
  queryParams: GetAdminAttributeQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataPageDataSysAttributeDto>> => {
  return Http.getRequest(
    "/admin/attribute",
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

export const getAdminAttributeId = async (
  id: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataSysAttributeDto>> => {
  return Http.getRequest(
    template("/admin/attribute/{id}", { id }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

export const getAdminAttributeOption = async (
  queryParams: GetAdminAttributeOptionQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataPageDataSysAttributeOptionDto>> => {
  return Http.getRequest(
    "/admin/attributeOption",
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

export const getAdminAttributeOptionFindSubsAttrTypeId = async (
  attrTypeId: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataListSysAttributeOptionDto>> => {
  return Http.getRequest(
    template("/admin/attributeOption/findSubs/{attrTypeId}", { attrTypeId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

export const getAdminAttributeOptionId = async (
  id: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataSysAttributeOptionDto>> => {
  return Http.getRequest(
    template("/admin/attributeOption/{id}", { id }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 品牌列表
 */
export const getAdminBrand = async (
  queryParams: GetAdminBrandQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataPageDataBrandDto>> => {
  return Http.getRequest(
    "/admin/brand",
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 品牌详情
 */
export const getAdminBrandId = async (
  id: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataBrandDto>> => {
  return Http.getRequest(
    template("/admin/brand/{id}", { id }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 分类列表
 */
export const getAdminCategory = async (
  queryParams: GetAdminCategoryQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataPageDataCategoryDto>> => {
  return Http.getRequest(
    "/admin/category",
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 分类详情
 */
export const getAdminCategoryCategoryId = async (
  categoryId: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataCategoryDto>> => {
  return Http.getRequest(
    template("/admin/category/{categoryId}", { categoryId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 查询分类属性集合
 */
export const getAdminCategoryFindCategoryAttrId = async (
  id: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataListSysAttributeOptionDto>> => {
  return Http.getRequest(
    template("/admin/category/findCategoryAttr/{id}", { id }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 查询子类
 */
export const getAdminCategoryFindSubsId = async (
  id: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataListCategoryDto>> => {
  return Http.getRequest(
    template("/admin/category/findSubs/{id}", { id }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 服务承诺列表
 */
export const getAdminCommitment = async (
  queryParams: GetAdminCommitmentQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataPageDataCommitmentDto>> => {
  return Http.getRequest(
    "/admin/commitment",
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 服务承诺详情
 */
export const getAdminCommitmentId = async (
  id: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataCommitmentDto>> => {
  return Http.getRequest(
    template("/admin/commitment/{id}", { id }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 商品详情[范围]
 */
export const getAdminGoodsFindOneByScope = async (
  queryParams: GetAdminGoodsFindOneByScopeQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataGoodsDto>> => {
  return Http.getRequest(
    "/admin/goods/findOneByScope",
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 商品详情[基本]
 */
export const getAdminGoodsId = async (
  id: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataGoodsDto>> => {
  return Http.getRequest(
    template("/admin/goods/{id}", { id }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 标签列表
 */
export const getAdminLabel = async (
  queryParams: GetAdminLabelQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataPageDataLabelsDto>> => {
  return Http.getRequest(
    "/admin/label",
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 标签详情
 */
export const getAdminLabelId = async (
  id: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataLabelsDto>> => {
  return Http.getRequest(
    template("/admin/label/{id}", { id }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 查询库存
 */
export const getStockFindStockNumGoodsSkuId = async (
  goodsSkuId: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.getRequest(
    template("/stock/findStockNum/{goodsSkuId}", { goodsSkuId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

export const postAdminAttribute = async (
  requestBody: SysAttributeCreateRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.postRequest(
    "/admin/attribute",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

export const postAdminAttributeOption = async (
  requestBody: SysAttributeOptionCreateRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.postRequest(
    "/admin/attributeOption",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 品牌新增
 */
export const postAdminBrand = async (
  requestBody: BrandCreateRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.postRequest(
    "/admin/brand",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 分类新增
 */
export const postAdminCategory = async (
  requestBody: CategoryCreateRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.postRequest(
    "/admin/category",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 服务承诺新增
 */
export const postAdminCommitment = async (
  requestBody: CommitmentCreateRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.postRequest(
    "/admin/commitment",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 运费模板列表
 */
export const postAdminExpressPageList = async (
  requestBody: ExpressSearchRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataPageDataObject>> => {
  return Http.postRequest(
    "/admin/express/pageList",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 批量逻辑删除
 */
export const postAdminGoodsBatchDelete = async (
  requestBody: GoodsBatchRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataBoolean>> => {
  return Http.postRequest(
    "/admin/goods/batchDelete",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 状态变更(支持批量)
 */
export const postAdminGoodsChangeState = async (
  requestBody: GoodsStateRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataBoolean>> => {
  return Http.postRequest(
    "/admin/goods/changeState",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 根据ID集合批量查询
 */
export const postAdminGoodsFindByIds = async (
  requestBody: GoodsBatchRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataListGoodsDto>> => {
  return Http.postRequest(
    "/admin/goods/findByIds",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 商品列表
 */
export const postAdminGoodsPageList = async (
  requestBody: GoodsSearchRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataPageDataGoodsDto>> => {
  return Http.postRequest(
    "/admin/goods/pageList",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 商品新增
 */
export const postAdminGoodsSave = async (
  requestBody: GoodsCreateRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataBoolean>> => {
  return Http.postRequest(
    "/admin/goods/save",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 商品编辑
 */
export const postAdminGoodsUpdate = async (
  requestBody: GoodsUpdateRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataBoolean>> => {
  return Http.postRequest(
    "/admin/goods/update",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 标签新增
 */
export const postAdminLabel = async (
  requestBody: LabelCreateRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.postRequest(
    "/admin/label",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 库存发货
 */
export const postStockDelivery = async (
  requestBody: DeliveryStockRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataString>> => {
  return Http.postRequest(
    "/stock/delivery",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 锁定库存
 */
export const postStockLockStock = async (
  requestBody: LockStockRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataString>> => {
  return Http.postRequest(
    "/stock/lockStock",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 释放库存
 */
export const postStockReleaseStock = async (
  requestBody: ReleaseStockRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataString>> => {
  return Http.postRequest(
    "/stock/releaseStock",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

export const putAdminAttribute = async (
  requestBody: SysAttributeUpdateRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.putRequest(
    "/admin/attribute",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

export const putAdminAttributeOption = async (
  requestBody: SysAttributeOptionUpdateRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.putRequest(
    "/admin/attributeOption",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 品牌编辑
 */
export const putAdminBrand = async (
  requestBody: BrandUpdateRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.putRequest(
    "/admin/brand",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 分类编辑
 */
export const putAdminCategory = async (
  requestBody: CategoryUpdateRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.putRequest(
    "/admin/category",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 绑定属性
 */
export const putAdminCategoryBindAttr = async (
  requestBody: CategoryBindAttrRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.putRequest(
    "/admin/category/bindAttr",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 服务承诺编辑
 */
export const putAdminCommitment = async (
  requestBody: CommitmentUpdateRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.putRequest(
    "/admin/commitment",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/**
 * 标签编辑
 */
export const putAdminLabel = async (
  requestBody: LabelUpdateRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ResponseDataInteger>> => {
  return Http.putRequest(
    "/admin/label",
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

export interface BrandCreateRequest {
  /**
      * 
品牌描述
      */
  brandDesc?: string;
  /**
      * 
品牌logo
      */
  brandLogoUrl?: string;
  /**
      * 
品牌名称
      */
  brandName?: string;
}

export interface BrandDto {
  /**
      * 
品牌描述
      */
  brandDesc?: string;
  /**
      * 
品牌logo
      */
  brandLogoUrl?: string;
  /**
      * 
品牌名称
      */
  brandName?: string;
  /**
      * 
创建时间
       Format: date-time
      */
  createTime?: string;
  id?: string;
  /**
      * 
编辑时间
       Format: date-time
      */
  updateTime?: string;
}

export interface BrandSearchRequest {
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
品牌名称
      */
  brandName?: string;
  /**
      * 
全局唯一序列
      */
  requestNo?: string;
}

export interface BrandUpdateRequest {
  /**
      * 
品牌ID
      */
  id: string;
  /**
      * 
品牌描述
      */
  brandDesc?: string;
  /**
      * 
品牌logo
      */
  brandLogoUrl?: string;
  /**
      * 
品牌名称
      */
  brandName?: string;
}

export interface CategoryBindAttrRequest {
  /**
      * 
属性类型ID
      */
  attrTypeId: string;
  /**
      * 
分类ID
      */
  id: string;
}

export interface CategoryCreateRequest {
  /**
      * 
父类ID
      */
  parentId: string;
  /**
      * 
分类名称
      */
  categoryName?: string;
}

export interface CategoryDto {
  /**
      * 
属性类型ID
      */
  attrTypeId?: string;
  /**
      * 
分类图标
      */
  categoryIcon?: string;
  /**
      * 
分类名称
      */
  categoryName?: string;
  /**
      * 
创建时间
       Format: date-time
      */
  createTime?: string;
  /**
      * 
ID
      */
  id?: string;
  /**
      * 
是否叶子节点
      */
  leafNode?: boolean;
  /**
      * 
父类ID
      */
  parentId?: string;
  /**
      * 
编辑时间
       Format: date-time
      */
  updateTime?: string;
}

export interface CategorySearchRequest {
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
分类ID
      */
  categoryId?: string;
  /**
      * 
分类名称
      */
  categoryName?: string;
  /**
      * 
父类ID
      */
  parentId?: string;
  /**
      * 
全局唯一序列
      */
  requestNo?: string;
}

export interface CategoryUpdateRequest {
  /**
      * 
分类ID
      */
  id: string;
  /**
      * 
父类ID
      */
  parentId: string;
  /**
      * 
分类名称
      */
  categoryName?: string;
}

export interface CommitmentCreateRequest {
  /**
      * 
服务承诺描述
      */
  commitmentDesc?: string;
  /**
      * 
服务承诺图标
      */
  commitmentIcon?: string;
  /**
      * 
服务承诺名称
      */
  commitmentName?: string;
}

export interface CommitmentDto {
  /**
      * 
承诺描述
      */
  commitmentDesc?: string;
  /**
      * 
承诺图标
      */
  commitmentIcon?: string;
  /**
      * 
承诺名称
      */
  commitmentName?: string;
  /**
      * 
创建时间
       Format: date-time
      */
  createTime?: string;
  /**
      * 
ID
      */
  id?: string;
  /**
      * 
编辑时间
       Format: date-time
      */
  updateTime?: string;
}

export interface CommitmentSearchRequest {
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
服务承诺名称
      */
  commitmentName?: string;
  /**
      * 
全局唯一序列
      */
  requestNo?: string;
}

export interface CommitmentUpdateRequest {
  /**
      * 
服务承诺ID
      */
  id: string;
  /**
      * 
服务承诺描述
      */
  commitmentDesc?: string;
  /**
      * 
服务承诺图标
      */
  commitmentIcon?: string;
  /**
      * 
服务承诺名称
      */
  commitmentName?: string;
}

export interface DeliveryStockRequest {
  /**
      * 
库存锁定ID
      */
  lockStockId: string;
  /**
      * 
供应链商品skuId
      */
  chainGoodsSkuId?: string;
}

export interface ExpressSearchRequest {
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
全局唯一序列
      */
  requestNo?: string;
  /**
      * 
模板名称
      */
  templatesName?: string;
}

export interface GetAdminAttributeOptionQueryParams {
  form?: SysAttributeOptionSearchRequest;
}

export interface GetAdminAttributeQueryParams {
  form?: SysAttributeSearchRequest;
}

export interface GetAdminBrandQueryParams {
  form?: BrandSearchRequest;
}

export interface GetAdminCategoryQueryParams {
  form?: CategorySearchRequest;
}

export interface GetAdminCommitmentQueryParams {
  form?: CommitmentSearchRequest;
}

export interface GetAdminGoodsFindOneByScopeQueryParams {
  form?: GoodsSearchRequest;
}

export interface GetAdminLabelQueryParams {
  form?: LabelSearchRequest;
}

export interface GoodsBatchRequest {
  /**
      * 
当前页码
       Format: int64
      */
  currentPage: number;
  /**
      * 
商品ID集合
      */
  goodsIds: string[];
  /**
      * 
每页查询数量
       Format: int64
       maxLength: 100
      */
  pageSize: number;
  /**
      * 
品牌ID
      */
  brandId?: string;
  /**
      * 
商品分类ID
      */
  categoryId?: string;
  /**
      * 
服务承诺ID
      */
  commitmentId?: string;
  /**
      * 
数据范围
      */
  dataScope?:
    | "BASE"
    | "SKU"
    | "DESC"
    | "LABELS"
    | "COMMITMENT"
    | "LOGISTICS"
    | "ALL"[];
  /**
      * 
商品ID
      */
  goodsId?: string;
  /**
      * 
商品名称
      */
  goodsName?: string;
  /**
      * 
商品类型
      */
  goodsType?: "REAL" | "VIRTUAL";
  /**
      * 
标签ID
      */
  labelId?: string;
  /**
      * 
全局唯一序列
      */
  requestNo?: string;
  /**
      * 
商品状态
      */
  state?: "INIT" | "UP" | "DOWN";
  /**
      * 
状态过滤
      */
  stateFilter?: string[];
}

export interface GoodsCreateRequest {
  /**
      * 
品牌名称
      */
  brandId: string;
  /**
      * 
商品分类ID
      */
  categoryId: string;
  /**
      * 
类别路径编码
      */
  categoryPathCode: string;
  /**
      * 
类别路径名称
      */
  categoryPathName: string;
  /**
      * 
商品图片
      */
  goodsImageUrls: string[];
  /**
      * 
商品类型
      */
  goodsType: "REAL" | "VIRTUAL";
  /**
      * 
sku集合
      */
  skuList: SkuDto[];
  /**
      * 
规格类型(UNIFIED 统一规格, CUSTOM 自定义)
      */
  specsType: "UNIFIED" | "CUSTOM";
  /**
      * 
商品状态(初始、上架、下架)
      */
  state: "INIT" | "UP" | "DOWN";
  /**
      * 
服务承诺
      */
  commitmentIds?: string[];
  goodsDetails?: GoodsDetailsDto;
  /**
      * 
商品名称
      */
  goodsName?: string;
  /**
      * 
商品标题
      */
  goodsTitle?: string;
  /**
      * 
商品标签
      */
  labelIds?: string[];
  logistics?: LogisticsDto;
  /**
      * 
总规格组
      */
  skuGroups?: SkuGroupDto[];
}

export interface GoodsDetailsDto {
  /**
      * 
创建时间
       Format: date-time
      */
  createTime?: string;
  /**
      * 
商品描述
      */
  goodsDesc?: string;
  /**
      * 
商品属性
      */
  properties?: KeyValueDto[];
  /**
      * 
编辑时间
       Format: date-time
      */
  updateTime?: string;
}

export interface GoodsDto {
  /**
      * 
品牌ID
      */
  brandId?: string;
  /**
      * 
分类ID
      */
  categoryId?: string;
  /**
      * 
类别路径编码
      */
  categoryPathCode?: string;
  /**
      * 
类别路径名称
      */
  categoryPathName?: string;
  /**
      * 
服务承诺
      */
  commitmentIds?: string[];
  /**
      * 
创建时间
      */
  createTime?: string;
  goodsDetails?: GoodsDetailsDto;
  /**
      * 
商品图集
      */
  goodsImageUrls?: string[];
  /**
      * 
商品名称
      */
  goodsName?: string;
  /**
      * 
商品状态(INIT初始、UP上架、DOWN下架)
      */
  goodsState?: string;
  /**
      * 
商品标题
      */
  goodsTitle?: string;
  /**
      * 
商品类型(REAL实物、VIRTUAL虚拟)
      */
  goodsType?: string;
  /**
      * 
ID
      */
  id?: string;
  labelIds?: string[];
  logistics?: LogisticsDto;
  /**
      * 
可使用积分抵消
       Format: int32
      */
  points?: number;
  /**
      * 
总规格组
      */
  skuGroups?: SkuGroupDto[];
  /**
      * 
规格(sku)
      */
  skuList?: SkuDto[];
  /**
      * 
排序
       Format: int32
      */
  sort?: number;
  /**
      * 
sku类型(UNIFIED统一、CUSTOM自定义)
      */
  specsType?: string;
  /**
      * 
编辑时间
      */
  updateTime?: string;
}

export interface GoodsSearchRequest {
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
品牌ID
      */
  brandId?: string;
  /**
      * 
商品分类ID
      */
  categoryId?: string;
  /**
      * 
服务承诺ID
      */
  commitmentId?: string;
  /**
      * 
数据范围
      */
  dataScope?:
    | "BASE"
    | "SKU"
    | "DESC"
    | "LABELS"
    | "COMMITMENT"
    | "LOGISTICS"
    | "ALL"[];
  /**
      * 
商品ID
      */
  goodsId?: string;
  /**
      * 
商品名称
      */
  goodsName?: string;
  /**
      * 
商品类型
      */
  goodsType?: "REAL" | "VIRTUAL";
  /**
      * 
标签ID
      */
  labelId?: string;
  /**
      * 
全局唯一序列
      */
  requestNo?: string;
  /**
      * 
商品状态
      */
  state?: "INIT" | "UP" | "DOWN";
  /**
      * 
状态过滤
      */
  stateFilter?: string[];
}

export interface GoodsStateRequest {
  /**
      * 
商品ID集合
      */
  ids: string[];
  /**
      * 
商品状态(初始/上架/下架/删除
      */
  state?: "INIT" | "UP" | "DOWN";
}

export interface GoodsUpdateRequest {
  /**
      * 
品牌名称
      */
  brandId: string;
  /**
      * 
商品分类ID
      */
  categoryId: string;
  /**
      * 
类别路径编码
      */
  categoryPathCode: string;
  /**
      * 
类别路径名称
      */
  categoryPathName: string;
  /**
      * 
商品ID
      */
  goodsId: string;
  /**
      * 
商品图片
      */
  goodsImageUrls: string[];
  /**
      * 
商品类型
      */
  goodsType: "REAL" | "VIRTUAL";
  /**
      * 
sku集合
      */
  skuList: SkuDto[];
  /**
      * 
规格类型(UNIFIED 统一规格, CUSTOM 自定义)
      */
  specsType: "UNIFIED" | "CUSTOM";
  /**
      * 
商品状态(初始、上架、下架)
      */
  state: "INIT" | "UP" | "DOWN";
  /**
      * 
服务承诺
      */
  commitmentIds?: string[];
  goodsDetails?: GoodsDetailsDto;
  /**
      * 
商品名称
      */
  goodsName?: string;
  /**
      * 
商品标题
      */
  goodsTitle?: string;
  /**
      * 
商品标签
      */
  labelIds?: string[];
  logistics?: LogisticsDto;
  /**
      * 
总规格组
      */
  skuGroups?: SkuGroupDto[];
}

export interface KeyValueDto {
  /**
      * 
属性码
      */
  key?: object;
  /**
      * 
属性值
      */
  value?: object;
}

export interface LabelCreateRequest {
  /**
      * 
标签名称
      */
  labelName?: string;
}

export interface LabelSearchRequest {
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
标签名称
      */
  labelName?: string;
  /**
      * 
全局唯一序列
      */
  requestNo?: string;
}

export interface LabelUpdateRequest {
  /**
      * 
标签ID
      */
  id: string;
  /**
      * 
标签名称
      */
  labelName?: string;
}

export interface LabelsDto {
  /**
      * 
创建时间
       Format: date-time
      */
  createTime?: string;
  /**
      * 
标签ID
      */
  id?: string;
  /**
      * 
标签名称
      */
  labelName?: string;
  /**
      * 
编辑时间
       Format: date-time
      */
  updateTime?: string;
}

export interface LockStockRequest {
  /**
      * 
供应链商品skuId
      */
  chainGoodsSkuId: string;
  /**
      * 
订单号
      */
  orderNo: string;
  /**
      * 
供应链商品ID
      */
  chainGoodsId?: string;
}

export interface LogisticsDto {
  /**
      * 
创建时间
       Format: date-time
      */
  createTime?: string;
  /**
      * 
运费金额(单位:分)
       Format: int32
      */
  expressFee?: number;
  /**
      * 
运费模板ID
      */
  expressTemplateId?: string;
  /**
      * 
运费类型(统一运费、运费模板)
      */
  expressType?: string;
  /**
      * 
编辑时间
       Format: date-time
      */
  updateTime?: string;
}

export interface PageDataBrandDto {
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
  records?: BrandDto[];
  /**
      * 
数据总数
       Format: int64
      */
  totalSize?: number;
}

export interface PageDataCategoryDto {
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
  records?: CategoryDto[];
  /**
      * 
数据总数
       Format: int64
      */
  totalSize?: number;
}

export interface PageDataCommitmentDto {
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
  records?: CommitmentDto[];
  /**
      * 
数据总数
       Format: int64
      */
  totalSize?: number;
}

export interface PageDataGoodsDto {
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
  records?: GoodsDto[];
  /**
      * 
数据总数
       Format: int64
      */
  totalSize?: number;
}

export interface PageDataLabelsDto {
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
  records?: LabelsDto[];
  /**
      * 
数据总数
       Format: int64
      */
  totalSize?: number;
}

export interface PageDataObject {
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
  records?: object[];
  /**
      * 
数据总数
       Format: int64
      */
  totalSize?: number;
}

export interface PageDataSysAttributeDto {
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
  records?: SysAttributeDto[];
  /**
      * 
数据总数
       Format: int64
      */
  totalSize?: number;
}

export interface PageDataSysAttributeOptionDto {
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
  records?: SysAttributeOptionDto[];
  /**
      * 
数据总数
       Format: int64
      */
  totalSize?: number;
}

export interface ReleaseStockRequest {
  /**
      * 
库存锁定ID
      */
  lockStockId: string;
  /**
      * 
供应链商品skuId
      */
  chainGoodsSkuId?: string;
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

export interface ResponseDataBrandDto {
  /**
      * 
状态码
      */
  code?: string;
  data?: BrandDto;
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataCategoryDto {
  /**
      * 
状态码
      */
  code?: string;
  data?: CategoryDto;
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataCommitmentDto {
  /**
      * 
状态码
      */
  code?: string;
  data?: CommitmentDto;
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataGoodsDto {
  /**
      * 
状态码
      */
  code?: string;
  data?: GoodsDto;
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

export interface ResponseDataLabelsDto {
  /**
      * 
状态码
      */
  code?: string;
  data?: LabelsDto;
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataListCategoryDto {
  /**
      * 
状态码
      */
  code?: string;
  /**
      * 
数据集
      */
  data?: CategoryDto[];
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataListGoodsDto {
  /**
      * 
状态码
      */
  code?: string;
  /**
      * 
数据集
      */
  data?: GoodsDto[];
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataListSysAttributeOptionDto {
  /**
      * 
状态码
      */
  code?: string;
  /**
      * 
数据集
      */
  data?: SysAttributeOptionDto[];
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataPageDataBrandDto {
  /**
      * 
状态码
      */
  code?: string;
  data?: PageDataBrandDto;
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataPageDataCategoryDto {
  /**
      * 
状态码
      */
  code?: string;
  data?: PageDataCategoryDto;
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataPageDataCommitmentDto {
  /**
      * 
状态码
      */
  code?: string;
  data?: PageDataCommitmentDto;
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataPageDataGoodsDto {
  /**
      * 
状态码
      */
  code?: string;
  data?: PageDataGoodsDto;
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataPageDataLabelsDto {
  /**
      * 
状态码
      */
  code?: string;
  data?: PageDataLabelsDto;
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataPageDataObject {
  /**
      * 
状态码
      */
  code?: string;
  data?: PageDataObject;
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataPageDataSysAttributeDto {
  /**
      * 
状态码
      */
  code?: string;
  data?: PageDataSysAttributeDto;
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataPageDataSysAttributeOptionDto {
  /**
      * 
状态码
      */
  code?: string;
  data?: PageDataSysAttributeOptionDto;
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

export interface ResponseDataSysAttributeDto {
  /**
      * 
状态码
      */
  code?: string;
  data?: SysAttributeDto;
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface ResponseDataSysAttributeOptionDto {
  /**
      * 
状态码
      */
  code?: string;
  data?: SysAttributeOptionDto;
  /**
      * 
描述
      */
  message?: string;
  success?: boolean;
}

export interface SkuDto {
  /**
      * 
创建时间
      */
  createTime?: string;
  /**
      * 
规格ID
      */
  id?: string;
  /**
      * 
划线价(单位: 分)
       Format: int32
      */
  marketPrice?: number;
  /**
      * 
销售价(单位: 分)
       Format: int32
      */
  sellPrice?: number;
  /**
      * 
sku主图
      */
  skuMainImage?: string;
  /**
      * 
规格码
      */
  specCode?: KeyValueDto[];
  /**
      * 
规格名称
      */
  specName?: KeyValueDto[];
  /**
      * 
编辑时间
      */
  updateTime?: string;
  /**
      * 
重量(单位: KG)
       Format: double
      */
  weight?: number;
}

export interface SkuGroupDto {
  /**
      * 
选项集合
      */
  items?: KeyValueDto[];
  /**
      * 
属性码
      */
  key?: string;
  /**
      * 
属性值
      */
  value?: string;
}

export interface SysAttributeCreateRequest {
  /**
      * 
属性类型名称
      */
  attrTypeName?: string;
  /**
      * 
属性适用类型（GOODS商品，SALES销售）
      */
  attrUsedType?: "GOODS" | "SALES";
}

export interface SysAttributeDto {
  /**
      * 
属性个数
       Format: int32
      */
  attrNumber?: number;
  /**
      * 
属性类型名称
      */
  attrTypeName?: string;
  /**
      * 
属性适用类型（GOODS商品，SALES销售）
      */
  attrUsedType?: string;
  /**
      * 
创建时间
       Format: date-time
      */
  createTime?: string;
  id?: string;
  /**
      * 
编辑时间
       Format: date-time
      */
  updateTime?: string;
}

export interface SysAttributeOptionCreateRequest {
  /**
      * 
属性类型ID
      */
  attrTypeId: string;
  /**
      * 
属性类型名称
      */
  attrOptionName?: string;
  /**
      * 
录入方式（FIXED 固定, MANUAL手动）
      */
  entryMode?: string;
}

export interface SysAttributeOptionDto {
  /**
      * 
属性值名称
      */
  attrOptionName?: string;
  /**
      * 
属性类型ID
      */
  attrTypeId?: string;
  /**
      * 
属性类型名称
      */
  attrTypeName?: string;
  /**
      * 
创建时间
       Format: date-time
      */
  createTime?: string;
  /**
      * 
录入方式（FIXED 固定, MANUAL手动）
      */
  entryMode?: string;
  id?: string;
  /**
      * 
编辑时间
       Format: date-time
      */
  updateTime?: string;
}

export interface SysAttributeOptionSearchRequest {
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
属性值名称
      */
  attrOptionName?: string;
  /**
      * 
属性类型ID
      */
  attrTypeId?: string;
  /**
      * 
录入方式（FIXED 固定, MANUAL手动）
      */
  entryMode?: string;
  /**
      * 
全局唯一序列
      */
  requestNo?: string;
}

export interface SysAttributeOptionUpdateRequest {
  /**
      * 
属性类型ID
      */
  attrTypeId: string;
  /**
      * 
属性选项ID
      */
  id: string;
  /**
      * 
属性类型名称
      */
  attrOptionName?: string;
  /**
      * 
录入方式（FIXED 固定, MANUAL手动）
      */
  entryMode?: string;
}

export interface SysAttributeSearchRequest {
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
属性类型ID
      */
  attrTypeId?: string;
  /**
      * 
属性类型名称
      */
  attrTypeName?: string;
  /**
      * 
属性适用类型（GOODS商品，SALES销售）
      */
  attrUsedType?: "GOODS" | "SALES";
  /**
      * 
全局唯一序列
      */
  requestNo?: string;
}

export interface SysAttributeUpdateRequest {
  /**
      * 
属性类型ID
      */
  id: string;
  /**
      * 
属性类型名称
      */
  attrTypeName?: string;
  /**
      * 
属性适用类型（GOODS商品，SALES销售）
      */
  attrUsedType?: "GOODS" | "SALES";
}
export const _CONSTANT0 = {
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*"
  }
};
