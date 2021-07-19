import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RoomIcon from '@material-ui/icons/Room';
import { Link } from 'react-router-dom'
function Header({cartItems}) {

const getCount=()=>{
    let count=0;
    cartItems.forEach((item)=>{
        count+=item.product.quantity;
    })
    return count;
}
    return (
        <Container>  
         <Link to="/home">
            <HeaderLogo>
                <img src={"http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"} alt="not available"/>
            </HeaderLogo>   
        </Link>
         
            <HeaderOptionAddress>
                <RoomIcon />
                <NavOptions>
                    <OptionLineOne>Hello</OptionLineOne>
                    <OptionLineTwo>Select Your Address</OptionLineTwo>                
                </NavOptions>
            </HeaderOptionAddress>
            <HeaderSearch>
                <HeaderSearchInput type='input'>

                </HeaderSearchInput>
                <HeaderSearchIcon>
                <SearchIcon/>                                
                </HeaderSearchIcon>
            </HeaderSearch>
            <ContainerNavItems>
            <NavOptions>
                <OptionLineOne>Hello, Akshay</OptionLineOne>
                <OptionLineTwo>Accounts & Lists</OptionLineTwo>
            </NavOptions>
            <NavOptions>
                <OptionLineOne>Returns</OptionLineOne>
                <OptionLineTwo>& Orders</OptionLineTwo>
            </NavOptions>

            
            
            <HeaderOptionCart>
            <Link to="/cart">
            <ShoppingCartIcon />
            <CartCount>{getCount()}</CartCount>
            </Link>
            </HeaderOptionCart>
            
        
            
            </ContainerNavItems>

        </Container>
    ); 
}
export default Header;
// these styled div are basically styling via js..
//styled div basically creates a div.

const Container = styled.div`
height:60px;
background-color:#0F1111;
display:flex;
align-items:center;
color:white;
justify-content:space-between;  
`;

const HeaderLogo = styled.div`
img{
    width:100px;
    margin-top:20px;
    margin-left:8px;
}
`;

const HeaderOptionAddress=styled.div`
padding-left:9px;
display:flex;
align-items:center;
`;

const OptionLineOne=styled.div`

`;
const OptionLineTwo=styled.div`
font-weight:700;
`;
const HeaderSearchInput=styled.input`
flex-grow:1;
height:40px;
border:0px;
`;
const HeaderSearch=styled.div`
display:flex; 
flex-grow:1;
height:40px;
border-radius:4px;
overflow:hidden;
align-items:center;
margin-left:5px;
background-color:white;
:focus-within{
box-shadow:0 0 0 3px #F90;
}
`;
const HeaderSearchIcon=styled.div`
background-color:#febd69;
width:45px;
height:40px;
display:flex;
justify-content:center;
align-items:center; 
`;
const ContainerNavItems=styled.div`
display:flex;
`;

const NavOptions=styled.div`
padding:10px 9px 10px 9px;
`;
const HeaderOptionCart =styled.div`
display:flex;
align-items:center;
a {
    display:flex;
    align-items:center;
    text-decoration:none;
    color:white;
}
`;
const CartCount=styled.div`
padding-left:9px;
padding-right:9px;
`;


