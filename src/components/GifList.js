import React from 'react'

function GifList({gifs}) {

  return (
    <div>
      <ul>
       {  gifs.map((gif)=>{
        return(
            <li><img src={gif.images.original.url} alt='animal1'/></li>
        )
    })} 
      </ul>
    </div>
  )
}

export default GifList
//GifList receives data from its props and renders html given the input data. 
//It can render a top level <ul> with each gif as an <li>.