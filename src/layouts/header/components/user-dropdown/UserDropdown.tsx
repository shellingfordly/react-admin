import { Dropdown } from 'antd';
import DropMenu from './DropMenu'
import './index.less'

export default function UserDropDown() {
  const prefixCls = 'drop-down'

  return (
    <Dropdown className={prefixCls} overlay={DropMenu}>
      <div className={`${prefixCls}-text`} onClick={e => e.preventDefault()}>
        新一
      </div>
    </Dropdown>
  )
}

