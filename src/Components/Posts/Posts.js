import React,{useState,useEffect,useContext} from 'react'
import Heart from '../../assets/Heart'
import { FirebaseContext } from '../../Store/FirebaseContext'
import { PostContext } from '../../Store/PostContext'
import './Posts.css'
import {useHistory} from 'react-router-dom'

function Posts() {
    const {firebase}=useContext(FirebaseContext)
    const [products,setProducts]=useState([])
    const {setPostDetails}=useContext(PostContext)
    const History=useHistory()
    useEffect(()=>{
        firebase.firestore().collection('products').get().then((snapshot)=>{
            const allPost=snapshot.docs.map((product)=>{
                return{
                    ...product.data(),
                    id:product.id
                }

            },[])
            console.log(allPost);
            setProducts(allPost)
        })
    })
    return (
        <div className="postParentDiv">
            <div className="moreView">
                <div className="heading">
                    <span>Quick Menu</span>
                    <span>View More</span>
                </div>
                <div className="cards">
                    {products.map(product=>{


                   
                      return <div className="card" onClick={()=>{
                          setPostDetails(product)
                          History.push('view')

                      }}>
                        <div className="favorite">
                           <Heart></Heart> 
                        </div>
                        <div className="image">
                            <img src={product.url} alt="" />
                        </div>
                        <div className="content">
                            <p className="rate">&#x20B9; {product.price}</p>
                            <span className="kilometer">{product.category}</span>
                            <p className="name">{product.name}</p>
                        </div>
                        <div className="date">
                            <span>{product.createdAt}</span>
                        </div>
                    </div>
                    })
                    }
                </div>

            </div>
            <div className="recemendations">
                <div className="heading">
                    <span>Fresh recommendations</span>
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="favorite">
                           <Heart></Heart> 
                        </div>
                        <div className="image">
                            <img src="../../../Images/R15V3.jpg" alt="" />
                        </div>
                        <div className="content">
                            <p className="rate">&#x20B9; 250000</p>
                            <span className="kilometer">Two Wheeler</span>
                            <p className="name">YAMAHA R15V3</p>
                        </div>
                        <div className="date">
                            <span>Tue May 04 2021</span>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
 export default Posts
