import firebase, { database } from "../../firebase";

export const actionUserName = () => dispatch => {
  setTimeout(() => {
    return dispatch({ type: "CHANGE_USER", value: "Raissa" });
  }, 1500);
};

export const loginUserAPI = data => dispatch => {
  console.log(data);
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
    title: data.title,
    content: data.content,
    category: data.category,
    imageUrl: data.imageUrl,
    createdDate: data.createdDate,
    createdBy: data.userId
  });

  var urlNotes = firebase.database().ref("Products/" + data.category);
  urlNotes.on("value", function(snapshot) {
    // ubah object jadi Array
    const data = [];
    if (snapshot.val()) {
      Object.keys(snapshot.val() && snapshot.val()).map(key => {
        data.push({
          id: key,
          data: snapshot.val()[key]
        });
      });
    }
    // console.log("Data untuk di Modal ", data);
    if(data[0].data.dummy){
        console.log("HALO")
      }
    dispatch({ type: "SHOW_MORE_IMAGE", value: data });
  });
};

// Get data api using redux
export const getDataFromAPI = userId => dispatch => {
  // var urlNotes = firebase.database().ref("Products/CuttingTool");
  var urlNotes = firebase.database().ref("Products/");
  return new Promise((resolve, reject) => {
    urlNotes.on("value", function(snapshot) {
      const data = [];
      console.log("snapshot ", snapshot)
      if (snapshot.val()) {
        Object.keys(snapshot.val() && snapshot.val()).map(key => {
          data.push({
            id: key,
            data: snapshot.val()[key]
          });
          console.log(key)
        });
      }
      // const array = [];
      // Object.keys(snapshot.val()).forEach((key) => {
      //   array.push({[key]: snapshot.val()[key]});
      // }); 
      // console.log("array rsult ", array);

    // });
      function compare( a, b ) {
        if ( a.id < b.id ){
          return -1;
        }
        if ( a.id > b.id ){
          return 1;
        }
        return 0;
      }      
      data.sort( compare );
      console.log("DATA after convert snapshot ", data);
      dispatch({ type: "SET_NOTES", value: data });
      resolve(snapshot.val());
    });
  });
};

export const addProductsDetail = data => dispatch => {
  database.ref("Products/" + data.productsId).push({
    imageUrl: data.imageUrl
  });
  console.log("result action ", data);
};

// Get data api using redux
export const getDetailProductImages = data => dispatch => {
  var urlNotes = firebase.database().ref("Products/" + data.category);
  urlNotes.on("value", function(snapshot) {
    // ubah object jadi Array
    const data = [];
    if (snapshot.val()) {
      Object.keys(snapshot.val() && snapshot.val()).map(key => {
        data.push({
          id: key,
          data: snapshot.val()[key]
          })
        });
    }
    // console.log("Nih buat sorting", data);
    dispatch({ type: "SHOW_MORE_IMAGE", value: data });
  });
};

export const deleteMainProduct = data => dispatch => {
  console.log("Deleted main product data", data);
  // Cannot delete the image when there is only one image left
  if (data.totalImage == "2") {
    alert("You must at least have one or more image for each category!");
  } else {
    database.ref("Products/" + data.category + "/" + data.productId).remove();
  }
};

export const addCategory = data => dispatch => {
  database.ref("Products/" + data.category).push({
    imageUrl: 'null'
  });
};

export const deleteCategory = data => dispatch => {
  if (data.category == "Arbor") {
    alert("Cannot delete your main product!");
  } else {
    database.ref("Products/" + data.category).remove();
  }
};

export const deleteDummy = data => dispatch => {
  console.log("Delete Dummy DATA ", data)
    // database.ref("Products/" + data.category).remove();
};

