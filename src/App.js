import React, { useState } from 'react';
import ImageGrid from './components/ImageGrid';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import Modal from './components/Modal';
import NavBar from './components/NavBar';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";

const StyledApp = styled.div``;

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <div className="App">
          <NavBar onChange={themeToggler} />
          <Title />
          <UploadForm />
          <ImageGrid setSelectedImg={setSelectedImg} />
          {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
        </div>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;