import { routesModdul } from "./router";

interface MenuItem {
  path: string
  title: string
  children: MenuItem[]
}

export function getMenus(routes = routesModdul) {
  let menus: MenuItem[] = routes.map(item => ({
    path: item.path,
    title: item.meta.title,
    children: !item.children ? [] : getMenus(item.children)
  }))
  return menus
}