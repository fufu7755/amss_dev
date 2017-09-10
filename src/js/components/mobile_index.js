import React from 'react';
import {
  Row,
  Col
} from 'antd'

export default class MobileIndex extends React.Component {
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
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true
    }

    const styleComponent = {
      homeBackground: {

        //positon: "relative",
        //width: this.state.width,
        minHeight: this.state.height
      }
    }
    return (
      <div id="mobileHome" style={styleComponent.homeBackground}>
              <div className="mobileLogo">
                <img class="mobileLogo" src="/src/images/logo.png" alt="" />

                <h1 className="hometitle">智能资管</h1>
              </div>

              <Row>


                <Col span={12}>
                  <div>
                    <a href="/amss1" className="homeLinks">
                      <h3>AMSS-1</h3>
                      <p>投资回报</p>
                      <p>测算 + 估值</p>
                    </a>
                  </div>
                  <div>
                    <a href="/amss3" className="homeLinks">
                      <h3>AMSS-3</h3>
                      <p>经营预算管理</p>
                      <p>回报再测算</p>
                    </a>
                  </div>
                  <div>
                    <a href="/amss5" className="homeLinks">
                      <h3>AMSS-5</h3>
                      <p>资产包管理</p>
                      <p>估值</p>
                    </a>
                  </div>
                </Col>

                <Col span={12}>
                  <div>
                    <a href="/amss2" className="homeLinks">
                      <h3>AMSS-2</h3>
                      <p>招商管理</p>
                      <p>回报再测算</p>
                    </a>
                  </div>
                  <div>
                    <a href="/amss4" className="homeLinks">
                      <h3>AMSS-4</h3>
                      <p>投资审批</p>
                      <p>风险控制</p>
                    </a>
                  </div>
                  <div>
                    <a href="/amss6" className="homeLinks">
                      <h3>AMSS-6</h3>
                      <p>投资 + 退出</p>
                      <p>回报再测算</p>
                    </a>
                  </div>
                </Col>
              </Row>

            </div>
    );
  };
}