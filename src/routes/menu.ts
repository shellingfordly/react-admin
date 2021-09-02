import { routesModdul } from "./router";

interface MenuItem {
  path: string
  title: string
  icon: string
  children: MenuItem[]
}

export function getMenus(routes = routesModdul) {
  let menus: MenuItem[] = routes.map(item => ({
    path: item.path,
    title: item.meta.title,
    icon: item.meta.icon,
    children: !item.children ? [] : getMenus(item.children)
  }))
  return menus
}