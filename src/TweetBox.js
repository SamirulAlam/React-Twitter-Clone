import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react';
import db from './firebase';
import "./TweetBox.css";
import firebase from 'firebase';

function TweetBox() {

    const [tweetMessage,setTweetMessage]=useState("");
    const [tweetImage,setTweetImage]=useState("");

    const sendTweet=e=>{
        e.preventDefault();

        db.collection("posts").add({
            displayName:"Md. Samirul Alam",
            username:"Samir",
            avatar:"https://avatars1.githubusercontent.com/u/50224886?s=460&u=643672c880852e2f093b0fcc35c0c3f7dc834e6a&v=4",
            verified:true,
            text:tweetMessage,
            image:tweetImage,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        
        })

        setTweetMessage("");
        setTweetImage("");
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://avatars1.githubusercontent.com/u/50224886?s=460&u=643672c880852e2f093b0fcc35c0c3f7dc834e6a&v=4" />

                    <input className="tweetBox__input" onChange={(e)=>setTweetMessage(e.target.value)} value={tweetMessage} type="text" placeholder="What is happening" />  
                </div>
                

                <input className="tweetBox__iamgeInput" onChange={(e)=>setTweetImage(e.target.value)} value={tweetImage} type="text" placeholder="Enter image url"  />            

                <Button type="submit" onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox