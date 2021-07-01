import React,{useEffect,useState,useContext} from "react";
import { FirebaseContext } from "../../Store/FirebaseContext";
import { PostContext } from "../../Store/PostContext";
import "./View.css";

function View() {
    const [userDetails,setUserDetials]=useState()
    const {postDetails}=useContext(PostContext)
    const {firebase}=useContext(FirebaseContext)
    useEffect(()=>{
        const {userId}=postDetails
        firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
            res.forEach(doc => {
                setUserDetials(doc.data())
                
            });
        })
    },[])
    return (
        <div className="viewParentDiv">
            <div className="imageShowDiv">
                <img src="" alt="" />
            </div>
            <div className="rightSection">
                <div className="productDetials">
                    <p>&#x20B9;  </p>
                    <span>YAMAHA R15V3</span>
                    <p>Two Wheeler</p>
                    <span>Tue May 04 2021</span>
                </div>
               {userDetails && <div className="contactDetials">
                    <p>Seller details</p>
                    <p>{userDetails.username}</p>
                    <p>{userDetails.phone}</p>
                </div>}
            </div>
        </div>
    );
}

export default View;
