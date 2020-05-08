import React from 'react';
import { Menu } from 'antd';
import { NavLink, withRouter } from 'react-router-dom'
import {
  HomeOutlined,
  AppstoreOutlined,
  BarsOutlined,
  AreaChartOutlined,
  ToolOutlined,
  UserOutlined,
  SafetyCertificateOutlined,
  PieChartOutlined,
  BarChartOutlined,
  LineChartOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;

class LeftNav extends React.Component {

  UNSAFE_componentWillMount() {
    const path = this.defaultSelectedKeys = this.props.location.pathname
    if (path === '/admin') this.defaultSelectedKeys = '/admin/home'
    const _path = path.match(/\//g)
    if (_path.length === 3) this.defaultOpenKeys = path.slice(0, path.lastIndexOf('/'))
  }

  render() {
    return (
      <Menu
        defaultSelectedKeys={[this.defaultSelectedKeys]}
        defaultOpenKeys={[this.defaultOpenKeys]}
        mode="inline"
        theme="dark"
      >
        <Menu.Item key="/admin/home"><NavLink to="/admin/home"><HomeOutlined />首页</NavLink></Menu.Item>
        <SubMenu key="/admin/products" icon={<AppstoreOutlined />} title="商品">
          <Menu.Item key="/admin/products/category"><BarsOutlined /><NavLink to="/admin/products/category">分类管理</NavLink></Menu.Item>
          <Menu.Item key="/admin/products/product"><ToolOutlined /><NavLink to="/admin/products/product">商品管理</NavLink></Menu.Item>
        </SubMenu>
        <Menu.Item key="/admin/user"><UserOutlined /><NavLink to="/admin/user">用户管理</NavLink></Menu.Item>
        <Menu.Item key="/admin/role"><SafetyCertificateOutlined /><NavLink to="/admin/role">角色管理</NavLink></Menu.Item>
        <SubMenu key="/admin/charts" icon={<AreaChartOutlined />} title="图形图表">
          <Menu.Item key="/admin/charts/bar"><BarChartOutlined /><NavLink to="/admin/charts/bar">柱形图</NavLink></Menu.Item>
          <Menu.Item key="/admin/charts/line"><LineChartOutlined /><NavLink to="/admin/charts/line">折线图</NavLink></Menu.Item>
          <Menu.Item key="/admin/charts/pie"><PieChartOutlined /><NavLink to="/admin/charts/pie">饼图</NavLink></Menu.Item>
        </SubMenu>
      </Menu>
    )
  }
}

export default withRouter(LeftNav)