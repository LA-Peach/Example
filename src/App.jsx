import { useEffect, useState } from 'react'
import { API } from './api'

function App() {
  const [products, setProducts] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const load = async () => {
    try {
      const res = await API.get('/')
      setProducts(res.data)
    } catch (err) {
      console.error('Error loading products', err)
    }
  }

  const add = async () => {
    try {
      await API.post('/', { name, price })
      setName('')
      setPrice('')
      await load()
    } catch (err) {
      console.error('Error adding product', err)
    }
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <div style={{ margin: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Product List</h1>

      <div style={{ marginBottom: '1rem' }}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: '0.5rem' }}
        />
        <input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ marginRight: '0.5rem' }}
        />
        <button onClick={add}>Add Product</button>
      </div>

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} — ${p.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
