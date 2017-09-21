import React from 'react'
import ReactDOM from 'react-dom'
import {Form, Input, Button, Row, Col} from 'antd'

const FormItem = Form.Item
const {TextArea} = Input

class ContactForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const {getFieldDecorator} = this.props.form
    return (
      <div>
        <Form onSubmit={this.handleSubmit.bind(this)}>
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

          <FormItem>
            {getFieldDecorator('phone', {
              rules: [
                {
                  len: 11,
                  message: '请输入正确的电话号码！'
                }
              ]
            })(<Input type="tel" className="form-control" placeholder="电话"/>)}
          </FormItem>

          <FormItem>
            {getFieldDecorator('title')(<Input className="form-control" placeholder="标题"/>)}
          </FormItem>

          <FormItem>
            {getFieldDecorator('message')(
              <TextArea className="form-control" rows={4} placeholder="信息"></TextArea>
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">发送信息</Button>
          </FormItem>
        </Form>
      </div>
    );
  };
}

export default ContactForm = Form.create()(ContactForm);
