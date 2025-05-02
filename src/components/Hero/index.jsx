import "./style.css";
const Hero = () => {
  return (
    <>
      <video
        tabIndex='-10'
        className='vjs-tech video'
        loop
        muted
        autoPlay
        src='https://cdn.pixabay.com/video/2019/10/26/28320-369325356_large.mp4'
      />
    </>
  );
};

export default Hero;
