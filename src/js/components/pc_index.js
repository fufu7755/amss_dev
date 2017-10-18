import React from 'react'
import PCHeader from './pc_header'
import PCFooter from './pc_footer'
import ReactDOM from 'react-dom'
import Measure from 'react-measure'
import { Spin } from 'antd'

export default class PCIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: '0',
      height: '0',
      iWidth: '0',
      iHeight: '0',
      iTop: '0',
      iLeft: '0',
      loading: true
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions)
    this.setState({
      loading: false
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
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
        minHeight: this.state.height
      },
      homeContent: {
       top: this.state.height * 0.3
      },
      link1: {
        left: this.state.iLeft - 190,
        top: this.state.height * 0.3 + 30
      },
      link2: {
        left: this.state.iLeft + this.state.iWidth * 0.25 - 240,
        top: this.state.height * 0.3 + this.state.iWidth / 1200 * 448 * 0.5 + 110
      },
      link3: {
        left: this.state.iLeft + this.state.iWidth * 0.5 - 220,
        top: this.state.height * 0.3 + this.state.iWidth / 1200 * 448 + 30
      },
      link4: {
        left: this.state.iLeft + this.state.iWidth * 0.5 + 60,
        top: this.state.height * 0.3 + this.state.iWidth / 1200 * 448 + 30
      },
      link5: {
        left: this.state.iLeft + this.state.iWidth * 0.75 + 80,
        top: this.state.height * 0.3 + this.state.iWidth / 1200 * 448  * 0.5 + 110
      },
      link6: {
        left: this.state.iLeft + this.state.iWidth + 30,
        top: this.state.height * 0.3 + 30
      },
      logoSize: {
        width: this.state.width > 1200 ? "300px":"200px"
      }
    }
    return (
        <div className="homePage" style={styleComponent.homeBackground}>
  				<div className="home-logo">
  					<img src="/src/images/logo.png" alt="logo" style={styleComponent.logoSize} />
            <h1 class="hometitle">智能资管</h1>
  				</div>

  				<div className="home-content" style={styleComponent.homeContent}>
            <Measure
              offset
              client
              scroll
              onResize={(contentRect) => {
                this.setState({
                  iWidth: contentRect.offset.width,
                  iHeight: contentRect.offset.height,
                  iTop: contentRect.offset.top,
                  iLeft: contentRect.offset.left
                })
                console.log(this.state)

              }}
              >
              {({measureRef}) =>
                <img ref={measureRef}
                  src="/src/images/half.png"
                />
              }
            </Measure>
  				</div>
          <a href="/amss1" className="homeLinks link-1" style={styleComponent.link1}>
            <h3>AMSS-1</h3>
            <p className="p-t-5">投资回报</p>
            <p className="p-t-5">测算 + 估值</p>
          </a>
          <a href="/amss2" className="homeLinks link-2" style={styleComponent.link2}>
            <h3>AMSS-2</h3>
            <p>招商管理</p>
            <p className="addPlus">+</p>
            <p>回报再测算</p>
          </a>
          <a href="/amss3" className="homeLinks link-3" style={styleComponent.link3}>
            <h3>AMSS-3</h3>
            <p>经营预算管理</p>
            <p className="addPlus">+</p>
            <p>回报再测算</p>
          </a>
          <a href="/amss4" className="homeLinks link-4" style={styleComponent.link4}>
            <h3>AMSS-4</h3>
            <p>投资审批</p>
            <p className="addPlus">+</p>
            <p>风险控制</p>
          </a>
          <a href="/amss5" className="homeLinks link-5" style={styleComponent.link5}>
            <h3>AMSS-5</h3>
            <p>资产包管理</p>
            <p className="addPlus">+</p>
            <p>估值</p>
          </a>
          <a href="/amss6" className="homeLinks link-6" style={styleComponent.link6}>
            <h3>AMSS-6</h3>
            <p className="p-t-5">投资 + 退出</p>
            <p className="p-t-5">回报再测算</p>
          </a>
        </div>
    );
  };
}
