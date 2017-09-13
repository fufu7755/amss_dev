import React from 'react'
import PCHeader from './pc_header'
import PCFooter from './pc_footer'
import ReactDOM from 'react-dom'
import Measure from 'react-measure'

export default class PCIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: '0',
      height: '0',
      iWidth: '0',
      iHeight: '0',
      iTop: '0',
      iLeft: '0'
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions)
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
        minHeight: this.state.height
      },
      homeContent: {
        maxHeight: this.state.width * 0.4
      },
      link1: {
        left: this.state.iLeft - 190,
        top: this.state.iTop + 30
      },
      link2: {
        left: this.state.iLeft + this.state.iWidth * 0.25 - 240,
        top: this.state.iTop + this.state.iHeight * 0.5 + 110
      },
      link3: {
        left: this.state.iLeft + this.state.iWidth * 0.5 - 200,
        top: this.state.iTop + this.state.iHeight + 30
      },
      link4: {
        left: this.state.iLeft + this.state.iWidth * 0.5 + 40,
        top: this.state.iTop + this.state.iHeight + 30
      },
      link5: {
        left: this.state.iLeft + this.state.iWidth * 0.75 + 80,
        top: this.state.iTop + this.state.iHeight  * 0.5 + 110
      },
      link6: {
        left: this.state.iLeft + this.state.iWidth + 30,
        top: this.state.iTop + 30
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

				<div className="home-content" >
          <Measure
            offset
            client
            onResize={(contentRect) => {
              console.log(contentRect.offset)
              this.setState({
                iWidth: contentRect.offset.width,
                iHeight: contentRect.offset.height,
                iTop: contentRect.offset.top,
                iLeft: contentRect.offset.left
              })
            }}>
            {({measureRef}) =>
              <img ref={measureRef}
                src="/src/images/half.png"
              />
            }
          </Measure>
				</div>
        <a href="/amss1" className="homeLinks link-1" style={styleComponent.link1}>
          <h3>AMSS-1</h3>
          <p>投资汇报</p>
          <p>测算 + 估值</p>
        </a>
        <a href="/amss2" className="homeLinks link-2" style={styleComponent.link2}>
          <h3>AMSS-2</h3>
          <p>招商管理</p>
          <p>汇报再测算</p>
        </a>
        <a href="/amss3" className="homeLinks link-3" style={styleComponent.link3}>
          <h3>AMSS-3</h3>
          <p>经营预算管理</p>
          <p>汇报再测算</p>
        </a>
        <a href="/amss4" className="homeLinks link-4" style={styleComponent.link4}>
          <h3>AMSS-4</h3>
          <p>投资审批</p>
          <p>风险控制</p>
        </a>
        <a href="/amss5" className="homeLinks link-5" style={styleComponent.link5}>
          <h3>AMSS-5</h3>
          <p>资产包管理</p>
          <p>估值</p>
        </a>
        <a href="/amss6" className="homeLinks link-6" style={styleComponent.link6}>
          <h3>AMSS-6</h3>
          <p>投资 + 退出</p>
          <p>回报再测算</p>
        </a>
      </div>
    );
  };
}
