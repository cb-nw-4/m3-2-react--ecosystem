import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { items, sellers } from '../data';

const DivContainer= styled.div`
    display:flex;
    justify-content: center;
    margin: 20px;
    width: 80%;

    & img{
        width: 300px;
        border-radius: 10px;
        margin: 10px
    }
    .description{
        display: flex;
        flex-direction: column;
        align-items: space-between;
        margin: 20px;
    }

    & a{
        text-decoration: none;
        color: green;
    }


    & h3{
        font-weight: normal;
        color: black;
    }
    
    & h4{
        margin-top: 0;
        color: gray;
        margin-bottom: 30px;
  }


& ul{
    margin-top: 0;
    padding-left: 10px;
}
  & li{
    list-style: none;
    margin-top: 5px;  
    font-size: 20px;
  }


  & span{
      color: gray;
      margin: 20px;
  }

  & button{
      padding: 5px;
      margin-left: 20px;
      background-color: blue;
      color: white;
      font-size: 20px;
      border: none;
      border-radius: 5px;
  }




`



const SellersDetails =() =>{

    const { sellerId } = useParams();

    
    let seller= sellers[sellerId];

    let values = Object.values(items);
    

    return (
        <DivContainer>
            <img src={seller.avatarSrc} alt='seller'/>
            <div className='description'>
                <h3>Name: <strong>{seller.id} </strong></h3>
                <h4>{seller.storeName}</h4>
                <div>{seller.description}</div>
                <h3>List of items: </h3>
                <ul>{values.map(item => {
                    if(item['sellerId'] === sellerId){
                        return <li>
                            <Link to= {`/items/${item.id}`}>

                            {item['name']}  

                            { item['quantity'] > 0 ? 
                                (<button>${item['price']} - Buy Now</button>) : (
                                <span> out of stock</span>)} 

                            </Link>
                            </li>}})}
                </ul>
                    
            </div>
            
                    

            
            </DivContainer>);

    }


export default SellersDetails;