import React from 'react'
import PCHeader from './pc_header'
import PCTopSection from './pc_top_section'
import PCTableSection from './pc_table_section'
import PCMonitorSection from './pc_monitor_section'
import PCFooter from './pc_footer'
import { DefaultPlayer as Video } from 'react-html5video'
import { Row, Col, Spin } from 'antd'

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
          <Row>
            <Col span={20} offset={2}>
              <div className="aboutContent">
                <p>晤桥亚洲是地产界兼具高度和深度的资产管理咨询团队。晤桥亚洲团队结合资本与地产双视角，为企业搭建和优化与国际接轨的资产管理、商业地产投资、开发和运营管理体系，并开发了国际先进的AMSS资产管理软件。晤桥亚洲长期为国内大型地产企业和金融机构服务。</p>
                <p>AMSS是行业中唯一兼具估值和项目回报测算的资产管理软件。AMSS具有智能化、标准化、即时化和平台化特点，可快速提升企业资产管理核心竞争力，实现大资产管理目标，让企业成为金融地产行业领导者。</p>
                <p>在AMSS资产管理软件基础上搭建的信息化管理平台将多个部门纳入回报测算与项目决策体系，打造大资产管理模式。AMSS快速的回报测算与分析能力可即时反映投资、设计、成本、开发、招商、经营环节每个决策对回报带来的影响，提高决策效率和质量。从决策到执行，AMSS生成开发、招商、经营等管理指标，对项目实施有效回报管理和风险管控。</p>
              </div>
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
            </Col>
          </Row>
        </div>
        <div className="aboutSection">
          <div className="container">
            <Row>
              <Col span={20} offset={2}>
                <h2>克服资产管理人才瓶颈，构建智能化资产管理体系</h2>
                <p>通过高速回报测算系统，实现多项目综合回报测算与估值，并从多维度分析资产包内各类资产收入、费用及回报等指标。风险审批与归档体系充分实现投资决策透明化，并将风险控制融入投资决策过程中。</p>
                <img src="../src/images/about-2.png" alt=""/>
              </Col>
            </Row>
          </div>
        </div>
        <PCTopSection></PCTopSection>
        <PCTableSection></PCTableSection>
        <PCFooter></PCFooter>
      </div>
    );
  };
}
