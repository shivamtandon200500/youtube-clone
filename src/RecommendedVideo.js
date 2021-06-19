import React from 'react'
import "./RecommendedVideo.css"
import VideoCard from "./VideoCard"
import img1 from "./images/img1.webp"
import img2 from "./images/img2.webp"
import img3 from "./images/img3.webp"
import img4 from "./images/img4.webp"
import img5 from "./images/img5.webp"
import img6 from "./images/img6.webp"
import img7 from "./images/img7.webp"
import img8 from "./images/img8.webp"
function RecommendedVideo() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard 
                image={img1} 
                title="Fastest Revive P.1"
                channel="Ashhbyy TV"
                view="455,386 views" 
                timestamp="Mar 5, 2021"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwni1dhTNSFA53gU2m41r69NqMehh_duQ2ruZ1c5wDg=s88-c-k-c0x00ffffff-no-rj"/>
                <VideoCard 
                image={img2}
                title="CRINGE MOMENTS WITH  AMITABH BACHCHAN"
                channel="Tanmay Bhat"
                view="171,220 views"
                timestamp="Jan 18, 2020"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwngHwhYgvm9O-76ZUvxP9JLhLrC8Q-XEzg31HPCQ3A=s88-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard
                image={img3}
                title="Aaj Bhi | Vishal Mishra | VYRL Originals | Studio Version"
                channel="Vishal Mishra"
                view="1,290,859 views"
                timestamp="May 15, 2020"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnhBhJ5dy90kPdBtF1QwOuaGpN71WYA77_1uZkYYSQ=s88-c-k-c0x00ffffff-no-rj-mo"
                />
                <VideoCard
                image={img4}
                title="Real Day in Life of a 22 yr Old Software Engineer! 2020 Edition"
                channel="Singh in USA"
                view="1,300,898 views"
                timestamp="Dec 23, 2020"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwngMyo6TcEV9l15uN7DOd7RHMQiB3Yrmt7JHpbfHJQ=s88-c-k-c0x00ffffff-no-rj" 
                />
                <VideoCard
                image={img5}
                title="Mock Coding Interview with incoming SDE at Microsoft"
                channel="Keerti Purswani"
                view="21,444 views"
                timestamp="May 31, 2021"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnh5vmqtE30oad_D52BSIl6_XzW7jtw6A95T5Pty1sk=s88-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard
                image={img6}
                title="Mind Reading Magic with @Triggered Insaan | Suhani Shah"
                channel="Suhani Shah"
                view="2,892,534 views"
                timestamp="Jan 8, 2021"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwni1LiwkKEtJ37vfY7yjb0FlQqab3z6RZmYk28hO0g=s176-c-k-c0x00ffffff-no-rj-mo"
                />
                <VideoCard
                image={img7}
                title="Shreya Ghoshal - Hasi Ban Gaye (Aanvi)"
                channel="The Voice Kids"
                view="801,138 views"
                timestamp="Apr 9, 2021"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwngw4M0WSQRLgq59fJTmbeQqUo5PwBEK1dUXU-Gy=s88-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard
                image={img8}
                title="Money Heist Season 5 l La Casa de Papel saison 5"
                channel="Wid Mike"
                view="208,449 views"
                timestamp="Jun 6, 2021"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnivN-PMMY1H0fiWgqp9AKAfsSjMA7255XYX6NlTPA=s88-c-k-c0x00ffffff-no-rj"
                />
            </div>
        </div>
    )
}

export default RecommendedVideo
