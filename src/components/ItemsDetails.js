import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { items, sellers } from '../data';


const DivContainer= styled.div`
    display:flex;
    justify-content: center;
    margin: 20px;
    width: 80%;

    .description{
        display: flex;
        flex-direction: column;
        align-items: space-between;
        margin: 20px;
    }

    & h3{
        font-size: 32px;
        margin: 0;
    }
    & h4{
        font-size: 18px;
        color: gray;
        margin: 0 20px 20px 0;

    }

    & img{
        width: 400px;
        border-radius: 10px;
        margin: 10px
    }
    & button{
        padding: 10px;
        margin: 20px 0;
        border: none;
        border-radius: 10px;
        background-color: blue;
        color: white;
        font-size: 24px
    }

    & div{
        margin: 20px 0;
    }
    .seller{
        display: flex;
        align-items: center;
    
    }
    & .avatar{
        border-radius: 50%;
        width: 50px;
    }

    & a{
        text-decoration: none;
        color: black;
    }
`



const ItemsDetails = ()=>{

    const { itemId } = useParams();

        let item = items[itemId];
        let seller= sellers[item.sellerId];
        let inSotock = item.quantity > 0;
    return (

        
        <DivContainer>

            <img src={item.imageSrc}  alt='item'/>
            <div className='description'>
               <h3>{item.name}</h3>
                <h4><em>{item.latinName}</em></h4>
                <div>{item.description}</div>
                <div><em>Product of <strong>{item.countryOfOrigin}</strong></em></div>

                {inSotock ? (<button>${item.price} - Buy Now
                    </button>) : (<div>out of stock</div>)} 
                <div className='seller'>
                    <Link exact to= {`/sellers/${seller.id}`}>
                        <img className='avatar' src={seller.avatarSrc}  alt="sellerAvatar"/>
                        <span>Sold by: <strong>{seller.storeName}</strong></span>
                    </Link>
                    

                </div>
            </div>   
            
        </DivContainer>)

}

export default ItemsDetails;
