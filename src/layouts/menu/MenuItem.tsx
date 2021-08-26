import { Menu } from 'antd';
import { PieChartOutlined, } from '@ant-design/icons';
import { Link } from 'react-router-dom'

// const { SubMenu } = Menu;


export default function MenuItem(props: any) {
  const { menu } = props
  console.log('MenuItem', menu)

  // const menuItem = (
  //   <Menu.Item key={menu.path} icon={<PieChartOutlined />}>
  //     <Link to={menu.path} >{menu.title}</Link>
  //   </Menu.Item>
  // )

  // const subMenu = (
  //   <SubMenu key={menu.path} icon={<PieChartOutlined />} title={menu.title}>
  //     {menu.children.length && menu.children.map((child: any) => <MenuItem menu={child} />)}
  //   </SubMenu>
  // )

  // return menu.children.length > 1 ? subMenu : menuItem
  return (
    <Menu.Item key={menu.path} icon={<PieChartOutlined />}>
      <Link to={menu.path}>{menu.title}</Link>
    </Menu.Item>
  )
}