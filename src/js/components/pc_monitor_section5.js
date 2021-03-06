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
      <div className="monitorSection even">
        <div className="container">
          <Row>
            <Col span={20} offset={2}>
              <div className="monitorTitle">
                <Row>
                  <Col span={14}>
                    <h2>AMSS-5 资产包管理与估值系统</h2>
                    <p>运用软件行业最高强度计算语言所开发的回报测算系统，实现了资产包多项目综合回报测算与估值，并可从资产类型、区域分布、持有周期、股权结构等多维度分析各类资产的收入、费用、现金流变化趋势与回报贡献等指标，并自动生成系列分析表单。AMSS-5以高性能测算体系为投资者、资产管理人提供快速回报、估值结果及资产管理决策依据。</p>
                  </Col>
                  <Col span={10} className="text-center">
                    <ul className="listStyle listStyle5">
                      <li>资产包综合回报测算与估值 </li>
                      <li>资产包多维度回报分析  </li>
                      <li>资产包多维度收入、费用及现金流变趋势与分析  </li>
                      <li>项目投资回报模型锁定与指标规划</li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  };
}
