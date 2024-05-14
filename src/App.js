import './App.css';
import React from 'react';
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import Body from './Components/Body'

function App() {
  const [data, setData] = React.useState([])
  return (

      <div className="App">
          <Navbar />
          <div className='form-div'>
            <Form data={data} setData={setData}/>
          </div>

          <div className='appbar'>
            <Body data={data}/>
          </div>
      </div>

  );
}

export default App;
