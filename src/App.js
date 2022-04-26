import './App.css';
import { BrowserRouter } from "react-router-dom";
import RoutesApp from './routes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer autoClose={3000}/>
        <RoutesApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
