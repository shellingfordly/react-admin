import React from 'react';
import { getStorage } from '../../utils/storage'
import { Layout } from 'antd'
import { Switch, Route, Redirect } from 'react-router-dom'
import LeftNav from '../../component/leftnav/LeftNav'
import Home from '../../component/home/Home'
import Category from '../../component/category/Category'
import Product from '../../component/product/Product'
import User from '../../component/user/User'
import Role from '../../component/role/Role'
import Bar from '../../component/bar/Bar'
import Line from '../../component/line/Line'
import Pie from '../../component/pie/Pie'
import Header from '../../component/header/Header'

const { Footer, Sider, Content } = Layout;

export default class Admin extends React.Component {
  render() {
    const user = getStorage('user')
    if (user._id) {
      return (
        <Layout style={{ height: '100%' }}>
          <Sider>
            <LeftNav />
          </Sider>
          <Layout>
            <Header />
            <Content>
              <div className="site-card-border-less-wrapper" style={{ margin: 20 }}>
                <Switch>
                  <Route path="/admin/home" component={Home}></Route>
                  <Route path="/admin/products/category" component={Category}></Route>
                  <Route path="/admin/products/product" component={Product}></Route>
                  <Route path="/admin/user" component={User}></Route>
                  <Route path="/admin/role" component={Role}></Route>
                  <Route path="/admin/charts/bar" component={Bar}></Route>
                  <Route path="/admin/charts/line" component={Line}></Route>
                  <Route path="/admin/charts/pie" component={Pie}></Route>
                  <Redirect to='/admin/home' />
                </Switch>
              </div>
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      )
    }
    else return (<Redirect to='login'></Redirect>)
  }
}