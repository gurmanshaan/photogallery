import React, { useState } from 'react';

export default function NavBar(props) {

    const [darkMode, setDarkMode] = useState(false);

    const changeTheme = () => {
        props.onChange();
        setDarkMode(!darkMode)
    }

    return (
        <div>
            <div class="topnav">
                <div className="title">
                    <h1>FireGram</h1>
                </div>
                <div className="container">
                    <span style={{ color: darkMode ? "white" : "black", cursor: "pointer" }} onClick={changeTheme}>☀︎</span>
                </div>
            </div>
        </div>
    )
}