import React, { Component, Fragment, useState, useEffect } from "react";
import {
  addDataToAPI,
  getDataFromAPI,
  logOutUser,
  getDetailProductImages,
  deleteMainProduct
} from "../../../../config/redux/action";
import { connect } from "react-redux";
import { storage } from "../../../../config/firebase";
// import * as moment from "moment";
import "./Dashboard.scss";
import NavbarAdmin from "../NavbarAdmin";
import ImageModal from "../Modal";
import ConfirmDeleteModal from "../ConfirmDeleteModal";
import Category from "../Category"
import {
  Card,
  Icon,
  Image,
  Popup,
  Button,
  GridColumn
} from "semantic-ui-react";
import loadingGif from "../../../../assets/images/loading.gif";

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
    data: [],
    isActive: ""
  };

  // const [posts, setPosts] = useState([]);

  componentDidMount() {  
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData) {
      this.setState({
        email: userData.email
      });
      this.props.getNotes(userData.uid);
    } else {
      this.props.history.push("/auth/admin/login");
    }

    var storageRef = storage.ref();

    // // ******IGNORE******//
    // fetch("http://localhost:57698/api/student/getstudentdata").then(
    //   async response => {
    //     const data = await response.json();
    //     console.log("Data API CH ", data);
    //   }
    // );
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

  getDetail = (e) => {
    const {notes} = this.props;
    const data = {
      category: e.id
    }  
    this.setState({ isActive: e.id });
    // console.log("this.props.notes ", e)
    // console.log("NOTES, ",notes);
    // this.props.deleteOneProduct("-M1UrAGNg0NkVqIlBH5U")
    this.props.showDetailProductImages(data);
  };

  onTrashIconClick = e => {
    console.log("On trash icon click ",e);
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

  changeColor = () => {
    this.setState({black: !this.state.black});
 }

  render() {
    const { title, content, createdDate, image, imageUrl } = this.state;
    const { notes, moreImage } = this.props;
    const { getDetail, state: { isActive }} = this;
    // console.log("Hasil notes ", notes.length);
    // console.log("Detail product image ", moreImage);
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
          totalImage={this.props.moreImage.length}
        />

        <NavbarAdmin userEmail={this.state.email} onLogOutClick={this.logOut} />

        <form
          className="ui form"
          style={{ width: "40%", marginTop: "15px", fontSize: "14px", left:'0' }}
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
            {notes.length !== 0 ? (
              <Fragment>
                <select
                  style={{ borderColor: "pink" }}
                  required="true"
                  onChange={e => this.onInputChange(e, "category")}
                >
                  {notes.map(bebas => {
                    return <option value={bebas.id}>{bebas.id}</option>;
                  })}
                </select>
              </Fragment>
            ) : (
                <p>Loading...</p>
              )}
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
                <div
                  // className="gridContainer"
                  className={`item-list ${
                    isActive === `${bebas.id}` ? "activeee" : ""
                    }`}
                  key={bebas.id}
                  style={{
                    display: "inline-block",
                    width: "25%",
                    "text-align": "-webkit-center"
                  }}
                >
                  <div>
                    <p
                      style={{
                        cursor: "pointer",
                        width: "-webkit-max-content" /* Chrome */,
                      }}
                      onClick={() => {
                        console.log("Clicked... ", bebas)
                        this.getDetail(bebas);
                      }}
                    >
                      <span>{bebas.id}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </Fragment>
        ) : (
          <img src={loadingGif} alt="isLoadingGif" />
        )}

        <hr />

        <div style={{ left: "0" }}>
          {moreImage.length > 0 ? (
            <Fragment>
              {moreImage.map(bebas => {
                console.log("moreImage ", moreImage)
                if(bebas.data.imageUrl === 'null'){
                  return (
                    <div></div>
                  )
                }
                else{
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
                }
                
              })}
            </Fragment>
          ) : (
            <div style={{ textAlign: "center" }}>
              <p>Please click the category to load the result..</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const reduxState = state => ({
  userData: state.user,
  notes: state.notes,
  moreImage: state.moreImage,
  deleteProduct: state.deleteProduct
  // Dari actionnya yang berhubung ke reducer
});

const reduxDispatch = dispatch => ({
  saveNotes: data => dispatch(addDataToAPI(data)),
  getNotes: data => dispatch(getDataFromAPI(data)),
  logout: data => dispatch(logOutUser()),
  showDetailProductImages: data => dispatch(getDetailProductImages(data)),
  deleteOneProduct : data => dispatch(deleteMainProduct(data))
});

export default connect(reduxState, reduxDispatch)(Dashboard);
