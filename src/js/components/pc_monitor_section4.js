import React from 'react'
import {Row, Col} from 'antd'

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
      <div className="monitorSection">
        <div className="container">
          <Row>
            <Col span={24}>
              <div className="monitorTitle">
                <h2>AMSS-4 投资审批与风险控制系统</h2>
                <Row>
                  <Col span={14} offset={2}>
                    <Row>
                      <Col span={16} offset={4}>
                        <p>有效优化投资决策流程，通过线上多部门论证假设条件、审批与归档体系充分实现投资决策透明化，并将风险控制融入投资决策过程中。AMSS-4实现了线上投资决策平台化，可大大减少员工的时间与差旅成本。</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={8}>
                    <Row>
                      <Col span={16} offset={4}>
                        <ul className="listStyle">
                          <li>项目投资审核责权设置 </li>
                          <li>部门间投资假设条件线上论证  </li>
                          <li>投资假设条件线上核准与意见归档  </li>
                          <li>项目投资回报逐级线上审批</li>
                          <li>项目投资回报模型锁定与指标规划</li>
                        </ul>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={14} offset={2}>
              <div className="monitorLeft" style={monitorUrl}>
                <img src="../src/images/tv.png" alt=""/>
              </div>
            </Col>
            <Col span={8}>
              <div className="monitorRight">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <a className="monitorItem monitorItem1"
                            onMouseOver={() => this.setState({monitorUrl: '/src/images/amss1/amss1-1.png'})}>
                          招商预算编制
                        </a>
                      </td>
                      <td>
                        <a className="monitorItem monitorItem2"
                          onMouseOver={() => this.setState({monitorUrl: '/src/images/amss1/amss1-2.png'})}>
                          招商计划编制
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a className="monitorItem monitorItem3"
                          onMouseOver={() => this.setState({monitorUrl: '/src/images/amss1/amss1-3.png'})}>
                          招商执行监制
                        </a>
                      </td>
                      <td>
                        <a className="monitorItem monitorItem4"
                          onMouseOver={() => this.setState({monitorUrl: '/src/images/amss1/amss1-4.png'})}>
                          回报再测算
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  };
}
