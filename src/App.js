import React from "react";
import "./App.css";

function App() {
  const videoId = "mnB6xBuQyc8";

  return (
    <main className="comic-page">

      <div className="comic-dots"></div>

      <section className="comic-container">

        {/* HEADER */}
        <header className="comic-header">

          <div className="burst">
            SOFTWARE
            <br />
            FACTORY
          </div>

          <div className="header-title">
            <h1>THE SOFTWARE FACTORY</h1>

            <p>
              CREATIVE TECHNOLOGY • DEVELOPMENT • INNOVATION
            </p>
          </div>

        </header>

        {/* DIVISOR */}
        <div className="comic-divider">
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>

        {/* VIDEO */}
        <section className="video-panel">

          <div className="panel-caption">
            ▶ VIDEO PRESENTATION
          </div>

          <div className="video-wrapper">

            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="The Software Factory"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

          </div>

          <div className="video-caption">

            <strong>THE SOFTWARE FACTORY</strong>

            <br />

            Discover the world of software development,
            data analytics and IT technology.

          </div>

        </section>

        {/* COMIC PANELS */}
        <section className="comic-panels">

          {/* SOFTWARE */}
          <article className="comic-card">

            <div className="card-number">
              01
            </div>

            <h2>SOFTWARE</h2>

            <p>
              Software development, programming,
              web applications and digital solutions.
            </p>

          </article>

          {/* DATA */}
          <article className="comic-card">

            <div className="card-number">
              02
            </div>

            <h2>DATA</h2>

            <p>
              Data analytics, artificial intelligence,
              visualization and information systems.
            </p>

          </article>

          {/* IT */}
          <article className="comic-card">

            <div className="card-number">
              03
            </div>

            <h2>IT</h2>

            <p>
              Information technology, infrastructure,
              networking and industrial electronics.
            </p>

          </article>

        </section>

        {/* FOOTER */}
        <footer className="comic-footer">

          <span>
            CAMILO TORRECILLAS ARDILA
          </span>

          <span>
            THE SOFTWARE FACTORY
          </span>

          <span>
            TECHNOLOGY • 2026
          </span>

        </footer>

      </section>

    </main>
  );
}

export default App;