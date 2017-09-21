import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom'

import PCIndex from './components/pc_index'
import PCAmss1 from './components/pc_amss1'
import PCAmss2 from './components/pc_amss2'
import PCAmss3 from './components/pc_amss3'
import PCAmss4 from './components/pc_amss4'
import PCAmss5 from './components/pc_amss5'
import PCAmss6 from './components/pc_amss6'
import PCAbout from './components/pc_about'
import PCContact from './components/pc_contact'

import MobileIndex from './components/mobile_index';
import MobileAbout from './components/mobile_about';
import MobileAmss1 from './components/mobile_amss1'
import MobileAmss2 from './components/mobile_amss2'
import MobileAmss3 from './components/mobile_amss3'
import MobileAmss4 from './components/mobile_amss4'
import MobileAmss5 from './components/mobile_amss5'
import MobileAmss6 from './components/mobile_amss6'
import MobileContact from './components/mobile_contact'

import TabletIndex from './components/tablet_index';
import TabletAbout from './components/tablet_about';
import TabletAmss1 from './components/tablet_amss1';
import TabletAmss2 from './components/tablet_amss2';
import TabletAmss3 from './components/tablet_amss3';
import TabletAmss4 from './components/tablet_amss4';
import TabletAmss5 from './components/tablet_amss5';
import TabletAmss6 from './components/tablet_amss6';
import TabletContact from './components/tablet_contact'

import MediaQuery from 'react-responsive';

export default class Root extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery query="(min-width: 1224px)">
          <BrowserRouter>
            <Switch>
              <Route exact path = "/" component={PCIndex}></Route>
              <Route path = "/about" component={PCAbout}></Route>
              <Route path = "/amss1" component={PCAmss1}></Route>
              <Route path = "/amss2" component={PCAmss2}></Route>
              <Route path = "/amss3" component={PCAmss3}></Route>
              <Route path = "/amss4" component={PCAmss4}></Route>
              <Route path = "/amss5" component={PCAmss5}></Route>
              <Route path = "/amss6" component={PCAmss6}></Route>
              <Route path = "/contact" component={PCContact}></Route>
            </Switch>
          </BrowserRouter>
        </MediaQuery>
        <MediaQuery query="(max-width: 1223px) and (min-width: 768px)" >
          <BrowserRouter>
            <Switch>
              <Route exact path = "/" component={TabletIndex}></Route>
              <Route path = "/about" component={TabletAbout}></Route>
              <Route path = "/amss1" component={TabletAmss1}></Route>
              <Route path = "/amss2" component={TabletAmss2}></Route>
              <Route path = "/amss3" component={TabletAmss3}></Route>
              <Route path = "/amss4" component={TabletAmss4}></Route>
              <Route path = "/amss5" component={TabletAmss5}></Route>
              <Route path = "/amss6" component={TabletAmss6}></Route>
              <Route path = "/contact" component={TabletContact}></Route>
            </Switch>
          </BrowserRouter>
        </MediaQuery>
        <MediaQuery query="(max-width: 767px)" >
          <BrowserRouter>
            <Switch>
              <Route exact path = "/" component={MobileIndex}></Route>
              <Route path = "/about" component={MobileAbout}></Route>
              <Route path = "/amss1" component={MobileAmss1}></Route>
              <Route path = "/amss2" component={MobileAmss2}></Route>
              <Route path = "/amss3" component={MobileAmss3}></Route>
              <Route path = "/amss4" component={MobileAmss4}></Route>
              <Route path = "/amss5" component={MobileAmss5}></Route>
              <Route path = "/amss6" component={MobileAmss6}></Route>
              <Route path = "/contact" component={MobileContact}></Route>
            </Switch>
          </BrowserRouter>
        </MediaQuery>
      </div>
    );
  };
}

ReactDOM.render(<Root/>, document.getElementById('mainContainer'));
