import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import { RenderPlanetList, RenderPlanetDetail } from "../../SwServices";

import "./PlanetPage.css";

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
          <RenderPlanetList onSelectedItem={this.onSelectedItem} />
        </div>
        <div className="col-md-6">
          <RenderPlanetDetail itemId={selectedItem} />
        </div>
      </div>
    );
  }
}

export default PeoplePage;
