import React from "react";
import SearchBar from "../containers/SearchBar";

import PriceList from "../containers/price_list";
class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <SearchBar />
        <PriceList />
      </div>
    );
  }
}

export default App;
