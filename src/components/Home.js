import React, { useState } from 'react';
import ImageGrid from './ImageGrid';
import Title from './Title';
import UploadForm from './UploadForm';
import Modal from './Modal';
import NavBar from './NavBar';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../themes";
import "./Home.css";
const StyledApp = styled.div``;

function Home() {
    const [selectedImg, setSelectedImg] = useState(null);
    const [theme, setTheme] = useState("light");

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light")
    }
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <StyledApp>
                <div className="Home">
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

export default Home;