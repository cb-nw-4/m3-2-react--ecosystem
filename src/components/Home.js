import React from 'react';
import ListingGrid from './ListingGrid';


const Home = (props)=>{
    return (
        <>        
            <p>Fruit emporium sells the finest fruits from this world and beyond.</p>
            <h3>Browse items:</h3>       
            <ListingGrid itemList={Object.values(props.items)}/>
        </>

    )
}



export default Home;