import getGreetings from "../services/greetingServices";

const GET_GREETINGS = 'rails-react/greetings/GET_GREETINGS'

const inititalState = []

export const getGreetingList = () => async (dispatch) => {
	const result = await getGreetings()
  return dispatch({
    type: GET_GREETINGS,
    payload: result
	})
}

const greetingsReducer = (state = inititalState, action) => {
	const { payload } = action
	switch (action.type) {
		case GET_GREETINGS:
			return payload
	}
	return state
}

export default greetingsReducer;