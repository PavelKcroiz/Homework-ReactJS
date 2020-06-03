import React from "react";
import { withData, withChildFunction } from "../hoc";
import ItemList from "../components/item-list";
import ItemDetails from "../components/item-details";
import Record from "../components/Record";
import SwapiService from "../services/swapi-service";
import { WithConnect } from "../hoc";

const { getAllPeople, getAllPlanets, getAllStarships } = new SwapiService();

const renderName = (item) => `${item.name}`;

const RenderPersonaList = withData(
  withChildFunction(ItemList, renderName),
  getAllPeople
);

const RenderPlanetList = withData(
  withChildFunction(ItemList, renderName),
  getAllPlanets
);

const RenderShipList = withData(
  withChildFunction(ItemList, renderName),
  getAllStarships
);

const renderPersonaDetail = ({ itemId, swapiService }) => {
  const { getPerson, getPersonImage } = swapiService;

  return (
    <ItemDetails
      selectedItem={itemId}
      getPerson={getPerson}
      getImage={getPersonImage}
      getMessage={`Нужно выбрать персонажа`}
    >
      <Record label={"Gender"} field={"gender"} />
      <Record label={"Birth Year"} field={"birthYear"} />
      <Record label={"Eye Color"} field={"eyeColor"} />
    </ItemDetails>
  );
};

const RenderPersonaDetail = WithConnect(renderPersonaDetail);

const renderPlanetDetail = ({ itemId, swapiService }) => {
  const { getPlanet, getPlanetImage } = swapiService;

  return (
    <ItemDetails
      selectedItem={itemId}
      getPerson={getPlanet}
      getImage={getPlanetImage}
      getMessage={`Нужно выбрать планету`}
    >
      <Record label={"Populations"} field={"population"} />
      <Record label={"Rotation Period"} field={"rotationPeriod"} />
      <Record label={"Diameter"} field={"diameter"} />
    </ItemDetails>
  );
};

const RenderPlanetDetail = WithConnect(renderPlanetDetail);

const renderShipDetail = ({ itemId, swapiService }) => {
  const { getStarship, getStarshipImage } = swapiService;

  return (
    <ItemDetails
      selectedItem={itemId}
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
  );
};

const RenderShipDetail = WithConnect(renderShipDetail);

export {
  RenderPersonaList,
  RenderPlanetList,
  RenderShipList,
  RenderPersonaDetail,
  RenderPlanetDetail,
  RenderShipDetail,
};
