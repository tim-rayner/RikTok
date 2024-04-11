import React, { useRef, useEffect } from "react";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";
import "./VideoCard.css";

const VideoCard = (props) => {
  const {
    url,
    username,
    description,
    song,
    likes,
    shares,
    comments,
    saves,
    profilePic,
    setVideoRef,
  } = props;
  const videoRef = useRef(null);

  // useEffect(() => {
  //   if (autoplay) {
  //     videoRef.current.play();
  //   }
  // }, [autoplay]);

  // const onVideoPress = () => {
  //   if (videoRef.current.paused) {
  //     videoRef.current.play();
  //   } else {
  //     videoRef.current.pause();
  //   }
  // };

  return (
    <div className="video">
      {/* The video element */}
      <img
        className="player"
        ref={(ref) => {
          videoRef.current = ref;
          setVideoRef(ref);
        }}
        alt={description}
        src={url}
      ></img>
      <div className="bottom-controls">
        <div className="footer-left">
          {/* The left part of the container */}
          <FooterLeft
            username={username}
            description={description}
            song={song}
          />
        </div>
        <div className="footer-right">
          {/* The right part of the container */}
          <FooterRight
            likes={likes}
            shares={shares}
            comments={comments}
            saves={saves}
            profilePic={profilePic}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
