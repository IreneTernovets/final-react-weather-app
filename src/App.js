import "./App.css";

export default function App() {
  return (
    <div className="App">
      <section className="vh-100" style={{ backgroundColor: "#f5f6f7" }}>
        <div className="container py-5 h-100">
          <div class="input-group mb-3">
            <input
              type="search"
              className="form-control"
              placeholder="Type a city"
            />
            <input
              className="btn search-button"
              type="submit"
              value="Search"
            ></input>
          </div>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-10 col-lg-8 col-xl-6">
              <div
                className="card text-white"
                style={{
                  borderRadius: "40px",
                  overflow: "hidden",
                  border: "none",
                }}
              >
                <div className="bg-image" style={{ borderRadius: "35px" }}>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp"
                    className="card-img"
                    alt="weather"
                  />
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(190, 216, 232, .5)" }}
                  ></div>
                </div>
                <div className="card-img-overlay text-dark p-5">
                  <h4 className="mb-0">Juneau, Alaska, US</h4>
                  <p className="display-2 my-3">1.28°C</p>
                  <p className="mb-2">
                    Feels Like: <strong>-1.08 °C</strong>
                  </p>
                  <h5>Snowy</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
