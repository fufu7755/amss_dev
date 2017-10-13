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
          <h2>AMSS-6 投资＋退出交易结构优化系统</h2>
          <p>从投资人或被投资人的两个交易对立方，独立分析项目不同阶段的股权结构变化、阶段性退出规划、双方取费与付费结构等因素所带来的不同收益结果，帮助投资人或被投资人做投资或退出的交易机构优化。AMSS-6 系统也可以通过锁定投资人或被投资人回报要求，进行项目投资或退出定价。AMSS-6 系统所具备的高度智能化和表单可视化功能为企业提高投资决策质量和速度，提高市场竞争力。</p>
          <h6>
            <strong>该软件包含</strong>
          </h6>
          <div className="clearfix">
            <ul className="listStyle">
              <li>投资人与被投资人收益对立自动化测算 </li>
              <li>投资人与被投资人收益敏感性自动化测算</li>
              <li>投资与退出交易结构优化</li>
              <li>项目投资回报锁定与交易定价</li>
              <li>项目投资回报模型锁定与指标规划</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
}
