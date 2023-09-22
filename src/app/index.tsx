import React from "react";
import "shared/assets/styles/index.scss";
import AppRouter from "pages";
import { Provider } from "react-redux";
import { appStore } from "./appStore";

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
