import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer'

export default class PCIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: '0',
      height: '0'
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }
  render() {
    const styleComponent = {
      homeBackground: {
        width: this.state.width,
        height: this.state.height
      }
    }
    return (
      <div className="homePage" style={styleComponent.homeBackground}>
				<div className="home-logo">
					<img src="/src/images/logo.png" alt="logo"/>
					<h1 className="hometitle">智能资管</h1>
				</div>

				<div className="home-content">

				</div>

        <a href="amss1" className="homeLinks link-1">
          <h3>AMSS-1</h3>
          <p>投资汇报</p>
          <p>测算 + 估值</p>
        </a>

        <a href="amss2" className="homeLinks link-2">
          <h3>AMSS-2</h3>
          <p>招商管理</p>
          <p>汇报再测算</p>
        </a>

        <a href="/amss3" className="homeLinks link-3">
          <h3>AMSS-3</h3>
          <p>经营预算管理</p>
          <p>汇报再测算</p>
        </a>

        <a href="/amss4" className="homeLinks link-4">
          <h3>AMSS-4</h3>
          <p>投资审批</p>
          <p>风险控制</p>
        </a>

        <a href="/amss5" className="homeLinks link-5">
          <h3>AMSS-5</h3>
          <p>资产包管理</p>
          <p>估值</p>
        </a>

        <a href="/amss6" className="homeLinks link-6">
          <h3>AMSS-6</h3>
          <p>投资 + 退出</p>
          <p>回报再测算</p>
        </a>

      </div>
    );
  };
}