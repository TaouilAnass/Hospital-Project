import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Footer from './Footer'
import Navigator from './Navigator'
import User1 from './user1.jpg'
function Review() {
   const Users = useSelector((state ) => state.Users)
   const UserName = useParams().username
  return (
   <>
    {
      Users.map((e) => 
      e.Username === UserName ?
      <>
      <Navigator/>
      <section className="review mt-5 " id="Review">
 
 <h1 className="heading mt-5 pt-5"> client's <span>review</span> </h1>
 
 <div className="box-container">
 
 
    <div className="box">
         <img src={User1} alt="" />
         <h3>john deo</h3>
         <div className="stars">
             <i className="bi bi-star-fill"></i>
             <i className="bi bi-star-fill"></i>
             <i className="bi bi-star-fill"></i>
             <i className="bi bi-star-fill"></i>
             <i className="bi bi-star-fill"></i>
         </div>
         <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sapiente nihil aperiam? Repellat sequi nisi aliquid perspiciatis libero nobis rem numquam nesciunt alias sapiente minus voluptatem, reiciendis consequuntur optio dolorem!</p>
     </div>
 
     <div className="box">
         <img src={User1} alt="" />
         <h3>john deo</h3>
         <div className="stars">
             <i className="bi bi-star-fill"></i>
             <i className="bi bi-star-fill"></i>
             <i className="bi bi-star-fill"></i>
             <i className="bi bi-star-fill"></i>
             <i className="bi bi-star-half"></i>
         </div>
         <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sapiente nihil aperiam? Repellat sequi nisi aliquid perspiciatis libero nobis rem numquam nesciunt alias sapiente minus voluptatem, reiciendis consequuntur optio dolorem!</p>
     </div>
 
 </div>
 
 </section>
       <Footer/>
     </>: null
      )
    }
   </>
  )
}

export default Review