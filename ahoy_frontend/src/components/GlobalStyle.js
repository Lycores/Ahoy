import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  font-size: 10px;
}

body{
    --global-margin: 10px;
    --global-margin-top: 10;
    --global-margin-left: 10;
    --global-margin-right: 10;
    --global-margin-bottom: 10;
    --global-padding: 10px;
    --global-component-distance: 10;
    --global-header-item-height: 70;
    --global-home-button-width:70;
    --global-login-button-width:70;
    --global-box-shadow: 20px 20px 60px #bfc4cb, -20px -20px 60px #ffffff;
    --global-box-shadow-for-input: inset 20px 20px 60px #bfc4cb, inset -20px -20px 60px #ffffff;
    --global-border-radius: 20px;
    --global-playlist-area-width:250;
    --global-background-color: #e1e7ef;
    --global-spotify-color: 1bd760;
    --global-mobile-max: 600px;
    --global-desktop-or-tablet-min: 601px;
    --search-bar-height: 50px;
    --search-bar-width: 150px;


    background-color: #e1e7ef;
    font-family: "Helvetica";
    color: #66727c;
    font-weight: 600;
}
`;

export default GlobalStyle;
