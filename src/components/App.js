import { getProducts } from '../api.js';
import ProductList from './ProductList.js';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  const handleLoadClick = async () => {
    const { list } = await getProducts();
    setItems(list);
  }

  return (
    <div>
      <ProductList items={items} />
      <button onClick={handleLoadClick}>불러오기</button>
    </div>
  );
}

export default App;
