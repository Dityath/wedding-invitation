import React, { useEffect, useState } from "react";

import Header from "./Header";
import Aos from "aos";

const Components = () => {
  const [music, setMusic] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);

  const handleSound = () => {
    if (music) {
      // document.getElementById("myAudio").pause()
      setMusic(false);
    } else {
      // document.getElementById("myAudio").play()
      setMusic(true);
    }
  };
  const handleBacksound = () => {
    if (music) {
      // document.getElementById("myAudio").pause()
      setMusic(false);
    }
  };
  const handleMore = () => {
    if (scrolling === false) {
      setScrolling(true);
      setMusic(true);
      // document.getElementById("myAudio").play()
    }
  };

  return (
    <div className="home-container">
      <div className="btn-audio">
        <Header more={handleMore} heightHead={scrolling} />
      </div>
    </div>
  );
};

export default Components;
