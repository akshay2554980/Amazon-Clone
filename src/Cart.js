import React from 'react'
import styled from 'styled-components';
import CartItems from './CartItems'
import CartTotal from './CartTotal'
function Cart({cartItems}) {
    const getTotalPrice=()=>{
        let total=0;
        cartItems.forEach(element => {
            total+=(element.product.price*element.product.quantity)
        });
        return total;
    }
    const getCount=()=>{
        let count=0;
        cartItems.forEach((item)=>{
            count+=item.product.quantity;
        })
        return count;
    }
    return (
        <Container>
            <CartItems cartItems={cartItems}/>
            <CartTotal  getCount={getCount} getTotalPrice={getTotalPrice}/>
            {/* here i am passing the function itself and using it 
            in the CartTotal */}
        </Container>
    )
}

export default Cart

const Container=styled.div`
display:flex;
padding:14px 18px 0px 18px;
align-items:flex-start;
${'' /* to make all the items align at the top 
and also take as much space that they want */}
`;
