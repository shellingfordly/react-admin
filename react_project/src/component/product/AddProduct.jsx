import React from 'react';
import { Switch, NavLink } from 'react-router-dom'
import { Card, Button, Select, Form, Input, message, InputNumber, Cascader } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { addCategory, getAllCategory, updataCategoryName } from '../../api'
import Picture from './Picture';

export default class AddProduct extends React.Component {
  state = {
    allCategoryList: [],
    options: []
  };
  UNSAFE_componentWillMount() {
    this.getAllCategoryList()
  }

  getAllCategoryList = async () => { // 获取所有分类数据
    const { status, categorys } = await getAllCategory()
    if (status) {
      message.error('获取分类失败。')
      return
    }
    this.setState({ allCategoryList: categorys })
    this.setState({ options: this.setOptions('1') })
  }

  setOptions = (categoryId) => { // 返回级联选择器的options数据值
    const options = []
    this.state.allCategoryList.map(item => {
      if (item.categoryId === categoryId)
        options.push({
          value: item.categoryName,
          label: item.categoryName,
          isLeaf: categoryId === '1' ? false : true,
          categoryId: item.categoryId,
          _id: item._id
        })
    })
    return options
  }


  onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
  };

  loadData = selectedOptions => { // 级联选择器选择时触发
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;
    setTimeout(() => {
      targetOption.loading = false;
      const children = this.setOptions(targetOption._id)
      targetOption.children = children
      this.setState({
        options: [...this.state.options],
      });
    }, 1000);
  };

  onFinish = values => {
    console.log(values);
  };

  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 10 },
    };
    const validateMessages = {
      required: '${label}不能为空',
    };
    return (
      <Card title={<span>
        <NavLink to='/admin/products/product'><ArrowLeftOutlined style={{ verticalAlign: 'middle', marginRight: 10 }} /></NavLink>
        <span>添加商品页面</span>
      </span>}>
        <Form {...layout} name="nest-messages" onFinish={this.onFinish} validateMessages={validateMessages}>
          <Form.Item name={['user', 'productName']} label="商品名称" rules={[{ required: true }]}>
            <Input placeholder='请输入商品名称' />
          </Form.Item>
          <Form.Item name={['user', 'productDesc']} label="商品描述" >
            <Input.TextArea placeholder='请输入商品描述' />
          </Form.Item>
          <Form.Item name={['user', 'productPrice']} label="商品价格" rules={[{ required: true }]}>
            <Input placeholder='请输入商品价格' />
          </Form.Item>
          <Form.Item name={['user', 'productCategory']} label="商品分类" rules={[{ required: true }]}>
            {/* <Input placeholder='请选择商品分类' /> */}
            <Cascader
              options={this.state.options}
              loadData={this.loadData}
              onChange={this.onChange}
              placeholder='请选择商品分类'
              changeOnSelect
            />
          </Form.Item>
          <Form.Item name={['user', 'productPicture']} label="商品图片">
            <Picture />
          </Form.Item >

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">提交</Button>
          </Form.Item>
        </Form>
      </Card>
    )
  }
}