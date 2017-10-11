import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Form, Input, Button, Row, Col, Spin, notification} from 'antd'
import axios from 'axios'
const FormItem = Form.Item
const {TextArea} = Input

const apiUrl = "http://localhost:3000"

const openNotification = (message, description) => {
  notification.config({
    placement: 'bottomRight'
  })
  notification.open({
    message: message,
    description: description
  });
};


class ContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      phone: '',
      title: '',
      msg: '',
      loading: false
    }
  }

  handleLoadingState(loading) {
    //Set loading flag
    this.setState({loading: loading});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.handleLoadingState(true)
        axios.post(`${apiUrl}/subscribe`, {
          email: values.email,
          name: values.name,
          phone: values.phone,
          title: values.title,
          msg: values.message
        })
        .then(res => {
          console.log(res)
          if (res.data.success) {
            //If the response from MailChimp is good...
            openNotification('提交成功!', '已成功提交您的信息!')
            this.setState({
              email: '',
              name: '',
              phone: '',
              title: '',
              msg: ''
            })
            this.props.form.resetFields()
            this.handleLoadingState(false)
          } else {
            //Handle the bad MailChimp response...
            openNotification('错误!', res.data.message.title + '请直接发邮件至：amss@amssasia.com.cn')
            this.handleLoadingState(false)
          }
        }).catch(error => {
          //This catch block returns an error if Node API returns an error
          openNotification('提交失败!', '请稍后再试或直接发邮件至：amss@amssasia.com.cn')
          this.handleLoadingState(false)
        });
      }
    });
  }

  render() {
    const {getFieldDecorator} = this.props.form
    return (
      <div>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Row>
            <Col span={12}>
              <FormItem>
                {getFieldDecorator('name', {
                  rules: [
                    {
                      required: true,
                      message: '请输入姓名!'
                    }
                  ]
                })(<Input className="form-control" placeholder="姓名"/>)}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem >
                {getFieldDecorator('email', {
                  rules: [
                    {
                      type: 'email',
                      message: '请输入正确的邮件地址！'
                    }, {
                      required: true,
                      message: '请输入邮件！'
                    }
                  ]
                })(<Input className="form-control" placeholder="邮件"/>)}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <FormItem>
                {getFieldDecorator('phone')(<Input type="tel" className="form-control" placeholder="电话"/>)}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem>
                {getFieldDecorator('title')(<Input className="form-control" placeholder="标题"/>)}
              </FormItem>
            </Col>
          </Row>
          <FormItem>
            {getFieldDecorator('message')(
              <TextArea className="form-control" rows={4} placeholder="信息"></TextArea>
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">发送信息</Button>
          </FormItem>
        </Form>
        {this.state.loading
          ? <Spin size="large"/>
          : null
        }
      </div>
    );
  };
}

export default ContactForm = Form.create()(ContactForm);
