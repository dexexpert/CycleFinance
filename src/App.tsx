
import React from "react";
import { ParallaxProvider } from 'react-scroll-parallax';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import "./App.css";
import Footer from "./pages/layout/footer";
import Header from "./pages/layout/header";
import Router from "./data/router";


const App = () => {
  
  const lightTheme = createMuiTheme({
    palette: {
      type: "light",
      primary: {
        light: "#ffffff",
        main: "#ffffff",
        dark: "#004d40"
      }
    }
  });

  return (
    <MuiThemeProvider theme={lightTheme}>
      <div className="relative w-full background-img">
        <Header />
        <ParallaxProvider>
          <Router />
        </ParallaxProvider>
        <Footer />
      </div>
    </MuiThemeProvider>
  );
};

export default App;
