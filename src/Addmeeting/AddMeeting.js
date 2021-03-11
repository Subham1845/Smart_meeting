import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./meeting.css";
import { Modal, ModalBody } from "reactstrap";
import FormSuccessBlock from "./FormSuccessBlock";

class AddMeeting extends Component {
  userData;
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      showModal: false,
      room: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
    this.setRoom = this.setRoom.bind(this);
  }
  toggle() {
    this.setState({ showModal: !this.state.showModal });
  }

  handleChange(e) {
    this.setState({
      startDate: e,
    });
  }
  handleChange1(e) {
    this.setState({
      endDate: e,
    });
  }
  setRoom(e) {
    this.setState({
      room: e.target.innerHTML,
    });
  }
  onSubmit(e) {
    e.preventDefault();

    this.setState({
      startDate: new Date(),
      endDate: new Date(),
    });
  }

  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("user"));

    if (localStorage.getItem("user")) {
      this.setState({
        startDate: this.userData.startDate,
        endDate: this.userData.endDate,
      });
    } else {
      this.setState({
        startDate: "",
        endDate: "",
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("user", JSON.stringify(nextState));
  }

  render() {
    const { fullscreen } = this.props;

    return (
      <>
        <div className="form">
          <div className="card-item">
            <div className="card-info">
              <form onSubmit={this.onSubmit}>
                <p type="Start Date/Time:"></p>
                <DatePicker
                  value={this.state.startDate}
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={20}
                  timeCaption="time"
                  dateFormat="MMMM d, yyyy h:mm aa"
                  minDate={new Date()}
                  // maxDate={addDays(new Date(), 7)}
                />

                <p type="End Date/Time:"></p>
                <DatePicker
                  value={this.state.endDate}
                  selected={this.state.endDate}
                  onChange={this.handleChange1}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={20}
                  timeCaption="time"
                  dateFormat="MMMM d, yyyy h:mm aa"
                  minDate={new Date()}
                  //maxDate={addDays(new Date(), 7)}
                />
                <br />
                <br />
                <br />

                <button className="select_building" onClick={this.toggle}>
                  Select Room
                </button>
                <Modal
                  autoFocus={true}
                  centered={true}
                  fullscreen={fullscreen}
                  isOpen={this.state.showModal}
                  toggle={this.toggle}
                >
                  <ModalBody>
                    {(() => {
                      if (this.props.location.aboutProps.building === "1") {
                        return (
                          <>
                            <button
                              className="select_building"
                              onClick={this.setRoom}
                            >
                              Punjab
                            </button>
                            <br />
                            <br />
                            <br />
                            <p className="card-intro-detail">Building A</p>

                            <p className="card-intro-detail">Floor 7</p>

                            <button
                              className="select_building"
                              onClick={this.setRoom}
                            >
                              Tamil Nadu
                            </button>
                            <br />
                            <br />
                            <br />
                            <p className="card-intro-detail">Building A</p>
                            <p className="card-intro-detail">Floor 2</p>

                            <button
                              className="select_building"
                              onClick={this.setRoom}
                            >
                              Kaveri
                            </button>
                            <br />
                            <br />
                            <br />
                            <p className="card-intro-detail">Building A</p>
                            <p className="card-intro-detail">Floor 1</p>
                          </>
                        );
                      } else if (
                        this.props.location.aboutProps.building === "2"
                      ) {
                        return (
                          <>
                            <button
                              className="select_building"
                              onClick={this.setRoom}
                            >
                              Punjab
                            </button>
                            <br />
                            <br />
                            <br />
                            <p className="card-intro-detail">Building B</p>
                            <p className="card-intro-detail">Floor 7</p>

                            <button
                              className="select_building"
                              onClick={this.setRoom}
                            >
                              Tamil Nadu
                            </button>
                            <br />
                            <br />
                            <br />
                            <p className="card-intro-detail">Building B</p>
                            <p className="card-intro-detail">Floor 2</p>

                            <button
                              className="select_building"
                              onClick={this.setRoom}
                            >
                              Kaveri
                            </button>
                            <br />
                            <br />
                            <br />
                            <p className="card-intro-detail">Building B</p>
                            <p className="card-intro-detail">Floor 1</p>

                            <button
                              className="select_building"
                              onClick={this.setRoom}
                            >
                              Aryabhatta
                            </button>
                            <br />
                            <br />
                            <br />
                            <p className="card-intro-detail">Building B</p>
                            <p className="card-intro-detail">Floor 1</p>
                          </>
                        );
                      } else if (
                        this.props.location.aboutProps.building === "3"
                      ) {
                        return (
                          <>
                            <button
                              className="select_building"
                              onClick={this.setRoom}
                            >
                              Punjab
                            </button>
                            <br />
                            <br />
                            <br />
                            <p className="card-intro-detail">Building C</p>
                            <p className="card-intro-detail">Floor 7</p>

                            <button
                              className="select_building"
                              onClick={this.setRoom}
                            >
                              Tamil Nadu
                            </button>
                            <br />
                            <br />
                            <br />
                            <p className="card-intro-detail">Building C</p>
                            <p className="card-intro-detail">Floor 2</p>
                          </>
                        );
                      }
                    })()}
                  </ModalBody>

                  <button className="btn" onClick={this.toggle} type="submit">
                    Submit
                  </button>
                  <span>
                    <FormSuccessBlock room={this.state.room} />
                  </span>
                </Modal>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AddMeeting;
