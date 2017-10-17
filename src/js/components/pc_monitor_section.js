import React from 'react'

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
          <div className="monitorTitle">
            <h2>AMSS-1回报测算软件</h2>
            <p>通过对购物中心、写字楼、酒店、销售物业、综合体各类物业的现金流预测、NOI静态回报率、IRR动态回报率测算，进行项目投资可行性分析。AMSS－1适用于项目投资、方案设计和建设等阶段。</p>
            <h6>
              <strong>该软件包含</strong>
            </h6>
            <div className="clearfix">
              <ul className="listStyle">
                <li>投资回报测算 </li>
                <li>资产估值 </li>
                <li>设计方案比较与优化 </li>
                <li>成本变化——回报再测算</li>
              </ul>
            </div>
          </div>
          <div className="monitorLeft" style={monitorUrl}>
            <img src="../src/images/tv.png" alt=""/>
          </div>
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
        </div>

      </div>
    );
  };
}
