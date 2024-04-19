import React from 'react'

export const ContentPage = () => {
    return (
        <div className="container">
            <main className="main-content">
                <div id="content-item" className="card-container">
                    <div className="title-full">
                        <h1 className="title">Tips</h1>
                    </div>
                    <a href="https://github.com/clacscode/git-basico" className="card">
                        <i className="fas fa-lightbulb"></i>
                        Git básico
                    </a>
                </div>
            </main>
        </div>
    )
}
