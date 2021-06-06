export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (data) => ({ type: GET_PICTURE, data });

export function fetchAPI() {
  // Desenvolva aqui o código da action assíncrona
  //por que o e como ele tem acesso ao dispatch daqui?
  return (dispatch) => {
    dispatch(requestAPI())
    fetch('https://aws.random.cat/meow')
      .then(data => data.json())
      .then(({file}) => dispatch(getPicture(file)));
  }
}
