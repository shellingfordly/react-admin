import LayoutHeader from './header/Header'
import LayoutFooter from './footer/Footer'
import LayoutContent from './content/Content'
import LayoutSider from './sider/Sider'
import { Layout } from 'antd';

export default function LayoutMain() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <LayoutSider />
      <Layout>
        <LayoutHeader />
        <LayoutContent />
        <LayoutFooter />
      </Layout>
    </Layout>
  )
}