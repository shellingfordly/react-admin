import { Layout } from 'antd';
import { Route } from 'react-router-dom'
import RouterView from '@/routes/RouterView'
import './content.less'

export default function LayoutContent() {
  const prefixCls = 'layout-content'

  return (
    <Layout.Content className={prefixCls}>
      <div className={`${prefixCls}-container`}>
        <Route component={RouterView}>
        </Route>
      </div>
    </Layout.Content>
  )
}