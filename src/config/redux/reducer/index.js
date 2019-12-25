const initialState = {
  popup: false,
  isLogin: false,
  isLoading: false,
  user: {},
  errorMessage: '',
  notes: [],
  detailProducts: []
}

const reducer = (state = initialState, action) => {
  if (action.type === 'CHANGE_POPUP') {
    return {
      ...state,
      popup: action.value
    }
  }

  if (action.type === 'CHANGE_ISLOGIN') {
    return {
      ...state,
      isLogin: action.value
    }
  }

  if (action.type === 'CHANGE_USER') {
    return {
      ...state,
      user: action.value
    }
  }

  if (action.type === 'CHANGE_LOADING') {
    return {
      ...state,
      isLoading: action.value
    }
  }

  if (action.type === 'SHOW_ERRORMESSAGE') {
    return {
      ...state,
      errorMessage: action.value
    }
  }

  if (action.type === 'SET_NOTES') {
    return {
      ...state,
      notes: action.value
    }
  }

  if (action.type === 'SAVE_DETAIL_PRODUCTS') {
    return {
      ...state,
      detailProducts: action.value
    }
  }

  return state;
}

export default reducer;