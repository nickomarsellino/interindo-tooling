import React, { Component, Fragment, useState, useEffect } from "react";
import {
  addDataToAPI,
  getDataFromAPI,
  logOutUser,
  getDetailProductImages
} from "../../../../config/redux/action";
import { connect } from "react-redux";
import { storage } from "../../../../config/firebase";
// import * as moment from "moment";
import NavbarAdmin from "../NavbarAdmin";
import ImageModal from "../Modal";
import ConfirmDeleteModal from "../ConfirmDeleteModal";
import {
  Card,
  Icon,
  Image,
  Dropdown,
  Grid,
  GridColumn
} from "semantic-ui-react";

class Dashboard extends Component {
state = {
    title: "",
    content: "",
    // Bingung kalo ga di ganti kategorinya langsung clic should be Arbor
    category: "Arbor",
    createdDate: new Date().getTime(),
    createdBy: "",
    image: null,
    imageUrl: "",
    onModalShow: false,
    onConfirmModalShow: false,
    productsDetail: "",
    productsId: "",
    email: "",
    detailDataUtama: "",
    isLoading: false,
    loadingGif: "ui primary button",
    data: []
  };

  // const [posts, setPosts] = useState([]);

  componentDidMount() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    console.log("Didmount userData ", userData);

    // if (this.state.email === "") {
    //   this.props.history.push('/login');
    // } else {
    this.setState({
      email: userData.email
    });
    // Call getDataAPI from props
    this.props.getNotes(userData.uid);
    // }

    var storageRef = storage.ref();

