import React from 'react';
import './login.less'
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { reqLogin } from '../../api/index.js'
import { setStorage } from '../../utils/storage'

export default class Login extends React.Component {

  onFinish = async values => {
    // 点击button提交，检验通过时执行，并返回input数据
    // values为input框的数据
    const { status, msg, user } = await reqLogin(values)
    if (!status) { // status=0 登录成功
      message.success(msg)
      setStorage(user)
      this.props.history.push({ pathname: '/admin' })
    } else {
      message.error(msg)
    }
  };

  render() {
    return (
      <div className='login-form'>
        <h2 className='login-title'>后台管理系统</h2>
        <Form
          name="normal_login"
          initialValues={{ username: 'admin', password: '111' }}
          onFinish={this.onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              { min: 3, message: '用户名不能少于3位' },
              { max: 12, message: '用户名不能多于12位' },
              { required: true, message: '用户名不能为空' }
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { min: 3, message: '密码不能少于3位' },
              { max: 12, message: '密码不能多于12位' },
              { required: true, message: '密码不能为空' }
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType="submit" block >登录</Button>
          </Form.Item>
        </Form>

      </div>
    )
  }
}