import React from 'react'
import styled from 'styled-components';
import {db} from './firebase'
function Product( {title,price,rating,image,id}) {
    
    const addToCart=()=>{
        const cartItem=db.collection("CartItems").doc(id);
        cartItem.get().then((doc)=>{
            if(doc.exists){
                cartItem.update({
                   quantity:doc.data().quantity+1
                })
            }
            else{
                db.collection("CartItems").doc(id).set({
                    name:title,
                    image:image,
                    price:price,
                    quantity:1
    
                })
            }
        })
    
     
    }

    return (
         <Container>
           <Title>
           {title}
           </Title>
            <Price>
            {price}
            </Price>
            <Rating>
            {
                Array(rating).fill().map(rating=><p>⭐</p>)
            }
            </Rating>
            <ProductImage  src={image}/>
            <CartButtonContainer>
            <CartButton onClick={addToCart}>
                Add To Cart
            </CartButton>
            </CartButtonContainer>
            
        </Container>
    )
}
export default Product

const CartButtonContainer=styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`;

const Container=styled.div`
background:white;
height:350px;
width:300px;
z-index:100;
padding:20px;
margin :10px;
display:flex;
flex-direction:column;
`;

const Title=styled.span`
font-weight:700;
`;

const Price=styled.span`
display:flex;
font-weight:900;
margin:5px;
`;

const Rating=styled.div`
margin-bottom:5px;
display:flex;
`;

const ProductImage=styled.img`
max-height:200px;
margin-top:5px;
object-fit:contain;

`;

const CartButton=styled.button`
display:flex;
justify-content:center;
margin-top:12px;
width:100px;
height:22px;
background-color: #f0c14b;
border:2px solid #a88734;
border-radius:2px solid #a88734;
margin-bottom:15px;
cursor:pointer;
`;
