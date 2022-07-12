import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import greetingsReducer from './greetings/greetings'
import { composeWithDevTools } from 'redux-devtools-extension'


const rootReducer = combineReducers({
	greetings: greetingsReducer
})

const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
)
export default store;
