import "./App.css";
import UserList from "./components/UserList.js";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      Hello React
      <UserList />
    </div>
  );
}

export default App;
