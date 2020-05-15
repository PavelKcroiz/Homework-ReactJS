import React from "react";

import Header from "../Header";
import InputsFields from "../InputsFields";
import ErrorComponent from "../ErrorComponent";
import Service from "../../service/service";

import "./app.css";

class App extends React.Component {
  service = new Service();

  state = {
    error: {},
  };

  postAnswer = (error) => {
    if (error === undefined) alert("Congratulations!!");
    else {
      this.setState(() => {
        return {
          error: error.errors,
        };
      });
    }
  };

  onSubmit = (obj) => {
    this.service.requestData(obj).then((res) => this.postAnswer(res));
  };
  render() {
    return (
      <div className="app">
        <Header />
        <ErrorComponent errors={this.state.error} />
        <InputsFields onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default App;
