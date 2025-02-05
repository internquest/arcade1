'use client';
import React, { useState } from 'react';
import Desccard1 from './Desccard1';
import Desccard2 from './Desccard2';
import Desccard3 from './Desccard3';
import Desccard4 from './Desccard4';
import Desccard5 from './Desccard5';
import Descright1 from './rightdesc/Descright1';
import Descright2 from './rightdesc/Descright2';

const Arcadedesc = () => {
  const [codesc, setCodesc] = useState(0);
  //   console.log(codesc);

  return (
    <div id="product" className="section_home-functionalities">
      <div className="padding-global">
        <div className="container-large">
          <div className="home_funcionalities-component_wrapper">
            <div
              id="w-node-_3912f3b4-db9d-f823-a0cb-e08dc9e8de84-fbfdb5b3"
              className="home_funcionalities-component_left col-span-6"
            >
              <Desccard1 codesc={codesc} setCodesc={setCodesc} />
              <Desccard2 codesc={codesc} setCodesc={setCodesc} />
              <Desccard3 codesc={codesc} setCodesc={setCodesc} />
              <Desccard4 codesc={codesc} setCodesc={setCodesc} />
              <Desccard5 codesc={codesc} setCodesc={setCodesc} />
            </div>
            <div
              id="w-node-_9e04c079-8260-3714-8b49-f34c45865452-fbfdb5b3"
              class="home_funcionalities-component_right col-span-6"
            >
              <div class="code_tab-wrapper">
                <Descright1 codesc={codesc} setCodesc={setCodesc} />
                <Descright2 codesc={codesc} setCodesc={setCodesc} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arcadedesc;
