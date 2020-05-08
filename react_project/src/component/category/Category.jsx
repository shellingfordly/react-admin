import React from 'react';
import { Modal, Card, Button, Table, Select, Form, Input, message } from 'antd';
import { PlusOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { addCategory, getAllCategory, updataCategoryName } from '../../api'

const { Option } = Select;

export default class Category extends React.Component {
  constructor() {
    super()
    this.state = {
      columns: [
        {
          title: '分类名称',
          dataIndex: 'sortName',
          key: 'sortName',
        },
        {
          title: '操作',
          dataIndex: 'action',
          key: 'action',
          width: '30%',
          render: (text, record) => {
            return (
              <span>
                <Button type='link' onClick={() => { this.showUpdataModal(record) }}>{text[0]}</Button>
                {!this.state.showSortLevel ? (<Button type='link' onClick={() => { this.showSubCategories(record) }}>{text[1]}</Button>) : ''}
              </span>
            )
          }
        },
      ],
      firstCategorys: [],
      secondCategorys: [],
      allCategory: [],
      secondCategoryInfo: {}, // 手机被点击查看子分的那一行的数据
      updataCategoryInfo: {}, // 收集被点击修改分类名的那一行的数据
      visible: false,
      isShowUpdataModal: false,
      categoryId: '1', // 保存分类类型，比如选项框选择了分类时，保存其分类id
      showSortLevel: 0 // 当前表格中展示的分类等级，0为一级分类，1为二级分类
    }
    this.btnDom = React.createRef()
  }

  UNSAFE_componentWillMount() {
    this.getAllCategory('1')
  }

  showModal = () => {
    this.setState({ visible: true })
  }

  confirmAdd = () => { // 确定添加
    this.btnDom.current.click() // 触发Form表单的submit按键提交数据，触发属性onFinish={this.addCategory}
  };

  cancelAdd = () => { // 取消添加
    this.setState({ visible: false })
  }

  selectCategory = (categoryId) => { // 设置分类类型
    this.setState({ categoryId })
  }

  addCategory = async ({ categoryName }) => { // 真正的添加分类代码逻辑
    const { showSortLevel, secondCategoryInfo, categoryId } = this.state
    // categoryName 输入分类的input的value值
    this.setState({ visible: false })
    const { status, msg } = await addCategory({ // 将数据传给后台保存
      categoryId,
      categoryName
    })
    if (!status) { // 添加成功 设置一级分类
      message.success(msg)
      // 添加一级分类，获取一级；添加二级分类，获取二级
      showSortLevel ? this.getAllCategory(secondCategoryInfo.key) : this.getAllCategory('1')
    } else {
      message.error(msg)
    }
  }
  getAllCategory = async (categoryId) => { // 从后台获取全部的分类数据
    const { status, categorys } = await getAllCategory()
    if (status) {
      message.error('获取分类数据失败')
      return
    }
    this.setState({ allCategory: categorys }, () => {
      this.setFirstCategory(categoryId) // 设置一级分类
    })
  }


  setFirstCategory = (categoryId) => { // categoryId----分类等级
    const categorys = []
    this.state.allCategory.map(item => { // 通过分类等级 设置对应的类别数据firstCategorys
      if (item.categoryId === categoryId) {
        this.addCategoryItem(categorys, item)
      }
    })
    // 显示一级分类，更新一级分类数据firstCategorys；显示二级分类，更新一级分类数据secondCategorys
    this.state.showSortLevel ? this.setState({ secondCategorys: categorys }) : this.setState({ firstCategorys: categorys })
  }

  addCategoryItem = (data, item) => { // 添加数据
    data.push({
      key: item._id,
      sortName: item.categoryName,
      action: ['修改分类名', '查看子分类']
    })
  }


  showSubCategories = (record) => {// 展示二级分类数据
    // record 当前点击行的所有数据
    this.setState({
      secondCategoryInfo: record,
      categoryId: record.key,
      showSortLevel: 1
    }, () => {
      this.setFirstCategory(record.key)
    })
  }

  shiftFirstCategory = () => { // 切换 一级分类
    this.setState({ showSortLevel: 0 }, () => {
      this.setFirstCategory('1')
    })
  }

  showUpdataModal = (record) => {
    this.setState({ isShowUpdataModal: true, updataCategoryInfo: record, })
  }

  okUpdataModal = async () => {
    const { updataCategoryInfo, showSortLevel, secondCategoryInfo } = this.state
    this.setState({ isShowUpdataModal: false })
    const { status, msg } = await updataCategoryName({
      _id: updataCategoryInfo.key,
      categoryId: secondCategoryInfo.key ? secondCategoryInfo.key : '1',
      categoryName: updataCategoryInfo.sortName,
    })
    if (status) {
      message.error(msg)
    } else {
      message.success(msg)
      showSortLevel ? this.getAllCategory(secondCategoryInfo.key) : this.getAllCategory('1')
    }
  }

  cancelUpdataModal = () => {
    this.setState({ isShowUpdataModal: false })
  }

  changeCategory = (e) => {
    const updataCategoryInfo = { ...this.state.updataCategoryInfo }
    updataCategoryInfo.sortName = e.target.value
    this.setState({ updataCategoryInfo })
  }

  render() {
    const { columns, visible, isShowUpdataModal, firstCategorys, secondCategorys, showSortLevel, secondCategoryInfo, categoryId, updataCategoryInfo } = this.state
    return (
      <div>
        <Card title={!showSortLevel ? "一级分类" : (
          <span>
            <Button type='link' onClick={this.shiftFirstCategory}>一级分类</Button>
            <ArrowRightOutlined />{secondCategoryInfo.sortName}
          </span>
        )} extra={<Button type='primary' onClick={this.showModal}><PlusOutlined />添加分类</Button>}>
          <Table pagination={{ defaultPageSize: 3 }} columns={columns} dataSource={showSortLevel ? secondCategorys : firstCategorys} bordered />
        </Card>
        <Modal
          title="添加分类"
          visible={visible}
          onOk={this.confirmAdd}
          onCancel={this.cancelAdd}
        >
          <Form
            name="normal_login"
            onFinish={this.addCategory}
          >
            <Form.Item>
              <Select defaultValue={categoryId} style={{ width: '100%' }} onChange={this.selectCategory}>
                <Option value='1'>一级分类</Option>
                {firstCategorys.map(item => (<Option value={item.key} key={item.key}>{item.sortName}</Option>))}
              </Select>
            </Form.Item>
            <Form.Item
              name="categoryName"
              rules={[
                { required: true, message: '分类名称不能为空' }
              ]}
            >
              <Input type="text" placeholder="请输入分类名称" />
            </Form.Item>
            <Form.Item style={{ display: 'none' }}>
              <Button type='default' htmlType='submit' ref={this.btnDom} />
            </Form.Item>
          </Form>
        </Modal>
        <Modal
          title="添加分类"
          visible={isShowUpdataModal}
          onOk={this.okUpdataModal}
          onCancel={this.cancelUpdataModal}
        >
          <Input type="text" value={updataCategoryInfo.sortName} onChange={this.changeCategory} placeholder="请输入分类名称" />
        </Modal>
      </div>
    )
  }
}