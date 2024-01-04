

  
export default function TableItem({item, setList}) {

  function setItemQuantity (value) {
    setList ((list) =>
      list.map((product) => {
        console.log(product)
        if (product.id === item.id) {
           return {
             ...product,
             quantity: product.quantity + value}
        }
        return product
        
      }
    ))
  }

  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>R$ {item.price }</td>
    
          <td>
            <button disabled={item.quantity <= 0} onClick={() => setItemQuantity(-1)}>-</button>

            <p id="count">{item.quantity}</p>

            <button onClick={() => setItemQuantity(1)}>+</button>

          </td>
          <td>R$ {(item.price * item.quantity).toFixed(2)}</td>
       
    </tr>
  )
}
