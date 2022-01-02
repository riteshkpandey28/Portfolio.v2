import { VideoPlayer } from "./BgVideo.styles";
import BgVideoPlay from "../../assests/bg-video.mp4";

const BgVideo = () => (
  <VideoPlayer>
    <video
      src={BgVideoPlay}
      playsInline
      autoPlay
      muted
      loop
      className="bgvideo"
    />
  </VideoPlayer>
);

export default BgVideo;
