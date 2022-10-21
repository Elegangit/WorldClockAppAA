import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div id="root"></div>

      <div class="container">
        <h1>
          <a href="https://www.timeanddate.com/worldclock/">World Clock</a>
        </h1>

        <select id="city">
          <option value="">Select a city..</option>
          <option value="current">Local Time Zone</option>
          <option value="America/LosAngeles">Los Angeles</option>
          <option value="America/New_York">New York</option>
          <option value="Europe/Paris">Paris</option>
          <option value="Europe/Istanbul">Istanbul</option>
        </select>

        <div id="cities">
          <div class="city" id="los-angeles">
            <div>
              <h2>Los Angeles</h2>
              <div class="date"></div>
            </div>
            <div class="time"></div>
          </div>
          <div class="city" id="new-york">
            <div>
              <h2>New York</h2>
              <div class="date"></div>
            </div>
            <div class="time"></div>
          </div>
          <div class="city" id="paris">
            <div>
              <h2>Paris</h2>
              <div class="date"></div>
            </div>
            <div class="time"></div>
          </div>
          <div class="city" id="istanbul">
            <div>
              <h2>Istanbul</h2>
              <div class="date"></div>
            </div>
            <div class="time"></div>
          </div>

          <div>
            <a href="World clock html sample.html">All cities</a>
          </div>
        </div>
      </div>

      <footer>
        This project was coded by
        <a href="https://aniqa-portfolio-shecodes-plus.netlify.app/">
          Aniqa Afzal
        </a>{" "}
        and is open sourced on GitHub.
      </footer>
    </div>
  );
}
