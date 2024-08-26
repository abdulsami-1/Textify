import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from "./components/Textform";
import Alert from './components/Alert';




// import { BrowserRouter, Route, Routes } from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({             //object
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enable", "success");
      document.title = "Textify - LightMode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success");
      document.title = "Textify - DarkMode";
    }
  };






  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar title="Textify" aboutText="About Textify" toggleMode={toggleMode} mode={mode} />
        <Alert alert={alert} />

        <div className="container my-3"  >
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} /> */}
          {/* </Routes> */}
          {/* <Routes> */}
            {/* <Route */}
              {/* exact path="/" */}
              {/* element={ */}
                <TextForm showAlert={showAlert} heading="Enter the text to analyze below"  mode={mode} />
              {/* } */}
            {/* /> */}
          {/* </Routes> */}


        </div>










      {/* </BrowserRouter> */}
    </>
  );
};

export default App;





















