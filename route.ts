/**
 * 公共路径
 * 无需鉴权
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * 允许路径
 * @type {string[]}
 */
export const authRoutes = ["/login", "/register"];

/**
 * api请求route
 * 请求不受auth影响
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/setting";
