import React, { Component, Fragment } from "react";
import { addDataToAPI, getDataFromAPI } from "../../../config/redux/action";
import { connect } from "react-redux";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import { saveAs } from "file-saver";
import { storage } from '../../../config/firebase'
import "bootstrap/dist/css/bootstrap.min.css";
import * as moment from "moment";

class Dashboard extends Component {
  state = {
    title: "",
    content: "",
    createdDate: "",
    createdBy: "",
    image: null,
    imageUrl: ""
  };

  componentDidMount() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    console.log("Didmount userData ", userData);
    var storageRef = storage.ref();

    // Call getDataAPI from props
    this.props.getNotes(userData.uid);
  }

  handleSaveNote = () => {
    // GET LOCAL STORAGE
    const userData = JSON.parse(localStorage.getItem("userData"));
    console.log("userData after parse json ", userData);

    const data = {
      title: this.state.title,
      content: this.state.content,
      createdDate: new Date().getTime(),
      userId: userData.uid
    };
    this.props.saveNotes(data);
  };

  onInputChange = (e, type) => {
    this.setState({
      [type]: e.target.value
    });
  };

  handleImageChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
    // console.log(this.state.image)
  };

  render() {
    const { title, content, createdDate, image, url } = this.state;
    const { notes } = this.props;
    console.log("Hasil notes ", notes);
    return (
      <div className="container">
        <form style={{ marginLeft: "25%", marginRight: "25%" }}>
          <div class="form-group">
            <label for="exampleInputEmail1">Title</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={title}
              onChange={e => this.onInputChange(e, "title")}
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Content</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              value={content}
              onChange={e => this.onInputChange(e, "content")}
            />
          </div>
          <div>
            <input type="file" onChange={this.handleImageChange} />
          </div>
          <br />
          <button class="btn btn-primary" onClick={this.handleSaveNote}>
            Submit
          </button>
        </form>
        <br />
        <hr />
        <br />
        {notes.length > 0 ? (
          <Fragment>
            {notes.map(bebas => {
              return (
                <div key={bebas.id}>
                  <Card>
                    <Card.Header as="h5">{bebas.data.title}</Card.Header>
                    <Card.Body>
                      <Card.Title>{bebas.data.content}</Card.Title>
                      <Card.Text>
                        {moment(bebas.data.createdDate).format("LLLL")}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <br />
                </div>
              );
            })}
          </Fragment>
        ) : null}
      </div>
    );
  }
}

const reduxState = state => ({
  userData: state.user,
  notes: state.notes
  // Dari actionnya yang berhubung ke reducer
});

const reduxDispatch = dispatch => ({
  saveNotes: data => dispatch(addDataToAPI(data)),
  getNotes: data => dispatch(getDataFromAPI(data))
});

export default connect(reduxState, reduxDispatch)(Dashboard);
