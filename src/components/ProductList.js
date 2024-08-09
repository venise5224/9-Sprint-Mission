function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth()}. ${date.getDate()}`;
}

function ProductListItem ({item}) {
  return (
    <div>
      <img src={item.imgages} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        <p>{item.rating}</p>
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
      </div>
    </div>
  )
}

function ProductList({ items }) {
    return (
      <ul>
        {items.map((item) => {
          return (
            <li>
              <ProductListItem item={item} />
            </li>
          );
        })}
      </ul>
    );
  }
  
  export default ProductList;