    // ***IGNORE***//
    fetch("http://localhost:57698/api/student/getstudentdata").then(
      async response => {
        const data = await response.json();
        console.log("Data API CH ", data);
      }
    );
  }

  handleSaveNote = e => {
    e.preventDefault();
    // GET LOCAL STORAGE
    const userData = JSON.parse(localStorage.getItem("userData"));
    console.log("userData after parse json ", userData);

    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progress function .... Disabled the button
        this.setState({
          isLoading: true,
          loadingGif: "ui primary loading button"
        });
      },
      error => {
        // error function ....
        console.log(error);
      },
      () => {
        // complete function ....
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(imageUrl => {
            console.log(imageUrl);
            this.setState({ imageUrl });

            const data = {
              title: this.state.title,
              content: this.state.content,
              category: this.state.category,
              createdDate: this.state.createdDate,
              userId: userData.uid,
              imageUrl: this.state.imageUrl
            };
            console.log("Data ", data);

            this.props.saveNotes(data);

            // Enabled again the Button
            this.setState({
              image: "",
              isLoading: false,
              loadingGif: "ui primary button"
              // clear form
            });
          });
      }
    );
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
    console.log(this.state.image);
  };

  getDetail = e => {
    // this.setState({
    //   onModalShow: true,
    //   productsDetail: e.data,
    //   productsId: e.id,
    //   detailDataUtama: e.data.DataUtama
    // });

    // // Show the image list wihtout click button
    // const productsId = {
    //   productsId: e.id
    // };


    const data = {
      category: e.id
    };

    this.props.showDetailProductImages(data);
    console.log("E pas klik detail ", e);
  };

  onTrashIconClick = e => {
    console.log(e);

    this.setState({
      onConfirmModalShow: true,
      detailDataUtama: e.data,
      productsId: e.id
    });
  };

  onCloseClick = () => {
    this.setState({
      onModalShow: false,
      onConfirmModalShow: false
    });
  };

  logOut = () => {
    console.log("TEST");
    this.props.logout();
    const { history } = this.props;

    history.push("/auth/admin/login");
  };

  render() {
    const { title, content, createdDate, image, imageUrl } = this.state;
    const { notes, moreImage } = this.props;
    // console.log("Hasil notes ", notes.length);
    console.log("Detail product image ", this.props.notes);
    // console.log("this.state.isLoading ", this.state.isLoading);
    return (
      <div className="container">
        <ImageModal
          onModalShow={this.state.onModalShow}
          onCloseClick={() => this.onCloseClick()}
          productsId={this.state.productsId}
          productsDetail={this.state.productsDetail}
          detailDataUtama={this.state.detailDataUtama}
        />

        <ConfirmDeleteModal
          onConfirmModalShow={this.state.onConfirmModalShow}
          onCloseClick={() => this.onCloseClick()}
          productsId={this.state.productsId}
          detailDataUtama={this.state.detailDataUtama}
          totalImage = {this.props.moreImage.length}
        />

        <NavbarAdmin userEmail={this.state.email} onLogOutClick={this.logOut} />

        <form
          className="ui form"
          style={{ width: "40%", marginTop: "15px", fontSize: "14px" }}
        >
          <div className="field">
            <label>Product Name</label>
            <input
              type="text"
              name="first-name"
              onChange={e => this.onInputChange(e, "title")}
              required="true"
            />
          </div>
          <div class="field">
            <label>Description</label>
            <textarea
              type="text"
              name="last-name"
              onChange={e => this.onInputChange(e, "content")}
              required="true"
            />
          </div>
          <div className="field" style={{ width: "50%" }}>
            <label>Category</label>
            <select
              style={{ borderColor: "pink" }}
              required="true"
              onChange={e => this.onInputChange(e, "category")}
            >
              <option value="Arbor">Arbor</option>
              <option value="CuttingTool">Cutting Tool</option>
              <option value="GuidePin">Guide Pin</option>
              <option value="Insert">Insert</option>
              <option value="Milling">Milling</option>
              <option value="PowerChuck">Power Chuck</option>
              <option value="Spring">Spring</option>
              <option value="Vise">Vise</option>
            </select>
          </div>
          <div class="field">
            <input type="file" onChange={this.handleImageChange} />
          </div>
          <br />
          <button
            className={this.state.loadingGif}
            type="submit"
            style={{ fontSize: "14px" }}
            onClick={this.handleSaveNote}
            disabled={this.state.isLoading}
          >
            Submit
          </button>
        </form>
        <br />
        <hr />
        {notes.length !== 0 ? (
          <Fragment>
            {notes.map(bebas => {
              return (
                <div className="gridContainer" key={bebas.id}>
                  <div>
                    <p
                      style={{
                        cursor: "pointer",
                        backgroundColor: "cyan",
                        width: "-webkit-max-content" /* Chrome */
                      }}
                      onClick={
                        () => {this.getDetail(bebas);}
                      }
                    >
                      {bebas.id}
                    </p>
                  </div>
                </div>
              );
            })}
          </Fragment>
        ) : (
          <p>Tidak ada Dataaa</p>
        )}

        <hr />

        <div style={{ left: "0" }}>
          {moreImage.length > 0 ? (
            <Fragment>
              {moreImage.map(bebas => {
                return (
                  <div
                    class="img-wrap"
                    style={{
                      // height: "195px",
                      width: "30%",
                      left: "0",
                      marginLeft: "1.6%",
                      marginRight: "1.6%"
                      // marginTop: "5%"
                    }}
                  >
                    <Card style={{ width: "100%" }}>
                      <Image
                        src={bebas.data.imageUrl}
                        style={{ padding: "5px", height: "195px" }}
                      />
                      <Card.Content extra>
                        <Card.Description>{bebas.data.title}</Card.Description>
                      </Card.Content>
                    </Card>
                    <span className="close">
                      <Icon
                        onClick={() => {
                          this.onTrashIconClick(bebas);
                        }}
                        name="trash alternate outline"
                      ></Icon>
                    </span>
                  </div>
                );
              })}
            </Fragment>
          ) : (
            <p>Tidak ada data tidak!</p>
          )}
        </div>
      </div>
    );
  }
}

const reduxState = state => ({
  userData: state.user,
  notes: state.notes,
  moreImage: state.moreImage
  // Dari actionnya yang berhubung ke reducer
});

const reduxDispatch = dispatch => ({
  saveNotes: data => dispatch(addDataToAPI(data)),
  getNotes: data => dispatch(getDataFromAPI(data)),
  logout: data => dispatch(logOutUser()),
  showDetailProductImages: data => dispatch(getDetailProductImages(data))
});

export default connect(reduxState, reduxDispatch)(Dashboard);