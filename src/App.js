import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import VideoCard from "./components/VideoCard";
import BottomNavbar from "./components/BottomNavbar";
import TopNavbar from "./components/TopNavbar";
import RikProfilePic from "./assets/ric_profile_picture.jpeg";

// This array holds information about different videos
const videoUrls = [
  {
    url: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
    profilePic: RikProfilePic,
    username: "Riccardo",
    description: "Some funny caption 1. #PD #toads",
    song: "Ric FM - Ric Pestano",
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
  },
  {
    url: "https://hips.hearstapps.com/hmg-prod/images/worlds-smallest-dogs-1647336453.jpg?crop=0.493xw:0.987xh;0.505xw,0.00326xh&resize=640:*",
    profilePic: RikProfilePic,
    username: "Ricster",
    description: "Some funny caption 1. #PD #toads",
    song: "Ric FM - Ric Pestano",
    likes: "13.4K",
    comments: 3121,
    saves: 254,
    shares: 420,
  },
  {
    url: "https://www.telegraph.co.uk/content/dam/news/2023/06/10/TELEMMGLPICT000296384999_16864028803870_trans_NvBQzQNjv4BqrCS9JVgwgb8GODK1xmD4xlHwtdpQwyNje2OyIL7x97s.jpeg?imwidth=680",
    profilePic: RikProfilePic,
    username: "Ric Pestano",
    description: "Some funny caption 1. #PD #toads",
    song: "Ric FM - Ric Pestano",
    likes: 5438,
    comments: 238,
    saves: 12,
    shares: 117,
  },
  {
    url: "https://www.dogstrust.org.uk/images/800x600/assets/2022-08/labrador_puppy_harefield_dogstrust.jpg",
    profilePic: RikProfilePic,
    username: "Just Ric",
    description: "Some funny caption 1. #PD #toads",
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
