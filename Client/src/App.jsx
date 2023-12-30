import './App.css'
import productos from '../products.json'

function App() {


  return (
    <div className='products'>
      {
        productos.map(prod => 
          <div className='product-card'>
            <img src={prod.image} alt={prod.name} className='prod-card-img' />
            <p>{prod.name}</p>
            <p>{`$ ${prod.price}`}</p>
          </div>
          )
      }
    </div>
  )
}

export default App
