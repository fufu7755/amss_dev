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
      <div className="MobileSection">
        <div className="MoblieMonitorTitle">
          <h2>AMSS-4 投资审批与风险控制系统</h2>
          <p>有效优化投资决策流程，通过线上多部门论证假设条件、审批与归档体系充分实现投资决策透明化，并将风险控制融入投资决策过程中。AMSS-4实现了线上投资决策平台化，可大大减少员工的时间与差旅成本。</p>
          <h6>
            <strong>该软件包含</strong>
          </h6>
          <div className="clearfix">
            <ul className="listStyle">
              <li>项目投资审核责权设置 </li>
              <li>部门间投资假设条件线上论证  </li>
              <li>投资假设条件线上核准与意见归档  </li>
              <li>项目投资回报逐级线上审批</li>
              <li>项目投资回报模型锁定与指标规划</li>
            </ul>
          </div>
        </div>
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
                  方案比较
                </a>
              </Col>
              <Col span={6}>
                <a className="monitorItem monitorItem2"
                  onMouseOver={() => this.setState({monitorUrl: '/src/images/amss1/amss1-2.png'})}>
                  回测预报
                </a>
              </Col>
              <Col span={6}>
                <a className="monitorItem monitorItem3"
                  onMouseOver={() => this.setState({monitorUrl: '/src/images/amss1/amss1-3.png'})}>
                  回报分析
                </a>
              </Col>
              <Col span={6}>
                <a className="monitorItem monitorItem4"
                  onMouseOver={() => this.setState({monitorUrl: '/src/images/amss1/amss1-4.png'})}>
                  租金测算
                </a>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  };
}
