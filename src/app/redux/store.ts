import { configureStore } from '@reduxjs/toolkit'
import usuarioReducer from './Reducer/usuarioReducer'
import decisionReducer from './Reducer/decisionReducer'

const rootReducer = {
    usuarioRedux: usuarioReducer,
    decisionRedux: decisionReducer
}

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})


export default store;