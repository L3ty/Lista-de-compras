import React, { useEffect, useState } from 'react'
import { getFoodItems } from '../services/FoodService';
import TableItem from './TableItem';
import TotalAmount from './TotalAmount';

export default function Table() {
    const [foodItems, setFoodItems] = useState([]);

    useEffect(() => {
        getFoodItems().then((response) => {
          setFoodItems(response.data.map(food => {
            return {
            id: food.id,
            name: food.name,
            price: food.price,
            quantity:0,
            }
          }))
        })
    }, [])

    const totalAmount = foodItems.reduce(
      (accumulator, currentValue) => 
      accumulator + currentValue.quantity * currentValue.price, 0)
   
    return (
      <div id='main'>
          <TotalAmount total={ totalAmount } />
          <div id='main-body'>
          <h1>Meu Carrinho de Compras</h1>
          <table>
            <thead>
              <tr>
                <td>Id</td>
                <td>Nome</td>
                <td>Preço</td>
                <td>Quantidade</td>
                <td>Preço total</td>
              </tr>
            </thead>
            
            <tbody>
              {foodItems.map((item) => {
                return <TableItem item={item} 
                setList={setFoodItems} />
              })}
            </tbody>
          </table>
      </div>
     </div>
    )
}
