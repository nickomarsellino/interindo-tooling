import firebase, {database} from '../../firebase';

export const actionUserName = () => (dispatch) => {
    setTimeout(() => {
        return dispatch({ type: 'CHANGE_USER', value: 'Raissa' })
    }, 1500)
}


export const loginUserAPI = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({ type: 'CHANGE_LOADING', value: true })
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then(res => {
                console.log("Response ", res);
                const userData = {
                    email: res.user.email,
                    uid: res.user.uid,
                    emailVerified: res.user.emailVerified,
                    refreshToken : res.user.refreshToken
                }
                // Set isLoading jadi false lagi setelah selesai
                dispatch({ type: 'CHANGE_LOADING', value: false })
                dispatch({ type: 'CHANGE_ISLOGIN', value: true })
                dispatch({ type: 'CHANGE_USER', value: userData })
                resolve(userData)
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
                dispatch({ type: 'CHANGE_LOADING', value: false })
                dispatch({ type: 'CHANGE_ISLOGIN', value: false })
                dispatch({ type: 'SHOW_ERRORMESSAGE', value: errorMessage})
                reject(false)
            })
    })
}

// Post API from Dashboard -> Ini contoh yang pake redux yang bikin reducer dulu
export const addDataToAPI = (data) => (dispatch) => {
    database.ref('Productssssss/' + data.userId).push({
        title: data.title,
        content: data.content,
        Info : {
            createdDate: data.createdDate,
            createdBy: data.userId
        }
    })
    console.log("result action ", data)
}

// Get data api using redux
export const getDataFromAPI = (userId) => (dispatch) => {
    // var urlNotes = firebase.database().ref('Products/' + userId);
    // return new Promise((resolve, reject) => {
    //     urlNotes.on('value', function(snapshot) {
    //         // ubah object jadi Array
    //         const data = [];
    //         Object.keys( (snapshot.val()) &&  snapshot.val()).map(key => {
    //             data.push({
    //                 id: key,
    //                 data: snapshot.val()[key]
    //             })
    //         })
    //         console.log("Data pas getAPI ", data)
    //         dispatch({type: 'SET_NOTES', value: data})
    //         resolve(snapshot.val())
    //     });
    // })
}
