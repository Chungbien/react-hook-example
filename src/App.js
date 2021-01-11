import { useState } from "react";
import "./App.css";
import Clock from "./components/clock";
import Vote from "./components/vote";
import VoteWithClass from "./components/voteClass";

function App() {
  const [showClock, setShowClock] = useState(true);

  const handleToogleClock = () => {
    setShowClock(!showClock);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Vote />
          <VoteWithClass />
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <button
              className="btn btn-primary mr-2"
              onClick={() => handleToogleClock()}
            >
              Toogle
            </button>
            {showClock && <Clock />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
