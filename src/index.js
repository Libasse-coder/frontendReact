import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MedicamentsContextProvider} from './context/MedicamentContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MedicamentsContextProvider>
    	<App />
    </MedicamentsContextProvider>
  </React.StrictMode>
);


