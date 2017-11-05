import React from 'react'
import {
  Row,
  Col
} from 'antd'

export default class PCMonitorSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      monitorUrl: '/src/images/amss2/amss2-1.png'
    };
  }
  render() {
    const monitorUrl = {
      backgroundImage: "url(" + this.state.monitorUrl + ")"
    }
    return (
      <div className="MobileSection">
        <Row>
          <Col span={20} offset={2}>
            <div className="MoblieMonitorTitle">
              <h2>AMSS-2 招商管理＋回报再测算软件</h2>
              <p>行业中唯一将招商管理与资产管理结合的软件。AMSS－2通过紧密与项目投资回报挂钩，快速进行招商预算与计划自动编制。在招商执行过程中，随时就重大招商变更或招商阶段性成果进行回报再测算，实现有效回报监控。</p>
              <Row>
                <Col span={8} offset={8}>
                  <ul className="listStyle">
                    <li>招商预算编制</li>
                    <li>招商计划编制</li>
                    <li>招商执行编制</li>
                    <li>回报再测算</li>
                  </ul>
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
                    onMouseOver={() => this.setState({monitorUrl: '/src/images/amss2/amss2-1.png'})}>
                  预算编制
                </a>
              </Col>
              <Col span={6}>
                <a className="monitorItem monitorItem2"
                  onMouseOver={() => this.setState({monitorUrl: '/src/images/amss2/amss2-2.png'})}>
                  分析报告
                </a>
              </Col>
              <Col span={6}>
                <a className="monitorItem monitorItem3"
                  onMouseOver={() => this.setState({monitorUrl: '/src/images/amss2/amss2-3.png'})}>
                  招商计划
                </a>
              </Col>
              <Col span={6}>
                <a className="monitorItem monitorItem4"
                  onMouseOver={() => this.setState({monitorUrl: '/src/images/amss2/amss2-4.png'})}>
                  招商预算
                </a>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  };
}
