
import { useEffect, useState } from 'react'
import "./App.css"

const App = () => {
  const[data,setData]=useState([])
  const[imagepath,setImagepath]=useState()
  const[search,setSearch]=useState("")
  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=41083254-b7601573ffd4f01d8eec801e7&q=${search}&image_type=photo`)
    .then(res=>res.json())
    .then(d=>setData(d.hits))


  })
  return (
    <section>
      <div className="top">
      <nav className='navbar'>
        <div className="logo">
          <p>Pixabay</p>
        </div>
      
      <div className="buttons">
        
       
        </div>
      
       
      </nav>
      <div className="home">
      <div className="inner">
      <h1>Stunning royalty-free images & royalty-free stock</h1>
      <h2>Over 4.2 million+ high quality stock images, videos and music shared by our talented community.</h2>
      <span className="searchbar">
        <span><i className='fa fa-search'></i></span>
        <span><input type="text" placeholder="Search for all images on Pixabay" onChange={(e)=> setSearch(e.target.value)}></input></span>

        <span className='btn'  id='allimg' >All images<i className='fa fa-angle-down'></i></span>
      </span>
      </div>
      </div>
      <span className="bottom">
        <span>Read more about the Content License</span>
        <span>Free image by Mylene2401</span>
      </span>
      </div>
      <div className="category">
        <div className="div1">
          <span className="btn3"><i className='fa fa-home'></i>&nbsp;&nbsp; Home</span>
          <span className="btn3"><i className='fa fa-camera'></i>&nbsp;&nbsp; Photos</span>
          <span className="btn3"><i class="fa-solid fa-paintbrush"></i>&nbsp;&nbsp; Illustrations</span>
          <span className="btn3"><i class="fa-solid fa-pen-nib"></i>&nbsp;&nbsp; Vectors</span>
          <span className="btn3"><i class="fa-solid fa-video"></i>&nbsp;&nbsp; Videos</span>
          <span className="btn3"><i class="fa-solid fa-music"></i>&nbsp;&nbsp; Music</span>
          <span className="btn3"><i className="fa-solid fa-bars-staggered"></i>&nbsp;&nbsp; Sound Effects</span>
          <span className="btn3"><i className="fa-solid fa-fire-flame-curved"></i>&nbsp;&nbsp; GIFs</span>
        </div>
        <div className="div2">
          
          <span className="btn4">Editor's Choice&nbsp;&nbsp;<i className="fa-solid fa-angle-down"></i></span>

        </div>
      </div>
     
    <div className="photo grid gap-3 sm:grid-cols-2 md:grid-cols-3 ">
      
      {
        data.map((x)=>{
          return(
            <div key={x.id} onClick={()=>{
              setImagepath(x.webformatURL)
            }}>
              
              <img src={x.webformatURL} height={x.webformatHeight} width={x.webformatWidth}></img>
              

            </div>
            

            
          )
        })
      }

      
    </div>
    <div className="popup-image" style={{display:imagepath? 'block' : 'none'}}>
      <span onClick={()=>setImagepath(null)}>&times;</span>
      {
        <img src={imagepath}/>
      }

    </div>
    </section>
  )
}

export default App