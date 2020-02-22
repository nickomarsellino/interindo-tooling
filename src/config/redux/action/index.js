import firebase, { database } from "../../firebase";

export const actionUserName = () => dispatch => {
  setTimeout(() => {
    return dispatch({ type: "CHANGE_USER", value: "Raissa" });
  }, 1500);
};

export const loginUserAPI = data => dispatch => {
  console.log(data)
  return new Promise((resolve, reject) => {
    dispatch({ type: "CHANGE_LOADING", value: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(res => {
        console.log("Response ", res);
        const userData = {
          email: res.user.email,
          uid: res.user.uid,
          emailVerified: res.user.emailVerified,
          refreshToken: res.user.refreshToken
        };
        // Set isLoading jadi false lagi setelah selesai
        dispatch({ type: "CHANGE_LOADING", value: false });
        dispatch({ type: "CHANGE_ISLOGIN", value: true });
        dispatch({ type: "CHANGE_USER", value: userData });
        resolve(userData);
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        dispatch({ type: "CHANGE_LOADING", value: false });
        dispatch({ type: "CHANGE_ISLOGIN", value: false });
        dispatch({ type: "SHOW_ERRORMESSAGE", value: errorMessage });
        reject(false);
      });
  });
};

export const logOutUser = data => dispatch => {
  firebase
    .auth()
    .signOut()
    .then(function() {
      //Sign-out successful.
      localStorage.clear();
      console.log("Sukses Sign Out !");
    })
    .catch(function(error) {
      // An error happened.
    });
};

// Post API from Dashboard -> Ini contoh yang pake redux yang bikin reducer dulu
export const addDataToAPI = data => dispatch => {
  database.ref("Products/" + data.category).push({
  //     // Entr bikin validasi untuk nama title cuma boleh 1 doang, unique
      title: data.title,
      content: data.content,
      category: data.category,
      imageUrl: data.imageUrl,
      createdDate: data.createdDate,
      createdBy: data.userId
  });
  console.log("result action ", data);
};

// Get data api using redux
export const getDataFromAPI = userId => dispatch => {
  // var urlNotes = firebase.database().ref("Products/CuttingTool");
  var urlNotes = firebase.database().ref("Products/");
  return new Promise((resolve, reject) => {
    urlNotes.on("value", function(snapshot) {
      // ubah object jadi Array
      const data = [];
      if(snapshot.val()){
        Object.keys(snapshot.val() && snapshot.val()).map(key => {
          data.push({
            id: key,
            data: snapshot.val()[key]
          });
        });
      }
      console.log("DATA BUAT CEK GET API ", data)
      dispatch({ type: "SET_NOTES", value: data });
      resolve(snapshot.val());
    });
  });
};

export const addProductsDetail = data => dispatch => {
  database.ref("Products/" + data.productsId  ).push({
    imageUrl: data.imageUrl
  });
  console.log("result action ", data);
};

// Get data api using redux
export const getDetailProductImages = data => dispatch => {
  console.log(data);
  var urlNotes = firebase.database().ref("Products/" + data.category);
  // return new Promise((resolve, reject) => {
    urlNotes.on("value", function(snapshot) {
      // ubah object jadi Array
      const data = [];
      if(snapshot.val()) {
        Object.keys(snapshot.val()&&snapshot.val()).map(key => {
          data.push({
            id: key,
            data: snapshot.val()[key]
          });
        });
      }
      console.log("Data untuk di Modal ", data);
      dispatch({ type: "SHOW_MORE_IMAGE", value: data });
      // resolve(snapshot.val());
    // });
  });
};

export const deleteMainProduct = data => dispatch => {
  console.log("Deleted product data" ,data);
  // Cannot delete the image when there is only one image left
  if(data.totalImage == '1'){
    alert("You must at least have 1 image for each category!")
  }
  else {
    database.ref("Products/" + data.category + "/" + data.productId ).remove()
  }
};

export const deleteImageProduct = data => dispatch => {
  console.log("Deleted image ID" , data);
  // if(data.productImageId === "DataUtama") {
  //   alert("Cannot delete your main Image Product, this may cause error!")
  // } 
  // else {
    // database.ref("Products/" + data.productId + "/" + data.productImageId ).remove()    
  // }
};