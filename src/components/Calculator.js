import React, { useState } from "react";
function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const total = () => {
    setResult(eval(result).toString());
  };
  return (
    <>
      <div className='container'>
        <div className='calculator-wrapper'>
          <div className='row'>
            <form>
              <input type='text' value={result} className='output' />
            </form>
          </div>

          {/* gird */}

          <div className='grid-container'>
            <div className='grid-item item1'>
              <button onClick={backspace} id='backspace'>
                C
              </button>
            </div>
            <div className='grid-item item2'>
              <button onClick={clear} id='clear'>
                Clear
              </button>
              {/* Clear */}
            </div>
            <div className='grid-item'>
              <button name='7' onClick={handleClick}>
                7
              </button>
            </div>
            <div className='grid-item'>
              <button name='8' onClick={handleClick}>
                8
              </button>
            </div>
            <div className='grid-item'>
              <button name='9' onClick={handleClick}>
                9
              </button>
            </div>
            <div className='grid-item'>
              <button name='/' onClick={handleClick}>
                &divide;
              </button>
            </div>
            <div className='grid-item'>
              <button name='4' onClick={handleClick}>
                4
              </button>
            </div>
            <div className='grid-item'>
              <button name='5' onClick={handleClick}>
                5
              </button>
            </div>
            <div className='grid-item'>
              <button name='6' onClick={handleClick}>
                6
              </button>
            </div>
            <div className='grid-item'>
              <button name='*' onClick={handleClick}>
                &times;
              </button>
            </div>
            <div className='grid-item'>
              <button name='1' onClick={handleClick}>
                1
              </button>
            </div>

            <div className='grid-item'>
              <button name='2' onClick={handleClick}>
                2
              </button>
            </div>
            <div className='grid-item'>
              <button name='3' onClick={handleClick}>
                3
              </button>
            </div>
            <div className='grid-item'>
              <button name='+' onClick={handleClick}>
                +
              </button>
            </div>

            <div className='grid-item'>
              <button name='.' onClick={handleClick}>
                .
              </button>
            </div>

            <div className='grid-item'>
              <button name='0' onClick={handleClick}>
                0
              </button>
            </div>
            <div className='grid-item'>
              <button onClick={total} id='result'>
                =
              </button>
            </div>
            <div className='grid-item'>
              <button name='-' onClick={handleClick}>
                &ndash;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
