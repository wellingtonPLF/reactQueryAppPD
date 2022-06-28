import { configureStore } from '@reduxjs/toolkit'
import usuarioReducer from './Reducer/usuarioReducer'
import decisionsReducer from './Reducer/decisionReducer'

const rootReducer = {
    usuarioRedux: usuarioReducer,
    decisionRedux: decisionsReducer
}

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})


export default store;