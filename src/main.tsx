import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import App from './app/App'
import store from './app/redux/store'
import { queryClient } from './app/shared/services/queryClient'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  //<React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
            <App/>
      </Provider>
    </QueryClientProvider>
  //</React.StrictMode>
)
