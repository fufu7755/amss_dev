import React from 'react'
import ReactDOM from 'react-dom'
import {
  Carousel,
  Popover,
  Icon,
  Row,
  Col
} from 'antd'
import {
  NavLink
} from 'react-router-dom'
export default class PCHeader extends React.Component {

  render() {
    const contentPhone = (
      <div className="content-phone">
        <h4 className="m-b-10">我们随时准备为您提供帮助</h4>
        <Row className="m-b-10">
          <Col span={6}>
            电话
          </Col>
          <Col span={18}>
            <p>(65) 6468 3619</p>
            <p>(65) 9297 0850</p>
            <p>(86) 136 7006 7157</p>
          </Col>
        </Row>
        <Row className="m-b-10">
          <Col span={6}>
            传真
          </Col>
          <Col span={18}>
            <p>(65) 6408 3801</p>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            邮箱
          </Col>
          <Col span={18}>
            <p>amss@amssasia.com.cn</p>
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
      autoplay: true
    }
    return (
      <div className="header">
        <img className="logo" src="/src/images/logo.png" alt="logo" />
        <Carousel {...settings}>
          <div className="slide-item-2"><h1>{this.props.pageTitle}</h1></div>
          <div className="slide-item-3"><h1>{this.props.pageTitle}</h1></div>
          <div className="slide-item-4"><h1>{this.props.pageTitle}</h1></div>
          <div className="slide-item-5"><h1>{this.props.pageTitle}</h1></div>
          <div className="slide-item-6"><h1>{this.props.pageTitle}</h1></div>
        </Carousel>

        <div className="desktop-nav">
          <div className="container">
            <ul className="clearlist">
              <li><NavLink to='/about' activeClassName='is-active'>关于我们</NavLink></li>
              <li><NavLink to={`/amss1`} activeClassName='is-active'>AMSS-1</NavLink></li>
              <li><NavLink to={`/amss2`} activeClassName='is-active'>AMSS-2</NavLink></li>
              <li><NavLink to={`/amss3`} activeClassName='is-active'>AMSS-3</NavLink></li>
              <li><NavLink to={`/amss4`} activeClassName='is-active'>AMSS-4</NavLink></li>
              <li><NavLink to={`/amss5`} activeClassName='is-active'>AMSS-5</NavLink></li>
              <li><NavLink to={`/amss6`} activeClassName='is-active'>AMSS-6</NavLink></li>
              <li><NavLink to={`/contact`} activeClassName='is-active'>联系我们</NavLink></li>
            </ul>
          </div>
        </div>
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