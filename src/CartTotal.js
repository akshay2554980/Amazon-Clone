import React from 'react'
import styled from 'styled-components';
import NumberFormat from 'react-number-format';
function CartTotal({getCount,getTotalPrice}) {
    return (
        <Container>

            <SubTotal><h2>Subtotal({getCount()} Items): <NumberFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h2></SubTotal>
            <CheckOutButton>
            Proceed to checkout
            </CheckOutButton>
        </Container>
    )
}

export default CartTotal
const Container=styled.div`
background-color:white;
flex:0.3;
padding:20px;

`;
const SubTotal=styled.div`
margin-bottom:16px;
`;
const CheckOutButton=styled.div`
background-color:#f0c14b;
width:80%;
padding:4px 8px;
display:flex;
justify-content:center; 
border:2px solid #a88734;
border-radius:4px;
cursor:pointer;
font-size:16px;
:hover{
    background:#ddb347;
}
`;