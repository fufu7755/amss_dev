import React from 'react'
import PCHeader from './pc_header'
import PCFooter from './pc_footer'
import {Row, Col} from 'antd'
import ContactForm from './pc_contactForm'

export default class PCContact extends React.Component {

  render() {

    return (
      <div className="contact main">
        <PCHeader pageTitle={"资产全周期回报管控体系"}></PCHeader>
        <div className="pageSection">
          <div className="container">
            <Row>
              <Col span={20} offset={2}>
                <div className="contactForm">
                  <div className="row">
                    <div className="col-8">
                      <Row className="m-t-10">
                        <Col span={4} className="add_img">
                          <img src="/src/images/hand-click.png" alt=""/>
                        </Col>
                        <Col span={16}>
                          <h4><a target="_blank" href="http://www.bridge5asia.com">www.bridge5asia.com</a></h4>
                        </Col>
                      </Row>
                      <Row className="m-t-6">
                      <Col span={4}>
                        地址:
                      </Col>
                       <Col span={16}>
                         <p>One Fullerton, 1 Fullerton Road, #02-01, Singapore 049213</p>
                       </Col>
                      </Row>
                      <Row className="m-t-6">
                        <Col span={4}>
                          电话:
                        </Col>
                        <Col span={16}>
                          <p>(65) 6468 3619</p>
                          <p>(65) 9297 0850 </p>
                          <p>(86) 136 7006 7157</p>
                        </Col>
                      </Row>
                      <Row className="m-t-6">
                        <Col span={4}>
                          传真:
                        </Col>
                        <Col span={16}>
                          <p>(65) 6408 3801 </p>
                        </Col>
                      </Row>
                      <Row className="m-t-6">
                        <Col span={4}>
                          邮箱:
                        </Col>
                        <Col span={16}>
                          <p>amss@amssasia.com.cn </p>
                        </Col>
                      </Row>
                    </div>
                    <div className="col-16">
                      <ContactForm></ContactForm>
                    </div>
                  </div>

                  <div className="qrchat-img">
                    <img src="/src/images/qrchat.png" alt=""/>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

        </div>
        <PCFooter></PCFooter>
      </div>
    );
  };
}
