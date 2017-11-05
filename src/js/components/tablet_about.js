import React from 'react';
import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'
import PCTopSection from './pc_top_section'
import PCTableSection from './pc_table_section'
import { DefaultPlayer as Video } from 'react-html5video'
import {Row, Col} from 'antd'

export default class TabletAbout extends React.Component {
  render() {

    return (
      <div id="mobileAbout" className="mobileMain tabletMain about">
        <MobileHeader pageTitle={"关于我们"}></MobileHeader>
        <Row>
          <Col span={20} offset={2}>
            <div className="aboutContent">
              <p>晤桥亚洲是地产界兼具高度和深度的资产管理咨询团队。晤桥亚洲团队结合资本与地产双视角，为企业搭建和优化与国际接轨的资产管理、商业地产投资、开发和运营管理体系，并开发了国际先进的AMSS资产管理软件。晤桥亚洲长期为国内大型地产企业和金融机构服务。</p>
              <p>AMSS是行业中唯一兼具估值和项目回报测算的资产管理软件。AMSS具有智能化、标准化、即时化和平台化特点，可快速提升企业资产管理核心竞争力，实现大资产管理目标，让企业成为金融地产行业领导者。</p>
              <p>在AMSS资产管理软件基础上搭建的信息化管理平台将多个部门纳入回报测算与项目决策体系，打造大资产管理模式。AMSS快速的回报测算与分析能力可即时反映投资、设计、成本、开发、招商、经营环节每个决策对回报带来的影响，提高决策效率和质量。从决策到执行，AMSS生成开发、招商、经营等管理指标，对项目实施有效回报管理和风险管控。</p>
            </div>
          </Col>
        </Row>
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
        <div className="aboutSection even">
          <h2>克服资产管理人才瓶颈，构建智能化资产管理体系</h2>
          <img src="/src/images/about-2.png" alt=""/>
        </div>
        <PCTopSection></PCTopSection>
        <PCTableSection></PCTableSection>
        <MobileFooter></MobileFooter>
      </div>
    );
  };
}
