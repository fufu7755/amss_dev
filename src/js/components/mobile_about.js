import React from 'react';
import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'
import PCTopSection from './pc_top_section'
import PCTableSection from './pc_table_section'
import { DefaultPlayer as Video } from 'react-html5video'

export default class MobileAbout extends React.Component {
  render() {

    return (
      <div id="mobileAbout" className="mobileMain about">
        <MobileHeader pageTitle={"关于我们"}></MobileHeader>
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
