import { Menu } from 'antd';
import { getMenus } from '@/routes/menu'
import { Link, RouteComponentProps } from 'react-router-dom'
import SvgIcon from '@/components/icon/SvgIcon'
import { withRouter } from 'react-router-dom'

const { SubMenu } = Menu;

function LayoutMenu(props: RouteComponentProps) {
  const menus = getMenus()
  const style = { marginRight: '5px' }
  const path = props.location.pathname
  const defaultSelectedKeys = [path.length > 1 ? path : '/home']
  const openKeys = [menus.find(menu => path.includes(menu.path))?.path || '']

  return (
    <Menu theme="light" defaultSelectedKeys={defaultSelectedKeys} defaultOpenKeys={openKeys} mode="inline" >
      {
        menus.map(menu => (
          !menu.children.length ?
            <Menu.Item key={menu.path} icon={<SvgIcon name={menu.icon} style={style} />}>
              <Link to={menu.path}>{menu.title}</Link>
            </Menu.Item>
            : <SubMenu key={menu.path} icon={<SvgIcon name={menu.icon} style={style} />} title={menu.title}>
              {menu.children.length && menu.children.map(child => (
                <Menu.Item key={child.path} icon={<SvgIcon name={child.icon} style={style} />}>
                  <Link to={child.path} >{child.title}</Link>
                </Menu.Item>
              ))}
            </SubMenu>
        ))
      }
    </Menu>
  )
}

export default withRouter(LayoutMenu)