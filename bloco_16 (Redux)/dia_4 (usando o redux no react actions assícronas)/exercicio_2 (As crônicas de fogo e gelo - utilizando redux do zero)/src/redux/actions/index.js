import charAPI from '../../services/charAPI'

export const LOADING = 'LOADING';
export const SUCESS_GET_CHARECTER = 'SUCESS_GET_CHARECTER';
export const FAIL_GET_CHARECTER = 'FAIL_GET_CHARECTER';

const loading = () => ({
  type: LOADING,
})

const actionSucessReques = (data) => ({
  type: SUCESS_GET_CHARECTER,
  lodingIsTrue: false,
  data,
})

const actionFailReques = (msgError) => ({
  type: FAIL_GET_CHARECTER,
  lodingIsTrue: false,
  msgError,
})

export const getCharacter = (name) => (dispatch) => {

  dispatch(loading);
  charAPI(name)
    .then((data) => {
      console.log(data.length);
      if (data.length > 0) {
        dispatch(actionSucessReques(data[0]))
      } else {
        dispatch(actionFailReques("Nome não encontrado"))
      }
    })
    .catch((erro) => dispatch(actionFailReques("Erro: " + erro.message)))
}

// dispatch(actionSucessReques(data[0]))
//  dispatch(actionFailReques(erro.message))
