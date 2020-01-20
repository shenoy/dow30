import React from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";

class PriceList extends React.Component {
  renderPrices(data) {
    const high = data.stock_prices.map(x => x.high).reverse();

    return (
      <tr>
        <td>
          <Chart data={high} color="blue" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="ui celled table">
        <thead>
          <tr>
            <th>DOW 30 Stock Prices for the last 100 days</th>
          </tr>
        </thead>
        <tbody>{this.props.prices.map(this.renderPrices)}</tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ prices }) => {
  return { prices };
};

export default connect(mapStateToProps)(PriceList);
