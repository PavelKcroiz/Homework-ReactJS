import React, { Component } from "react";
import ItemList from "../../components/item-list";
import ItemDetails from "../../components/item-details";
import SwapiService from "../../services/swapi-service";
import Record from "../../components/Record";

import "./PeoplePage.css";

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
    const { getAllPeople, getPerson, getPersonImage } = this.swapiService;
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onSelectedItem={this.onSelectedItem}
            getData={getAllPeople}
            renderItem={(item) => `${item.name}`}
          />
        </div>
        <div className="col-md-6">
          <ItemDetails
            selectedItem={this.state.selectedItem}
            getPerson={getPerson}
            getImage={getPersonImage}
            getMessage={`Нужно выбрать персонажа`}
          >
            <Record label={"Gender"} field={"gender"} />
            <Record label={"Birth Year"} field={"birthYear"} />
            <Record label={"Eye Color"} field={"eyeColor"} />
          </ItemDetails>
        </div>
      </div>
    );
  }
}

export default PeoplePage;
