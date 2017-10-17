import React from 'react'
import PCHeader from './pc_header'
import PCTopSection from './pc_top_section'
import PCTableSection from './pc_table_section'
import PCMonitorSection from './pc_monitor_section'
import PCFooter from './pc_footer'
import { DefaultPlayer as Video } from 'react-html5video'
import { Spin } from 'antd'

export default class PCAbout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }
  componentDidMount() {
    this.setState({
      loading: false
    })
  }
  render() {
    return (
      <div className="about main">
        <PCHeader pageTitle={"资产全周期回报管控体系"}></PCHeader>
        <div className="container">
          <div className="aboutVideo">
            <Video loop
                controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                poster="/src/images/video-cover.jpg"
                onCanPlayThrough={() => {
                    // Do stuff
                }}>
                <source src="/src/images/amss_03.mp4" type="video/mp4" />
            </Video>
          </div>
        </div>
        <div className="aboutSection">
          <div className="container">
            <h2>克服资产管理人才瓶颈，构建智能化资产管理体系</h2>
            <p>通过高速回报测算系统，实现多项目综合回报测算与估值，并从多维度分析资产包内各类资产收入、费用及回报等指标。风险审批与归档体系充分实现投资决策透明化，并将风险控制融入投资决策过程中。</p>
            <div className="p-50">
              <img src="../src/images/about-2.png" alt=""/>
            </div>
          </div>
        </div>
        <PCTopSection></PCTopSection>
        <PCTableSection></PCTableSection>
        <PCFooter></PCFooter>
      </div>
    );
  };
}
