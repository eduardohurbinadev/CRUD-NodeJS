import React, { Fragment } from "react";
import "./App.css";
import AddButton from './components/Buttons/AddButton';
import Table from "./components/UserTable";
import Mainbar from "./components/Mainbar";

function App() {
  return (
    <Fragment>
      <Mainbar />
      <AddButton/>
      <Table />
    </Fragment>
  );
}

export default App;
