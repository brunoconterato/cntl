export const Types = {
  GET_REQUEST: 'month/GET_REQUEST',
  GET_SUCCESS: 'month/GET_SUCCESS',
  GET_FAILUIRE: 'month/GET_FAILUIRE',
};

const initialState = {
  data: {},
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return {...state, loading: true, error: null};
    case Types.GET_SUCCESS:
      return {...state, data: action.payload.data, loading: false, error: null};
    case Types.GET_FAILUIRE:
      return {...state, loading: false, error: action.payload.error};
    default:
      return state;
  }
}

export const Creators = {
  getRequest: ({id}) => ({
    type: Types.GET_REQUEST,
    payload: {id},
  }),
  getSuccess: ({data}) => ({
    type: Types.GET_SUCCESS,
    payload: {data},
  }),
  getFailure: (error) => ({
    type: Types.GET_FAILUIRE,
    payload: {error},
  }),
};
