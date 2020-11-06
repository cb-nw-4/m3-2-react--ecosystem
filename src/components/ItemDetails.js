import React from 'react'; 
//import styled from 'styled-components';
import { items } from '../data';
import { sellers } from '../data';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const MainDiv = styled.div`
width: 100%; 
height: auto; 
display:flex; 
justify-content:center;
padding: 0% 15%;
`

const SubDiv = styled.div`
display:flex;
flex-direction:column;
flex:1; 
width: 100px;
& img { 
    width: 100%; 
    border-radius:10%;
    object-fit:cover;
    position: relative; 
}
& h1, h3, h2, p, button, div { 
    margin: 10px;
}
& h3{ 
    & i {
        color: gray;
        font-size: 15px;
    };
}
& h2 { 
    margin-top: 45px;
    font-size: 15px;
    font-weight:550;
}
p { 
    & i {
        font-size: 15px;
        color:gray; 
        font-weight:500;
    }; 
}
button { 
    background-color:#4700e0; 
    padding:15px;
    text-align:center; 
    margin: 10px;
    border-radius: 8px;
    color:white;
    font-size:20px;
    font-weight:600;
    border:none;
}
div { 
    display: flex; 
    align-items:center;
    & img { 
        width: 50px;
        border-radius:50%;
    };
}
`

const ItemDetails =()=> {
    // console.log(items,"items for Item details");
    // console.log(sellers,"sellers for Item details");
    const {itemId} = useParams(); 
    let sellerName = items[itemId]["sellerId"]; 
    const sellerNameCapitalized = sellerName.charAt(0).toUpperCase() + sellerName.slice(1); 
    let canBuy = `$${items[itemId]["price"]} - Buy Now`;
    const item = items[itemId];
    if (items[itemId]["quantity"]===0) {
        canBuy = "Out of stock";
    }; 
    return (
        <MainDiv>
            <SubDiv>
                <img src={item["imageSrc"]} alt={items.itemId} /> 
            </SubDiv>
            <SubDiv>
                <h1>{item["name"]}</h1>
                <h3><i>{item["latinName"]}</i></h3>
                <h2>{item["description"]}</h2>
                <p><i>Product of {item["countryOfOrigin"]}</i></p>
                <button>{canBuy}</button>
                <div>
                    <img src={sellers[item["sellerId"]]["avatarSrc"]} alt="seller avatar"/>
                    <p>Sold by: <strong>{sellers[item["sellerId"]]["storeName"]}, {sellerNameCapitalized}</strong></p>
                </div>
            </SubDiv>
        </MainDiv>
    ); 
};

export default ItemDetails; 
