import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      selectValue: "1",
    };
    this.handleDropDownChange = this.handleDropDownChange.bind(this);
  }

  componentDidMount() {
    localStorage.clear();
  }
  handleDropDownChange(e) {
    this.setState({ selectValue: e.target.value });
  }

  render() {
    return (
      <>
        <div className="container">
          <header>Smart Meeting Organiser</header>

          <div className="cards">
            <div className="card-item">
              <div className="card-info">
                <h2 className="card-title">General Information</h2>
                <label>Select Building</label>
                <select
                  id="dropdown"
                  onChange={this.handleDropDownChange}
                  value={this.state.selectValue}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                {(() => {
                  if (this.state.selectValue === "1") {
                    return (
                      <>
                        <label>
                          Buildings
                          <p className="card-intro-detail">A</p>
                        </label>
                        <label>
                          Rooms
                          <p className="card-intro-detail">Total : 3</p>
                          <p className="card-intro-detail">Free Now : 2</p>
                        </label>
                        <label>
                          Meetings
                          <p className="card-intro-detail">Total : 60</p>
                          <p className="card-intro-detail">Going on Now : 20</p>
                        </label>
                      </>
                    );
                  } else if (this.state.selectValue === "2") {
                    return (
                      <>
                        <label>
                          Buildings
                          <p className="card-intro-detail">B</p>
                        </label>
                        <label>
                          Rooms
                          <p className="card-intro-detail">Total : 4</p>
                          <p className="card-intro-detail">Free Now : 2</p>
                        </label>
                        <label>
                          Meetings
                          <p className="card-intro-detail">Total : 80</p>
                          <p className="card-intro-detail">Going on Now : 35</p>
                        </label>
                      </>
                    );
                  } else if (this.state.selectValue === "3") {
                    return (
                      <>
                        <label>
                          Buildings
                          <p className="card-intro-detail">C</p>
                        </label>
                        <label>
                          Rooms
                          <p className="card-intro-detail">Total : 2</p>
                          <p className="card-intro-detail">Free Now : 1</p>
                        </label>
                        <label>
                          Meetings
                          <p className="card-intro-detail">Total : 20</p>
                          <p className="card-intro-detail">Going on Now : 5</p>
                        </label>
                      </>
                    );
                  }
                })()}
              </div>

              <NavLink
                to={{
                  pathname: "/addMeeting",
                  aboutProps: {
                    building: this.state.selectValue,
                  },
                }}
                exact
              >
                <button className="third">Add a Meeting</button>
              </NavLink>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
