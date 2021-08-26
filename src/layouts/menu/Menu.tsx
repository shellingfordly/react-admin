import { Menu } from 'antd';
import { getMenus } from '@/routes/menu'
import { PieChartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

const { SubMenu } = Menu;

export default function LayoutMenu() {
  const menus = getMenus()

  return (
    <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
      {
        menus.map(menu => (
          !menu.children.length ?
            <Menu.Item key={menu.path} icon={<PieChartOutlined />}>
              <Link to={menu.path} >{menu.title}</Link>
            </Menu.Item>
            : <SubMenu key={menu.path} icon={<PieChartOutlined />} title={menu.title}>
              {menu.children.length && menu.children.map(child => (
                <Menu.Item key={child.path} icon={<PieChartOutlined />}>
                  <Link to={child.path} >{child.title}</Link>
                </Menu.Item>
              ))}
            </SubMenu>
        ))
      }
    </Menu>
  )
}