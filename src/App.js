import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // Your code below

  useEffect(() => {
    function handleWindowWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleWindowWidth);

    return () => {
      window.removeEventListener("resize", handleWindowWidth);
      console.log("removed");
    };
  }, []);

  // Effekt nur beim ersten Render! = > [] am Ende!
  // Event-Listener bei resize! = setState zu Window.innerwidth!
  // CLeanup_Function hinterher!!

  // `window.addEventListener('event-name' handlerFunction)`

  // `window.removeEventListener('event-name', handlerFunction)`

  // `handlerFunction`

  return (
    <div className="App">
      <p>Window Width: {windowWidth} </p>
    </div>
  );
}

export default App;
