import { RouterProvider } from 'react-router-dom';
import Router from './routes/Router/Router';
import 'react-photo-view/dist/react-photo-view.css';
import './App.css';
import './api/products';

function App() {
  return (
    <div>
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
