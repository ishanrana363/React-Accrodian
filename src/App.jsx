import React, { useState } from 'react';
import './App.css';
import data from './data';

const App = () => {
  const [show, setShow] = useState(null);

  const toggle = (i) => {
    if (show === i) {
      return setShow(null);
    }
    return setShow(i);
  };

  return (
    <div>
      <div className="wrapper">
        <div className="accordion">
          {
            data.map((item, i) => (
              <div key={i}>
                <div className='title' onClick={() => toggle(i)}>
                  <h4>{item.question}</h4>
                  <span>
                    {show === i ? `-` : `+`}
                  </span>
                </div>
                <div className={show === i ? "content isShow" : "content"}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default App;
