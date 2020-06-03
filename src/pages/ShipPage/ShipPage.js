import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import { RenderShipList, RenderShipDetail } from "../../SwServices";

import "./ShipPage.css";

class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: null,
  };
  onSelectedItem = (id) => {
    this.setState({ selectedItem: id });
  };

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    const { selectedItem } = this.state;
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <RenderShipList onSelectedItem={this.onSelectedItem} />
        </div>
        <div className="col-md-6">
          <RenderShipDetail itemId={selectedItem} />
        </div>
      </div>
    );
  }
}

export default PeoplePage;
