import { useState } from "react";
import "./App.css";
import { useRef } from "react";

const App = () => {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);
  const [state3, setState3] = useState(0);
  const [state4, setState4] = useState(0);

  const total = useRef(0);

  function setAllStates() {
    const currVal = total.current / 4;
    setState1(currVal);
    setState2(currVal);
    setState3(currVal);
    setState4(currVal);
  }

  // function setAllStates(val) {
  //   setState1(val);
  //   setState2(val);
  //   setState3(val);
  //   setState4(val);
  // }

  const interval = useRef(null);

  function increaseCounter(setState) {
    interval.current = setInterval(() => {
      setState(state => {
        if(state < 1000)  {
          const temp = state + 200;
          if(temp >= 1000) {
            return 1000;
          }
          else {
            return temp;
          }
        }
        else {
          return state;
        }
      });
    }, 1000);
  }

  function stopCounter(state) {
    clearInterval(interval.current);
    if(total.current + state >= 4000) {
      total.current = 4000;
    }
    else {
      total.current += state;
    }
    setTimeout(() => {
      setAllStates();
    }, 1000);
  }

  return (
    <>
      <div className="center">
        <h2>Water Tank Problem 🌀</h2>
        <h2>total - {total.current}</h2>
        <div className="main">
          <div>
            <button
              onMouseDown={()=>increaseCounter(setState1)}
              onMouseUp={()=>stopCounter(state1)}
            >
              ADD
            </button>
            <button
              onClick={() => {
                total.current = total.current - state1;
                setState1(0);
                setTimeout(() => {
                  setAllStates();
                }, 1000);
              }}
            >
              Empty
            </button>
            <div className="tank">
            <div style={{width: 120, backgroundColor: 'white', height:`${(1000 - state1)/10}px`}}></div>
            </div>
          </div>

          <div>
            <button
              onMouseDown={()=>increaseCounter(setState2)}
              onMouseUp={()=>stopCounter(state2)}
            >
              ADD
            </button>
            <button
              onClick={() => {
                total.current = total.current - state2;
                setState2(0);
                setTimeout(() => {
                  setAllStates();
                }, 1000);
              }}
            >
              Empty
            </button>
            <div className="tank">
            <div style={{width: 120, backgroundColor: 'white', height:`${(1000 - state2)/10}px`}}></div>
            </div>
          </div>

          <div>
            <button
              onMouseDown={()=>increaseCounter(setState3)}
              onMouseUp={()=>stopCounter(state3)}
            >
              ADD
            </button>
            <button
              onClick={() => {
                total.current = total.current - state3;
                setState3(0);
                setTimeout(() => {
                  setAllStates();
                }, 1000);
              }}
            >
              Empty
            </button>
            <div className="tank">
            <div style={{width: 120, backgroundColor: 'white', height:`${(1000 - state3)/10}px`}}></div>
            </div>
          </div>

          <div>
            <button
              onMouseDown={()=>increaseCounter(setState4)}
              onMouseUp={()=>stopCounter(state4)}
            >
              ADD
            </button>
            <button
              onClick={() => {
                total.current = total.current - state4;
                setState4(0);
                setTimeout(() => {
                  setAllStates();
                }, 1000);
              }}
            >
              Empty
            </button>
            <div className="tank">
            <div style={{width: 120, backgroundColor: 'white', height:`${(1000 - state4)/10}px`}}></div>
            </div>
          </div>
        </div>
      </div>     
    </>
  );
};

export default App;
