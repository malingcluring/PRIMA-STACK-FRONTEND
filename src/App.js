import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';


function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<ProductList />} />
          <Route
            path='/add'
            element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
