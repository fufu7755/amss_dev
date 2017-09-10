import React from 'react'

export default class PCTableSection extends React.Component {

  render() {
    return (
      <div className="tableSection">
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>
                  <h4>AMSS-1</h4>
                  <p>投资回报测算+估值</p>
                </th>
                <th>
                  <h4>AMSS-2</h4>
                  <p>招商管理+回报再测算</p>
                </th>
                <th>
                  <h4>AMSS-3</h4>
                  <p>经营预算管理+回报再测算</p>
                </th>
                <th>
                  <h4>AMSS-4</h4>
                  <p>投资审批+风险控制</p>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <img src="/src/images/shop.png" alt=""/>
                  <p>购物中心</p>
                </td>
                <td>
                  <img src="/src/images/shop.png" alt=""/>
                  <p>购物中心</p>
                </td>
                <td>
                  <img src="/src/images/shop.png" alt=""/>
                  <p>购物中心</p>
                </td>
                <td>
                  <img src="/src/images/shop.png" alt=""/>
                  <p>购物中心</p>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="/src/images/building.png" alt=""/>
                  <p>写字楼</p>
                </td>
                <td>
                  <img src="/src/images/building.png" alt=""/>
                  <p>写字楼</p>
                </td>
                <td>
                  <img src="/src/images/building.png" alt=""/>
                  <p>写字楼</p>
                </td>
                <td>
                  <img src="/src/images/building.png" alt=""/>
                  <p>写字楼</p>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="/src/images/hotel.png" alt=""/>
                  <p>酒店公寓</p>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                  <img src="/src/images/hotel.png" alt=""/>
                  <p>酒店公寓</p>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="/src/images/cash.png" alt=""/>
                  <p>物业销售</p>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                  <img src="/src/images/cash.png" alt=""/>
                  <p>物业销售</p>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="/src/images/all.png" alt=""/>
                  <p>综合体</p>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>
    );
  };
}