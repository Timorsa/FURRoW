import React, { useEffect, useRef } from "react"

import {
  Banner,
  Video,
  BannerTitle,
  Canvas,
  Headline,
} from "../../styles/homeStyles"

// video not playing need to check the reason for that

const HomeBanner = () => {
  return (
    <Banner>
      <Video>
        <video
          height="100%"
          width="100%"
          loop
          autoPlay
          src={require("../../assets/video/video.mp4")}
        />
      </Video>
      <BannerTitle>
        <Headline>DIG</Headline>
        <Headline>DEEP</Headline>
      </BannerTitle>
    </Banner>
  )
}

export default HomeBanner
