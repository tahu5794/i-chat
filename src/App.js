import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import CaseChanger from './components/CaseChanger';

function App() {

  const [theme, setTheme] = useState({
    mode: "light",
    navClass: "navbar navbar-expand-md navbar-light bg-light",
    bgColor: "bg-light",
    color: "text-dark",
    btn: "btn-light",
    icon: "bi bi-moon-stars",
    dropDownMenu: "",
    themeButton: "Enable Dark Mode"
  });

  const toggleTheme = () => {

    if (theme?.mode === 'light') {

      setTheme({
        mode: "dark",
        navClass: "navbar navbar-expand-md navbar-dark bg-dark",
        bgColor: "bg-dark",
        color: "text-light",
        btn: "btn-dark",
        icon: "bi bi-moon-stars-fill",
        dropDownMenu: "dropdown-menu-dark",
        themeButton: "Disable Dark Mode"
      });

      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";

    } else {

      setTheme({
        mode: "light",
        navClass: "navbar navbar-expand-md navbar-light bg-light",
        bgColor: "bg-light",
        btn: "btn-light",
        icon: "bi bi-moon-stars",
        dropDownMenu: "",
        themeButton: "Enable Dark Mode"
      });

      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";

    }

  }
  return (
    <>
      <Navbar title="i-Chat" data={theme} toggleTheme={toggleTheme} />
      <CaseChanger data={theme} />
    </>
  );
}

export default App;
