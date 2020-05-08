import React from 'react';
import './header.less'
import { withRouter } from 'react-router-dom';
import { Modal, Button, message } from 'antd';
import { getStorage, removeStorage } from '../../utils/storage'
import { reqWeather } from '../../api/index';
import menusConfig from '../../config/menusConfig'
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

class Header extends React.Component {

  state = {
    weather: {},
    time: new Date().toLocaleString(),
  }

  UNSAFE_componentWillMount() {
    this.user = getStorage()
    this.getDayMsg()
    this.setLocalTime()
  }

  async getDayMsg() { // 获取天气
    const weather = await reqWeather()
    this.setState({ weather })
  }

  setLocalTime() { // 设置时间
    this.timer = setInterval(() => {
      this.setState({
        time: new Date().toLocaleString()
      })
    }, 1000)
  }

  getTitle() { // 获取标题
    const pathname = this.props.location.pathname
    let title = '';
    (function getMenuTitle(menu) {
      for (let i = 0; i < menu.length; i++) {
        if (menu[i].children) getMenuTitle(menu[i].children)
        else if (menu[i].key === pathname) title = menu[i].title
      }
    })(menusConfig)
    return title
  }

  exitLogin = () => {
    confirm({
      title: '确定退出登录？',
      icon: <ExclamationCircleOutlined />,
      onOk: () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            message.success('已退出登录。')
            removeStorage()
            this.props.history.push({ pathname: '/login' })
            Math.random() > 0.5 ? resolve() : reject()
          }, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() { },
    });

  }

  componentWillUnmount() {
    clearInterval(this.timer) // 清除时间定时器
  }

  render() {
    const { username } = this.user
    const { time } = this.state
    const { weather, wind, temperature, dayPictureUrl } = this.state.weather
    return (
      <div className="header">
        <div className="header-top">
          <span>欢迎,{username}</span>
          <Button type='link' onClick={this.exitLogin}>退出</Button>
        </div>
        <div className="header-bottom">
          <span className="header-bottom-left">{this.getTitle()}</span>
          <div className="header-bottom-right">
            <span>{time}</span>
            <img src={dayPictureUrl} alt="" />
            <span>{weather}</span>
            <span>{temperature}</span>
            <span>{wind}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)