import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchPrices } from "../actions";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.fetchPrices(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <>
        <h1>{this.renderNames()}</h1>
      </>
    );
  }

  renderNames() {
    return (
      <div>
        <p>
          <a
            onClick={() => this.props.fetchPrices("MMM")}
            className="ui red label"
          >
            3M* (MMM)
          </a>

          <a
            onClick={() => this.props.fetchPrices("AXP")}
            className="ui red label"
          >
            American Express (AXP)
          </a>
          <a
            onClick={() => this.props.fetchPrices("AAPL")}
            className="ui red label"
          >
            Apple (AAPL)
          </a>
          <a
            onClick={() => this.props.fetchPrices("CAT")}
            className="ui red label"
          >
            Caterpillar (CAT)
          </a>
          <a
            onClick={() => this.props.fetchPrices("CVX")}
            className="ui red label"
          >
            Chevron(CVX)
          </a>
          <a
            onClick={() => this.props.fetchPrices("CSCO")}
            className="ui red label"
          >
            Cisco (CSCO)
          </a>
          <a
            onClick={() => this.props.fetchPrices("KO")}
            className="ui red label"
          >
            Coca-Cola (KO)
          </a>

          <a
            onClick={() => this.props.fetchPrices("XOM")}
            className="ui red label"
          >
            ExxonMobil (XOM)
          </a>
          <a
            onClick={() => this.props.fetchPrices("GE")}
            className="ui red label"
          >
            General Electric (GE)
          </a>
          <a
            onClick={() => this.props.fetchPrices("GS")}
            className="ui red label"
          >
            Goldman Sachs (GS)
          </a>
          <a
            onClick={() => this.props.fetchPrices("HD")}
            className="ui red label"
          >
            The Home Depot (HD)
          </a>
          <a
            onClick={() => this.props.fetchPrices("IBM")}
            className="ui red label"
          >
            IBM (IBM)
          </a>
          <a
            onClick={() => this.props.fetchPrices("INTC")}
            className="ui red label"
          >
            Intel (INTC)
          </a>
          <a
            onClick={() => this.props.fetchPrices("JNJ")}
            className="ui red label"
          >
            Johnson & Johnson (JNJ)
          </a>
          <a
            onClick={() => this.props.fetchPrices("JPM")}
            className="ui red label"
          >
            JPMorgan Chase (JPM)
          </a>
          <a
            onClick={() => this.props.fetchPrices("MCD")}
            className="ui red label"
          >
            McDonald's (MCD)
          </a>
          <a
            onClick={() => this.props.fetchPrices("MRK")}
            className="ui red label"
          >
            Merck (MRK)
          </a>
          <a
            onClick={() => this.props.fetchPrices("NKE")}
            className="ui red label"
          >
            Nike (NKE)
          </a>
          <a
            onClick={() => this.props.fetchPrices("MSFT")}
            className="ui red label"
          >
            Microsoft (MSFT)
          </a>
          <a
            onClick={() => this.props.fetchPrices("PFE")}
            className="ui red label"
          >
            Pfizer (PFE)
          </a>
          <a
            onClick={() => this.props.fetchPrices("PG")}
            className="ui red label"
          >
            Procter & Gamble (PG)
          </a>
          <a
            onClick={() => this.props.fetchPrices("TRV")}
            className="ui red label"
          >
            Travelers Companies, Inc. (TRV)
          </a>
          <a
            onClick={() => this.props.fetchPrices("UTX")}
            className="ui red label"
          >
            United Technologies (UTX)
          </a>
          <a
            onClick={() => this.props.fetchPrices("UNH")}
            className="ui red label"
          >
            UnitedHealth (UNH)
          </a>
          <a
            onClick={() => this.props.fetchPrices("VZ")}
            className="ui red label"
          >
            Verizon (VZ)
          </a>
          <a
            onClick={() => this.props.fetchPrices("V")}
            className="ui red label"
          >
            Visa (V)
          </a>
          <a
            onClick={() => this.props.fetchPrices("WMT")}
            className="ui red label"
          >
            Wal-Mart (WMT)
          </a>
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchPrices }, dispatch);
};

export default connect(mapDispatchToProps, { fetchPrices })(SearchBar);
