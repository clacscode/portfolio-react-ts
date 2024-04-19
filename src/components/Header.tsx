import React from 'react'
import '../styles.css'
export const Header = () => {
    return (
        <header className="topbar">
            <h1 className="title" id="title"> &lt;Clacscode /&gt;</h1>
            <div className="container-socials">
                <div className="container-linkedin">
                    <a href="https://www.linkedin.com/in/claudio-sepulveda-s/"><i className="fa-brands fa-linkedin"></i></a>
                </div>
                <div className="container-github">
                    <a href="https://github.com/clacscode"><i className="fa-brands fa-square-github"></i></a>
                </div>
                <div className="container-instagram">
                    <a href="https://www.instagram.com/clacscodes/"><i className="fa-brands fa-square-instagram"></i></a>
                </div>
            </div>
        </header>
    )
}
