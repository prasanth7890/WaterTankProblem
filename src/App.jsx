import { useState } from "react";
import "./App.css";
import { useRef } from "react";
//TODO: adding and emptying..something wrong in them.
const App = () => {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);
  const [state3, setState3] = useState(0);
  const [state4, setState4] = useState(0);

  const indxes = [setState1, setState2, setState3, setState4];

  const total = useRef(0);

  function setAllStates2(val, indx) {

    for(let i=0;i<indxes.length;i++) {
      const setState = indxes[i];
      if(i == indx) {
        setState(s => {
          if(s-75 <= val) {
            return val;
          }
          else {
            return s-75;
          }
        });
      }
      else {
        setState(s => {
          if(s + 25 >= val) {
            return val;
          }
          else {
            return s + 25;
          }
        });
      }
    }

  }

  function setAllStates3(val, indx) {
    
    for(let i=0;i<indxes.length;i++) {
      const setState = indxes[i];
      if(i == indx) {
        setState(s => {
          if(s+75 >= val) {
            return val;
          }
          else {
            return s+75;
          }
        });
      }
      else {
        setState(s => {
          if(s - 25 <= val) {
            return val;
          }
          else {
            return s - 25;
          }
        });
      }
    }

  }

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
          return 1000;
        }
      });
    }, 1000);
  }

  const inteval2 = useRef(null);

  function stopCounter(state, stateIndx) {
    clearInterval(interval.current);
    if(total.current + state >= 4000) {
      total.current = 4000;
    }
    else {
      total.current += state;
    }

    const settle = total.current / 4;
    let t = settle;
    inteval2.current = setInterval(() => {
      if(t <= 0) {
        clearInterval(inteval2.current);
      }
      setAllStates2(settle, stateIndx);
      t = t - 25;
    }, (150));

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
              onMouseUp={()=>stopCounter(state1, 0)}
            >
              ADD
            </button>
            <button
              onClick={() => {
                total.current = total.current - state1;
                setState1(0);

                const settle = Math.trunc(total.current / 4);
                let t = settle;
                inteval2.current = setInterval(() => {
                  if (t <= 0) {
                    clearInterval(inteval2.current);
                  }
                  setAllStates3(settle, 0);
                  t = t - 25;
                }, 150);

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
              onMouseUp={()=>stopCounter(state2, 1)}
            >
              ADD
            </button>
            <button
              onClick={() => {
                total.current = total.current - state2;
                setState2(0);

                const settle = Math.trunc(total.current / 4);
                let t = settle;
                inteval2.current = setInterval(() => {
                  if (t <= 0) {
                    clearInterval(inteval2.current);
                  }
                  setAllStates3(settle, 1);
                  t = t - 25;
                }, 150);

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
              onMouseUp={()=>stopCounter(state3, 2)}
            >
              ADD
            </button>
            <button
              onClick={() => {

                total.current = total.current - state3;
                setState3(0);

                const settle = Math.trunc(total.current / 4);
                let t = settle;
                inteval2.current = setInterval(() => {
                  if (t <= 0) {
                    clearInterval(inteval2.current);
                  }
                  setAllStates3(settle, 2);
                  t = t - 25;
                }, 150);

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
              onMouseUp={()=>stopCounter(state4, 3)}
            >
              ADD
            </button>
            <button
              onClick={() => {
                total.current = total.current - state4;
                setState4(0);

                const settle = Math.trunc(total.current / 4);
                let t = settle;
                inteval2.current = setInterval(() => {
                  if (t <= 0) {
                    clearInterval(inteval2.current);
                  }
                  setAllStates3(settle, 3);
                  t = t - 25;
                }, 150);

              }}
            >
              Empty
            </button>
            <div className="tank">
            <div style={{width: 120, backgroundColor: 'white', height:`${(1000 - state4)/10}px`}}>{state4}</div>
            </div>
          </div>
        </div>
      </div>     
    </>
  );
};

export default App;
