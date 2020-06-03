import React, { Component } from "react";
import ItemList from "../../components/item-list";
import ItemDetails from "../../components/item-details";
import SwapiService from "../../services/swapi-service";
import Record from "../../components/Record";

import "./ShipPage.css";

class ShipPage extends Component {
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
    const {
      getAllStarships,
      getStarship,
      getStarshipImage,
    } = this.swapiService;
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onSelectedItem={this.onSelectedItem}
            getData={getAllStarships}
            renderItem={(item) => `${item.name}`}
          />
        </div>
        <div className="col-md-6">
          <ItemDetails
            selectedItem={this.state.selectedItem}
            getPerson={getStarship}
            getImage={getStarshipImage}
            getMessage={`Нужно выбрать корабль`}
          >
            <Record label={"Model"} field={"model"} />
            <Record label={"Manufacturer"} field={"manufacturer"} />
            <Record label={"Cost In Credits"} field={"costInCredits"} />
            <Record label={"Length"} field={"length"} />
            <Record label={"Crew"} field={"crew"} />
            <Record label={"Passengers"} field={"passengers"} />
            <Record label={"Cargo Capacity"} field={"cargoCapacity"} />
          </ItemDetails>
        </div>
      </div>
    );
  }
}

export default ShipPage;
