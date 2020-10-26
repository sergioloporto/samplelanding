import React, { useEffect } from "react";
import retina from "../../assets/logo2x.png";
import logo from "../../assets/logo.png";

import leftArrow from "../../assets/arrow-left.png";
import rightArrow from "../../assets/arrow-right.png";
import wordpress from "../../assets/wordpress.png";
import image8 from "../../assets/8.png";
import Carousel from "../Carousel";

export default function MainPage() {
  const [slider] = React.useState([
    {
      image: wordpress,
      heading: "Heading",
      para: "Lorem ipsum dolor sit amet.",
    },
    {
      heading: "Heading",
      para:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenea uismod bibendum laoreet. Proin gravida dolor sit amet lacus",
    },
    {
      heading: "Ultra Mega Super Long  Heading",
      para:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenea uismod bibendum laoreet. Lorem ipsum dolor sit amet",
    },
    {
      image: wordpress,
      heading: "Heading",
      para: "Lorem ipsum dolor sit amet.",
    },
    {
      heading: "Heading",
      para:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenea uismod bibendum laoreet. Proin gravida dolor sit amet lacus",
    },
    {
      heading: "Ultra Mega Super Long  Heading",
      para:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenea uismod bibendum laoreet. Lorem ipsum dolor sit amet",
    },
    {
      image: wordpress,
      heading: "Heading",
      para: "Lorem ipsum dolor sit amet.",
    },
    {
      heading: "Heading",
      para:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenea uismod bibendum laoreet. Proin gravida dolor sit amet lacus",
    },
    {
      heading: "Ultra Mega Super Long  Heading",
      para:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenea uismod bibendum laoreet. Lorem ipsum dolor sit amet",
    },
    {
      image: image8,
      heading: "Heading",
      para: "Lorem ipsum dolor sit amet.",
    },
  ]);
  const [start, setStart] = React.useState(0);
  const [count, setCount] = React.useState(3);
  function onLeftSlide() {
    if (start === 0) {
      setStart(slider.length - 3);
    } else {
      setStart(start - 1);
    }
  }
  function onRightSlide() {
    if (start + 3 === slider.length) {
      setStart(0);
    } else {
      setStart(start + 1);
    }
  }
  useEffect(() => {
    setInterval(() => {
      if (window.innerWidth < 801) {
        setCount(1);
      } else if (window.innerWidth < 1135) {
        setCount(2);
      } else {
        setCount(3);
      }
    }, 100);
  });

  function isRetina(first, second) {
    if (window.devicePixelRatio >= 2) {
      return second;
    }
    return first;
  }

  return (
    <>
      <header className="App-header">
        <a href="/"><img src={isRetina(logo, retina)} alt="logo" /></a>
      </header>

      <section className="section-first">
        <div className="inner-section-first">
          <div>
            <h1 className="h1-inner-section">Heading</h1>
            <p className="para-inner-section">
              Lorem ipsum dolor sit amet, consect etur adipiscing elit.
            </p>
          </div>
          <div className="carousel-parent">
            <div style={{ marginRight: 30 }}>
              <img
                src={leftArrow}
                alt="Previous"
                width="20px"
                style={{ cursor: "pointer" }}
                onClick={() => onLeftSlide()}
              />
            </div>
            <Carousel slider={slider.slice(start, start + count)} />
            <div style={{ marginLeft: 30 }}>
              <img
                src={rightArrow}
                alt="Next"
                width="20px"
                style={{ cursor: "pointer" }}
                onClick={() => onRightSlide()}
              />
            </div>
          </div>
        </div>
        <div className="red-circle"></div>
      </section>

      <section className="section-second">
        <div className="inner-section-first">
          <div>
            <h1 className="h1-inner-section1">Heading</h1>
            <p className="para-inner-section1">
              Lorem ipsum dolor sit amet, consect etur adipiscing elit.
            </p>
          </div>
          <div className="carousel-parent">
            <div style={{ marginRight: 30, width: "20px" }}></div>
            <Carousel slider={slider.slice(0, count)}   logo8={image8} />
            <div style={{ marginLeft: 30, width: "20px" }}></div>
          </div>
        </div>
      </section>
    </>
  );
}
