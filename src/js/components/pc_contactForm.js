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
        this.sendEmail.bind(this);
      }
    });
  }

  sendEmail() {
    let stmpTransport = nodemailer.createTransport("smtp", {
      host: "stmp.gmail.com",
      secureConnection: false,
      port: 25,
      auth: {
        user: "fufu7755@gmail.com",
        pass: "19770505"
      }
    })

    let mailOptions = {
      from: "Afei <fufu7755@gmail.com>",
      to: "516751551@qq.com",
      subject: "Contact Message",
      html: "ok"
    }

    stmpTransport.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
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
                  rules: [{required: true, message: '请输入姓名!' }],
                })(
                  <Input className="form-control" placeholder="姓名" />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem >
                {getFieldDecorator('email', {
                  rules: [
                    {
                      type: 'email',
                      message: '请输入正确的邮件地址！'
                    },
                    {
                      required: true,
                      message: '请输入邮件！'
                    }
                  ]
                })(<Input className="form-control" placeholder="邮件" />)}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <FormItem>
                {getFieldDecorator('phone', {
                  rules: [{ len: 11, message: '请输入正确的电话号码！' }],
                })(
                  <Input type="tel" className="form-control" placeholder="电话" />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem>
                {getFieldDecorator('title')
                (
                  <Input className="form-control" placeholder="标题" />
                )}
              </FormItem>
            </Col>
          </Row>

          <FormItem>

            {getFieldDecorator('message')
            (
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
