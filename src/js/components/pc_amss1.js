import React from 'react'
import ReactDOM from 'react-dom'
import PCHeader from './pc_header'
import PCTableSection from './pc_table_section'
import PCMonitorSection from './pc_monitor_section'
import PCTopSection from './pc_top_section'
import PCFooter from './pc_footer'
import { Spin } from 'antd'
export default class PCAmss1 extends React.Component {
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
      <div className="amss1 main">
        <PCHeader pageTitle={"资产全周期回报管控体系"}></PCHeader>
        <PCTopSection></PCTopSection>
        <PCMonitorSection></PCMonitorSection>
        <PCFooter></PCFooter>
      </div>
    );
  };
}
