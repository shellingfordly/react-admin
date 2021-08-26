import { Menu, Modal } from 'antd';
import { UserOutlined, PoweroffOutlined } from '@ant-design/icons';

export default function UserDropDown() {

  function menuOnclick({ key }: any) {
    switch (key) {
      case 'person':
        break;
      case 'logout':
        Modal.confirm({
          title: '温馨提醒',
          content: '是否确认退出系统?',
          cancelText: '取消',
          okText: '确定',
          onOk() {
            console.log('退出成功！');
          },
        });
        break;
      default:
        break;
    }
  }

  return (
    <Menu onClick={menuOnclick}>
      <Menu.Item icon={<UserOutlined />} key="person">
        <span>个人中心</span>
      </Menu.Item>
      <Menu.Item icon={<PoweroffOutlined />} key="logout">
        <span>登出</span>
      </Menu.Item>
    </Menu>
  )
}

