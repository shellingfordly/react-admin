import { Layout } from 'antd';
import { useState } from 'react'
import AppLogo from '../../components/appLogo/AppLogo'
import Menu from '../menu/Menu'

export default function LayoutSider() {
  const [collapsed, setCollapsed] = useState(false)

  function onCollapse() {
    setCollapsed(!collapsed)
  }

  return (
    <Layout.Sider theme="light" collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <AppLogo />
      <Menu />
    </Layout.Sider>
  )
}