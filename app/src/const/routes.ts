import {config} from "../environment";

export const routes = {
    root: '/',
    overview: `/${config.contextPath}/overview`,
    create: `/${config.contextPath}/create`,
    update: `/${config.contextPath}/edit/:id`,
    detail: `/${config.contextPath}/detail/:id`
}
