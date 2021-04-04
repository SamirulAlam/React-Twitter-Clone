import React from 'react';
import "./Widgets.css";
import SearchIcon from '@material-ui/icons/Search';
import { TwitterTimelineEmbed,  TwitterTweetEmbed } from 'react-twitter-embed';


function Widgets() {
    return (
        <div className="widgets">
           <div className="widgets__input">
               <SearchIcon className="widgets__searchIcon" />
               <input placeholder="Search twitter" />
           </div>
           <div className="widgets__widgetContainer">
               <h2>What Is Happening</h2>
           </div>
           <div className="widgets__embedPost">
           <TwitterTweetEmbed tweetId={'1336713869654417408'} />
           </div>
           <TwitterTimelineEmbed
                sourceType="profile"
                screenName="MdSamirulAlam3"
                options={{height: 120}}
                />
            {/* <TwitterShareButton
            url={'https://facebook.com/mdsamirulalam.samir'}
            options={{ text: '#reactjs is awesome', via: 'MdSamirulAlam3' }}
            /> */}

        </div>
    )
}

export default Widgets