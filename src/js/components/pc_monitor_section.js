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
            <h2>AMSS- 资产包管理与估值系统</h2>
            <p>通过高速回报测算系统，实现多项目综合回报测算与估值，并从多维度分析资产包内各类资产收入、费用及回报等指标。
风险审批与归档体系充分实现投资决策透明化，并将风险控制融入投资决策过程中。</p>
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
                      方案比较
                    </a>
                  </td>
                  <td>
                    <a className="monitorItem monitorItem2"
                      onMouseOver={() => this.setState({monitorUrl: '/src/images/amss1/amss1-2.png'})}>
                      回测预报
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a className="monitorItem monitorItem3"
                      onMouseOver={() => this.setState({monitorUrl: '/src/images/amss1/amss1-3.png'})}>
                      回报分析
                    </a>
                  </td>
                  <td>
                    <a className="monitorItem monitorItem4"
                      onMouseOver={() => this.setState({monitorUrl: '/src/images/amss1/amss1-4.png'})}>
                      租金测算
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