import React from 'react'
import {
  NavLink
} from 'react-router-dom'
export default class PCHeader extends React.Component {

  render() {
    return (
      <div>
        <header>
          <h1>{this.props.pageTitle}</h1>
        </header>
        <div className="desktop-nav">
          <ul className="clearlist">
            <li><NavLink to='/about' activeClassName='is-active'>关于我们</NavLink></li>
            <li><NavLink to={`/amss1`} activeClassName='is-active'>AMSS-1</NavLink></li>
            <li><NavLink to={`/amss2`} activeClassName='is-active'>AMSS-2</NavLink></li>
            <li><NavLink to={`/amss3`} activeClassName='is-active'>AMSS-3</NavLink></li>
            <li><NavLink to={`/amss4`} activeClassName='is-active'>AMSS-4</NavLink></li>
            <li><NavLink to={`/amss5`} activeClassName='is-active'>AMSS-5</NavLink></li>
            <li><NavLink to={`/amss6`} activeClassName='is-active'>AMSS-6</NavLink></li>
            <li><NavLink to={`/contact`} activeClassName='is-active'>联系我们</NavLink></li>
          </ul>
        </div>
      </div>
    );
  };
}