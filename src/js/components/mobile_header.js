import React from 'react'
import {NavLink} from 'react-router-dom'
import {Icon, Modal, Carousel, Popover, Row, Col} from 'antd';

export default class MobileHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false
    }
  }

  setModalVisible(value) {
    this.setState({modalVisible: value})
  }

  login() {
    this.setModalVisible(true)
  }

  render() {
    const contentPhone = (
      <div className="content-phone">
        <h4 className="m-b-5">我们随时准备为您提供帮助</h4>
        <Row className="m-b-5">
          <Col span={4}>
            电话
          </Col>
          <Col span={20}>
            <p>(65) 6468 3619</p>
            <p>(65) 9297 0850</p>
            <p>(86) 136 7006 7157</p>
          </Col>
        </Row>
        <Row className="m-b-5">
          <Col span={4}>
            传真
          </Col>
          <Col span={20}>
            <p>(65) 6408 3801</p>
          </Col>
        </Row>
        <Row className="">
          <Col span={4}>
            邮箱
          </Col>
          <Col span={20}>
            <p><a href="mailto: amss@amssasia.com.cn">amss@amssasia.com.cn</a></p>
          </Col>
        </Row>
      </div>
    )
    const contentChat = (
      <div className="content-qrchat">
        <img src="/src/images/qrchat.png" alt=""/>
      </div>
    )
    const settings = {
      effect: "fade",
      arrows: true,
      autoplay: true,
      dots: false
    }

    return (
      <div id="mobileheader">
        <header>
          <Icon type="bars" onClick={this.login.bind(this)}/>
          <span>{this.props.pageTitle}</span>
          <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel={() => this.setModalVisible(false)} footer={null} width='100%' height='100%'>
            <div>
              <img className="mobileLogo" src="/src/images/mobile_logo.png" alt=""/>
              <div className="mobile-nav">
                <ul>
                  <li>
                    <NavLink to={`/about`} activeClassName='is-active'>关于我们</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/amss1`} activeClassName='is-active'>AMSS-1</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/amss2`} activeClassName='is-active'>AMSS-2</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/amss3`} activeClassName='is-active'>AMSS-3</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/amss4`} activeClassName='is-active'>AMSS-4</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/amss5`} activeClassName='is-active'>AMSS-5</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/amss6`} activeClassName='is-active'>AMSS-6</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/contact`} activeClassName='is-active'>联系我们</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </Modal>
          <NavLink to={`/`}><Icon type="home"/></NavLink>
        </header>

        <section className="mobileTop">
          <Carousel {...settings}>
            <div className="slide-item-1"><h1>资产全周期回报管控体系</h1></div>
            <div className="slide-item-2"><h1>资产全周期回报管控体系</h1></div>
            <div className="slide-item-3"><h1>资产全周期回报管控体系</h1></div>
            <div className="slide-item-4"><h1>资产全周期回报管控体系</h1></div>
            <div className="slide-item-5"><h1>资产全周期回报管控体系</h1></div>
            <div className="slide-item-6"><h1>资产全周期回报管控体系</h1></div>
            <div className="slide-item-7"><h1>资产全周期回报管控体系</h1></div>
          </Carousel>
        </section>

        <div className="fixed-box">
          <div className="box-item-phone">
            <Popover placement="leftBottom" content={contentPhone}>
             <Icon type="phone"></Icon>
            </Popover>
          </div>
          <hr/>
          <div className="box-item-qrcode">
            <Popover placement="leftTop" content={contentChat}>
             <Icon type="qrcode"></Icon>
            </Popover>
          </div>
        </div>
      </div>
    );
  };
}
