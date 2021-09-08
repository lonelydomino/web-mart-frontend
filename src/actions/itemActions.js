export const fetchItems = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_ITEMS'})
      fetch('https://web-mart-portfolio.herokuapp.com/items')
      .then(resp => resp.json())
      .then( json => {
        dispatch({ type: 'ADD_ITEMS', items: json})
      })
    }
  }
