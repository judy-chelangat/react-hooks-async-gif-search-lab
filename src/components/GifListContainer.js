import React from 'react'
import { useEffect,useState } from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

function GifListContainer(searchQuery) {
    const [gifs,setGifs]=useState([])
        //fetching the data from an api
     useEffect(()=>{
        fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=KoByBhBOKAE1yOZPZj5m6MaJg58jyIHI&rating=g")
        .then(res=>res.json())
        .then((data)=>{
            setGifs(data.data.slice(0,3))
            console.log(data)
            const firstThreeGifs = data.data.slice(0, 3);
            setGifs(firstThreeGifs);
             console.log(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
          });
        
    },[])
    function handleSubmit(searchQuery) {
        setGifs(searchQuery); // Fetch new GIFs based on the search query
      }

  return (
    <div>
          <GifSearch onAddItem={handleSubmit}/>
         <GifList gifs={gifs}/>
    
    </div>
  )
}

export default GifListContainer
//the GifListContainer will be responsible for fetching the data from the Giphy API, 
//storing the first 3 gifs from the response in its component state,
// and passing that data down to its child, the GifList component, as a prop.
//It will also render a GifSearch component that renders the form.
// GifListContainer should pass down a submit handler function to GifSearch as a prop.