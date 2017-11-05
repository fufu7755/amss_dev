import React from 'react'
import {
  Row,
  Col
} from 'antd'

export default class PCMonitorSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      monitorUrl: '/src/images/amss1/amss1-1.png'
    };
  }
  render() {
    const monitorUrl = {
      backgroundImage: "url(" + this.state.monitorUrl + ")"
    }
    return (
      <div className="MobileSection even">
        <Row>
          <Col span={20} offset={2}>
            <div className="MoblieMonitorTitle">
              <h2>AMSS-1回报测算软件</h2>
              <h4>与国际接轨 与资本市场对接</h4>
              <p>通过对购物中心、写字楼、酒店、销售物业、综合体各类物业的现金流预测、NOI静态回报率、IRR动态回报率测算，进行项目投资可行性分析。AMSS－1适用于项目投资、方案设计和建设等阶段。</p>
              <Row>
                <Col span={12} offset={6}>
                  
                  <div className="clearfix">
                    <ul className="listStyle">
                      <li>投资回报测算 </li>
                      <li>资产估值 </li>
                      <li>设计方案比较与优化 </li>
                      <li>成本变化—回报再测算</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <div>
          <div className="MoblieMonitorSection" style={monitorUrl}>
            <img src="../src/images/tv.png" alt=""/>
          </div>
        </div>
        <div>
          <div className="MoblieMonitorSection">
            <Row>
              <Col span={6}>
                <a className="monitorItem monitorItem1"
                    onMouseOver={() => this.setState({monitorUrl: '/src/images/amss1/amss1-1.png'})}>
                  招商预算编制
                </a>
              </Col>
              <Col span={6}>
                <a className="monitorItem monitorItem2"
                  onMouseOver={() => this.setState({monitorUrl: '/src/images/amss1/amss1-2.png'})}>
                  招商计划编制
                </a>
              </Col>
              <Col span={6}>
                <a className="monitorItem monitorItem3"
                  onMouseOver={() => this.setState({monitorUrl: '/src/images/amss1/amss1-3.png'})}>
                  招商执行监制
                </a>
              </Col>
              <Col span={6}>
                <a className="monitorItem monitorItem4"
                  onMouseOver={() => this.setState({monitorUrl: '/src/images/amss1/amss1-4.png'})}>
                  回报再测算
                </a>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  };
}
