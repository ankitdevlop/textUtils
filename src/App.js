/* eslint-disable jsx-a11y/anchor-is-valid */

import './App.css';
import Alert from './componets/Alert';
import About from './componets/About';
import Navbar from './componets/Navabar';

import React, { useState } from 'react';
import Textul from './componets/Textul';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = (newMode, bgColor, iconId, icon, message, title) => {
    if (mode !== newMode) {
      setMode(newMode);
      document.body.style.backgroundColor = bgColor;
      document.body.style.color = 'white';
      document.getElementById(iconId).innerHTML = icon;
      showAlert(message, 'success');
      document.title = `Text Utils - ${title}`;
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.getElementById(iconId).innerHTML = `Enable ${title.toLowerCase()} mode`;
      showAlert(`${title} Mode Disabled`, 'success');
      document.title = 'Text Utils - Home';
    }
  };

  return (
    <>
      <Navbar 
        title="TextUtils" 
        mode={mode} 
        toggleDarkMode={() => toggleMode('dark', '#343a40', 'btn', '🌛', 'Dark Mode Enabled', 'Dark Mode')} 
        toggleRedMode={() => toggleMode('red', 'red', 'btn2', 'Disable Red Mode', 'Red Mode Enabled', 'Red Mode')} 
        togglePinkMode={() => toggleMode('pink', 'pink', 'btn3', 'Disable Pink Mode', 'Pink Mode Enabled', 'Pink Mode')} 
      />

      <Textul showAlert={showAlert} head="Enter the text to analyze" />
      <Alert alert={alert} />
      <About />
    </>
  );
}

export default App;
