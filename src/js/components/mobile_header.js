import React from 'react'
import {
  Row,
  Col
} from 'antd'
import {
  NavLink
} from 'react-router-dom'
import {
  Icon,
  Modal
} from 'antd';

export default class MobileHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false
    }
  }

  setModalVisible(value) {
    this.setState({
      modalVisible: value
    })
  }

  login() {
    this.setModalVisible(true)
  }

  render() {
    return (
      <div id="mobileheader">
                <header>
                    <Icon type="bars" onClick={this.login.bind(this)}/>
                    <span>{this.props.pageTitle}</span>
                    <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible}
                           onCancel={()=>this.setModalVisible(false)}
                           footer={null}
                           width = '100%'
                           height = '100%'>
                    <div>
                      <img className="mobileLogo" src="/src/images/mobile_logo.png" alt=""/>
                      <div className="mobile-nav">
                        <ul>
                          <li><NavLink to={`/about`} activeClassName='is-active'>关于我们</NavLink></li>
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
                    </Modal>
                    <NavLink to={`/`}><Icon type="home" /></NavLink>
                </header>
                <section className="mobileTop">
                  <h1>
                    资产全周期回报管控体系
                  </h1>
                </section>
            </div>
    );
  };
}