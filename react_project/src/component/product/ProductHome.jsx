import React from 'react';
import { Card, Button, Table, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export default class ProductHome extends React.Component {
  render() {
    const columns = [
      {
        title: '商品名称',
        dataIndex: 'productName',
        key: 'productName',
      },
      {
        title: '商品描述',
        dataIndex: 'productDesc',
        key: 'productDesc',
      },
      {
        title: '商品价格',
        dataIndex: 'productPrice',
        key: 'productPrice',
      },
      {
        title: '操作类型',
        dataIndex: 'action',
        key: 'action',
        render: (text, record) => {
          return (
            <span>
              <Button type='link'>详情</Button>
              <Button type='link' >修改</Button>
            </span>
          )
        }
      },
    ], data = []
    return (
      <Card title={"商品"} extra={<Button type='primary' onClick={() => this.props.history.push({ pathname: '/admin/products/product/add' })}><PlusOutlined />添加商品</Button>}>
        <Table pagination={{ defaultPageSize: 3 }} columns={columns} dataSource={data} bordered />
      </Card>
    )
  }
}