import React from 'react'
import PCHeader from './pc_header'
import PCTopSection2 from './pc_top_section2'
import PCTableSection from './pc_table_section'
import PCMonitorSection3 from './pc_monitor_section3'
import PCFooter from './pc_footer'

export default class PCAssm3 extends React.Component {
  render() {
    return (
      <div className="amss3 main">
        <PCHeader pageTitle={"资产全周期回报管控体系"}></PCHeader>
        <PCTopSection2></PCTopSection2>
        <div className="even">
          <PCMonitorSection3></PCMonitorSection3>
        </div>
        <div className="pageSection">
          <div className="container">
            <img src="/src/images/amss2-3.png" alt=""/>
          </div>
        </div>
        <div className="pageSection even">
          <div className="container">
            <img src="/src/images/amss-5.png" alt=""/>
          </div>
        </div>
        <PCFooter></PCFooter>
      </div>
    );
  };
}
