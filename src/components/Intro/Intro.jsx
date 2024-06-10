import "./Intro.scss";
import { init } from "ityped";
import { useRef, useEffect } from "react";
function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      strings: ["Developer", "Designer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man3.png" className="h-full" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2 className="block text-[40px] ml-0 mr-0 font-extrabold">
            Hi there , I'm
          </h2>
          <h1 className="block text-[60px] mt-[10px] mb-[10px] ml-0 mr-0 font-extrabold">
            Harshit Soni
          </h1>
          <h3 className="block text-[35px] ml-0 mr-0 font-extrabold">
            3rd year IT engineering student
          </h3>
          <h3 className="block text-[35px] ml-0 mr-0 font-extrabold">
            Freelance <span ref={textRef}> </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="/assets/down.png" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
