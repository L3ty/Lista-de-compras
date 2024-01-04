import React from 'react'

export default function TotalAmount({total}) {
  return (
    <div id='total-amount'>Você já gastou R$ {total.toFixed(2)}!</div>
  )
}
