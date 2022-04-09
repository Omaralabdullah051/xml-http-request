import React from 'react';
import GetAndSendData from './GetAndSendData';
import GetData from './GetData';
import GetData2 from './GetData2';
import SendData from './SendData';


const App = () => {
  return (
    <div className="App">
      <GetData />
      <GetData2 />
      <SendData />
      <GetAndSendData />
    </div>
  );
};

export default App;
