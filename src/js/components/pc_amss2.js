import React from 'react'
import PCHeader from './pc_header'
import PCTopSection2 from './pc_top_section2'
import PCTableSection from './pc_table_section'
import PCMonitorSection2 from './pc_monitor_section2'
import PCFooter from './pc_footer'
export default class PCAssm2 extends React.Component {

  render() {
    return (
      <div className="amss2 main">
        <PCHeader pageTitle={"资产全周期回报管控体系"}></PCHeader>
        <PCTopSection2></PCTopSection2>
        <div className="even">
          <PCMonitorSection2></PCMonitorSection2>
        </div>
        <div className="pageSection">
          <div className="container">
            <div className="p-50">
              <img src="/src/images/amss2-3.png" alt=""/>
            </div>
          </div>
        </div>
        <div className="pageSection even">
          <div className="container">
            <div className="p-50">
              <img src="/src/images/amss2-4.png" alt=""/>
            </div>
          </div>
        </div>
        <PCFooter></PCFooter>
      </div>
    );
  };
}
