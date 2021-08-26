import { Layout } from 'antd';
import UserDropDown from './components/user-dropdown/UserDropdown';
import HeaderLeft from './components/HeaderLeft';
import './index.less'

export default function Header() {
  const prefixCls = 'layout-header'

  return (
    <Layout.Header className={prefixCls}>
      <HeaderLeft />
      <UserDropDown />
    </Layout.Header>
  )
}