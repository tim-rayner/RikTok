import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import VideoCard from "./components/VideoCard";
import BottomNavbar from "./components/BottomNavbar";
import TopNavbar from "./components/TopNavbar";
import RikProfilePic from "./assets/ric_profile_picture.jpeg";

import RicPhoto1 from "./assets/pictures/1.jpg";
import RicPhoto2 from "./assets/pictures/2.jpg";
import RicPhoto3 from "./assets/pictures/3.jpg";
import RicPhoto4 from "./assets/pictures/4.jpg";
import RicPhoto5 from "./assets/pictures/5.jpg";
import RicPhoto6 from "./assets/pictures/6.jpg";
import RicPhoto7 from "./assets/pictures/7.jpg";
import RicPhoto8 from "./assets/pictures/8.jpg";
import RicPhoto9 from "./assets/pictures/9.jpg";
import RicPhoto10 from "./assets/pictures/10.jpg";

// This array holds information about different videos
const videoUrls = [
  {
    url: RicPhoto1,
    profilePic: RikProfilePic,
    username: "Riccardo",
    description: "Some funny caption 1",
    song: "Ric FM - Ric Pestano",
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
  },
  {
    url: RicPhoto2,
    profilePic: RikProfilePic,
    username: "Ricster",
    description: "Some funny caption 1",
    song: "Ric FM - Ric Pestano",
    likes: "13.4K",
    comments: 3121,
    saves: 254,
    shares: 420,
  },
  {
    url: RicPhoto3,
    profilePic: RikProfilePic,
    username: "Ric Pestano",
    description: "Some funny caption 1",
    song: "Ric FM - Ric Pestano",
    likes: 5438,
    comments: 238,
    saves: 12,
    shares: 117,
  },
  {
    url: RicPhoto4,
    profilePic: RikProfilePic,
    username: "Code Daddy",
    description: "Some funny caption",
    song: "Ric FM - Ric Pestano",
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
  {
    url: RicPhoto5,
    profilePic: RikProfilePic,
    username: "Just Ric",
    description: "Some funny caption",
    song: "Ric FM - Ric Pestano",
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
  {
    url: RicPhoto6,
    profilePic: RikProfilePic,
    username: "Ric",
    description: "Some funny caption 1",
    song: "Ric FM - Ric Pestano",
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
  {
    url: RicPhoto7,
    profilePic: RikProfilePic,
    username: "Ric",
    description: "Some funny caption",
    song: "Ric FM - Ric Pestano",
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
  {
    url: RicPhoto8,
    profilePic: RikProfilePic,
    username: "Riccardo",
    description: "Some funny caption",
    song: "Ric FM - Ric Pestano",
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
  {
    url: RicPhoto9,
    profilePic: RikProfilePic,
    username: "Ric",
    description: "Some funny caption",
    song: "Ric FM - Ric Pestano",
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
  {
    url: RicPhoto10,
    profilePic: RikProfilePic,
    username: "Riccardo",
    description: "Some funny caption",
    song: "Ric FM - Ric Pestano",
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
];

function App() {
  const [videos, setVideos] = useState([]);
  const videoRefs = useRef([]);

  useEffect(() => {
    setVideos(videoUrls);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8, // Adjust this value to change the scroll trigger point
    };

    // This function handles the intersection of videos
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // const videoElement = entry.target;
          // videoElement.play();
        } else {
          // const videoElement = entry.target;
          // videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    // We observe each video reference to trigger play/pause
    videoRefs.current.forEach((videoRef) => {
      observer.observe(videoRef);
    });

    // We disconnect the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, [videos]);

  // This function handles the reference of each video
  const handleVideoRef = (index) => (ref) => {
    videoRefs.current[index] = ref;
  };

  return (
    <div className="app">
      <div className="container">
        <TopNavbar className="top-navbar" />
        {/* Here we map over the videos array and create VideoCard components */}
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            username={video.username}
            description={video.description}
            song={video.song}
            likes={video.likes}
            saves={video.saves}
            comments={video.comments}
            shares={video.shares}
            url={video.url}
            profilePic={video.profilePic}
            setVideoRef={handleVideoRef(index)}
            autoplay={index === 0}
          />
        ))}
        <BottomNavbar className="bottom-navbar" />
      </div>
    </div>
  );
}

export default App;
