import React from 'react'
import {Row, Col} from 'antd'

export default class PCMonitorSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      monitorUrl: '/src/images/amss3/amss3-4.png'
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
            <Col span={20} offset={2}>
              <div className="monitorTitle">
                <h2>AMSS-3 经营预算管理+回报再测算软件</h2>
                <p>行业中唯一将经营预算管理与资产管理结合的软件。AMSS-3是市场上唯一实现通过项目投资回报，往年经营差异分析及行业对标三个维度，实现预算编制的软件。在预算编制或执行过程中，随时就预算目标或重大变更进行回报再测算，实现有效回报监控。</p>
                <h6>
                  <strong>该软件包含</strong>
                </h6>
                <div className="clearfix">
                  <ul className="listStyle">
                    <li>上年度经营差异分析</li>
                    <li>下年度收入目标与收入预算编制</li>
                    <li>下年度经营费用目标与费用预算编制</li>
                    <li>本年度预算执行监控与分析</li>
                    <li>资产规划与投资回报再测算</li>
                  </ul>
                </div>
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
                            onMouseOver={() => this.setState({monitorUrl: '/src/images/amss3/amss3-1.png'})}>
                          经营分析
                        </a>
                      </td>
                      <td>
                        <a className="monitorItem monitorItem2"
                          onMouseOver={() => this.setState({monitorUrl: '/src/images/amss3/amss3-2.png'})}>
                           收入预算
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a className="monitorItem monitorItem3"
                          onMouseOver={() => this.setState({monitorUrl: '/src/images/amss3/amss3-3.png'})}>
                          预算编制
                        </a>
                      </td>
                      <td>
                        <a className="monitorItem monitorItem4"
                          onMouseOver={() => this.setState({monitorUrl: '/src/images/amss3/amss3-4.png'})}>
                          预算审批
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
