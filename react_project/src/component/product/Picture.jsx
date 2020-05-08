import React from 'react';
import { Upload, Modal, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { getBase64 } from '../../utils/file.js'
import { removeImage } from '../../api/index'

export default class Picture extends React.Component {
  state = {
    previewVisible: false, // 控制预览图片的modal
    previewImage: '', // 预览图片的url
    previewTitle: '', // 预览modal的标题
    fileList: [],
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => { // 点击预览按键的处理函数
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
  };

  handleChange = async ({ file, fileList }) => { // 处理上传
    /*
      file图片信息对象: { 
        status:
          done 上传完成
          uploading 上传中
          removed 图片删除
      }
    */
    const { status, response } = file
    if (status === 'done') {
      // file 上传的图片信息
      file = fileList[fileList.length - 1]
      const { msg, data } = response
      message.success(msg)
      file.name = data.name
      file.url = data.url
    }
    else if (status === 'removed') {
      // file 删除的图片信息
      const { status, msg } = await removeImage({ name: file.name })
      status || message.success(msg)
    }

    this.setState({ fileList }); // 更新图片数组
  }

  render() {
    const { previewVisible, previewImage, fileList, previewTitle } = this.state;
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          action="/upload/image"
          listType="picture-card" // 图片显示样式
          fileList={fileList}
          name='image' // 图片上传后台时需要设置name属性,并且与后台对应
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 3 ? null : uploadButton}
        </Upload>
        <Modal
          visible={previewVisible}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}