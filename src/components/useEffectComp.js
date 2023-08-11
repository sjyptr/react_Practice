import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function UseEffectComp() {
  const [state, setState] = useState([])
  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((result) => {
      if (result.status === 200) {
        setState(result.data.products)
      }

      console.log('result=>>>:', result.data.products);
    }).catch((err) => console.log('error', err))
  }, [])
  return (
    <div>

      <table>
        <tr>
          <th>Image</th>
          <th>title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Discount</th>
          <th>Rating</th>
          <th>Brand</th>
          <th>Category</th>
        </tr>

        {
          state.map(item => {
            return (
              <tr>
                <td>
                  <img src={item.thumbnail} height={50} width={50} />
                </td>
                <td>
                  {item.title}
                </td>
                <td>
                  {item.description}
                </td>
                <td>
                  {item.price}
                </td>
                <td>
                  {item.discountPercentage}
                </td>
                <td>
                  {item.rating}
                </td>
                <td>
                  {item.brand}
                </td>
                <td>
                  {item.category}
                </td>
              </tr>
            )
          })}

      </table>
    </div>
  )
}
