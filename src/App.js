
import "./App.css";
import React, { Component } from "react";
import Tabview from "./components/TabView/Tabview";
import MyFlashcard from "./components/MyFlashcard";
import CreateNew from'./components/CreateNew';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="center">
          <Tabview
            title={"Tab Test"}
            tabs={[
              { name: "Create New", content: CreateNew },
              { name: "My Flashcard", content: MyFlashcard },
              // { name: "tab 3", content: tabname },
              // { name: "Tab 4", content: tabname },
            ]}
          />
        </div>
      </div>
    );
  }
}

export default App;