import React from 'react'

export default class MobileTopSection extends React.Component {

  render() {
    return (
      <div className="topSection">
        <div className="container">
          <ul className="topNav">
            <li>投资</li>
            <li>设计</li>
            <li>建设</li>
            <li>招商</li>
            <li>运营</li>
            <li>退出</li>
          </ul>

          <div className="row">
            <div className="col-4">
              <div className="icon-item">
                <img src="/src/images/icons/amss1-item.png" alt=""/>
              </div>
              <div className="icon-item">
                <img src="/src/images/icons/amss4-item.png" alt=""/>
              </div>
            </div>
            <div className="col-4">
              <div className="icon-item">
                <img src="/src/images/icons/amss1-item.png" alt=""/>
              </div>
            </div>
            <div className="col-4">
              <div className="icon-item">
                <img src="/src/images/icons/amss1-item.png" alt=""/>
              </div>
            </div>
            <div className="col-4">
              <div className="icon-item">
                <img src="/src/images/icons/amss2-item.png" alt=""/>
              </div>
            </div>
            <div className="col-4">
              <div className="icon-item">
                <img src="/src/images/icons/amss3-item.png" alt=""/>
              </div>
              <div className="icon-item">
                <img src="/src/images/icons/amss5-item.png" alt=""/>
              </div>
            </div>
            <div className="col-4">
              <div className="icon-item">
                <img src="/src/images/icons/amss6-item.png" alt=""/>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  };
}