import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import {Provider} from 'react-redux'
import Appstore from './Constants/AppStore.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Appstore}>
      <App />
    </Provider>
  </StrictMode>,
)
