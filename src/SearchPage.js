import React from 'react'
import "./SearchPage.css"
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from "./ChannelRow"
import VideoRow from "./VideoRow"

import simg1 from "./images/simg1.webp"
import simg2 from "./images/simg2.webp"
import simg3 from "./images/simg3.webp"
import simg4 from "./images/simg4.webp"
import simg5 from "./images/simg5.webp"
function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
            <TuneOutlinedIcon/>
            <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow
            image="https://yt3.ggpht.com/ytc/AAUvwngHwhYgvm9O-76ZUvxP9JLhLrC8Q-XEzg31HPCQ3A=s176-c-k-c0x00ffffff-no-rj-mo"
            channel="Tanmay Bhat"
            verified
            subs="3.11M"
            noOfVideos={361}
            description="That AIB guy"
            />
            <hr/>
            <br/>
            {/* 1 */}
            <VideoRow
            views="11,970,352"
            subs="3.11M"
            description={`Follow me on Instagram: https://instagram.com/tanmaybhat
                         Follow me on my Discord: https://discordapp.com/invite/6Jf4de9
                         Submit your memes on Reddit: https://www.reddit.com/r/TanmayBhatKe...`}
            timestamp="Premiered Mar 12, 2020"
            channel="Tanmay Bhat"
            title="He Didn't See This Coming (10 Mil Surprise) @CarryMinati - VLOG 20"
            image={simg1}    
            />
{/* 2 */}
            <VideoRow
            views="7,989,414"
            subs="3.11M"
            description={`Check out my second channel: https://www.youtube.com/honestlybytan... 
                          Follow me on Instagram: https://instagram.com/tanmaybhat`}
            timestamp="Premiered Jul 4, 2020"
            channel="Tanmay Bhat"
            title="GOODBYE TIKTOK 🙏🙏"
            image={simg2}   
            />
{/* 3 */}
            <VideoRow
            views="7,350,003"
            subs="3.11M"
            description={`Indian education system wasn't prepared for this.
                          Follow me on Instagram: https://instagram.com/tanmaybhat`}
            timestamp="Premiered Apr 27, 2020"
            channel="Tanmay Bhat"
            title="ONLINE CLASSES GONE WRONG"
            image={simg3}    
            />
{/* 4 */}
            <VideoRow
            views="7,464,326"
            subs="3.11M"
            description={`Check out my second channel: https://www.youtube.com/honestlybytan... 
                          Follow me on Instagram: https://instagram.com/tanmaybhat`}
            timestamp="Premiered Jul 6, 2020"
            channel="Tanmay Bhat"
            title="MUMMY PAPA PITAI REVIEW #2"
            image={simg4}   
            />
        {/* 5 */}
        <VideoRow
            views="1,406,235 views"
            subs="3.11M"
            description={`Check out my second channel: https://www.youtube.com/honestlybytan... 
                          Follow me on Instagram: https://instagram.com/tanmaybhat`}
            timestamp="Premiered May 25, 2021"
            channel="Tanmay Bhat"
            title="WE GOT VACCINATED - VLOG 75"
            image={simg5}  
            />
        </div>
    )
}
export default SearchPage
