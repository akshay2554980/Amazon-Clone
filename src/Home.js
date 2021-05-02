import React from 'react'
import styled from 'styled-components';
import Product from './Product';
import {db} from './firebase';
import { useState,useEffect} from 'react';
function Home() {
    const [products,setproducts]=useState([]);
    const getProducts=()=>{
        db.collection('products').onSnapshot((snapshot)=>{
            //let tempproducts=[];
            let tempproducts=snapshot.docs.map((doc)=>
            ({
                id:doc.id,
                product:doc.data()
            }
            ));

            setproducts(tempproducts);
       
        });
    }

    useEffect(()=>{
        getProducts();
    },[])
 //   console.log(products);

    return (
       <Container>
        <Banner>

        </Banner>
        <Content>
        {
            products.map((data)=>(
                <Product
                    title={data.product.name}
                    price={data.product.price}
                    rating={data.product.rating}
                    image={data.product.image}
                    id={data.id}
                />
            ))
        }
        </Content>
       </Container>
    )
}

export default Home
const Container=styled.div`
max-width:1500px;
margin:0 auto;
`;
const Banner=styled.div`
background-image: url('https://i.imgur.com/SYHeuYM.jpg');
min-height:500px;
background-size:cover;
mask-image:linear-gradient(to bottom,rgba(0,0,0,1),rgba(0,0,0,0)); 
display:flex;
justify-items:center;
background-positon:center;

`;
const Content=styled.div`

padding-left:10px;
padding-right:10px;
margin-top:-225px;
display:flex;
z-index:100;
`;
