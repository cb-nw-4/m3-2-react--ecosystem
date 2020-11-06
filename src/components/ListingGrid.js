import React from 'react'; 
import styled from 'styled-components';  
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListingGridDiv = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
margin-top: 30px;
padding: 5px 50px;
`

const ItemDiv = styled.div`
width:24%;
margin: 30px;
border-radius:15%;
box-shadow:0px 0px 19px 3px rgba(177,177,177,0.3);
display: flex;
flex-direction:column;
align-items:center;
position: relative; 
& img { 
    width: 60%; 
    height:auto;
    object-fit: cover;
    border-radius:10%;
    position: relative;     
    top:-20px;
};
& p { 
    color:grey; 
    padding-bottom:20px;
    & i { 
        font-size: 15px;
        font-weight:bold;
    };
};
`

const StyledLinks = styled(Link)`
text-decoration:none; 
margin: 0px; 
font-size: 20px; 
padding-bottom: 20px;
border-bottom: 2px solid rgba(177,177,177,0.3);
color:black;
font-weight:bold;
&:hover { 
    transform: scale(1.1);
    color:red;
}
`


const ListingGrid = ({ itemList }) => {
    // console.log(itemList,"Item List");
    return (
        <ListingGridDiv>
            {itemList.map((item,index)=> {
                return (
                    <ItemDiv key={item.id} id={item.id}> 
                        <img src={item.imageSrc} alt={"img of "+item.name}/>
                        <StyledLinks to={`/items/${item.id}`}>{item.name}</StyledLinks>
                        <p><i>{item.latinName}</i></p>
                    </ItemDiv>
                );
            })}
        </ListingGridDiv>
    );
};

ListingGrid.propTypes = {
    itemList: PropTypes.arrayOf(
        PropTypes.shape({
        name: PropTypes.string.isRequired,
        latinName: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
    })
    ).isRequired,
};

export default ListingGrid;