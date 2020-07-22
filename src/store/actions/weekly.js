import axios from "../../axios.orders";

export const initIngredients = () => {
  return (dispatch) => {
    axios
      .get("https://react-menu-planning.firebaseio.com/ ")
      .then((response) => {
        dispatch(setIngredients(response.data));
      })
      .catch((error) => {
        dispatch(fetchIngredientsFailed());
      });
  };
};
