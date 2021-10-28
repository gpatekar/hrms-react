import React, { useEffect, useState } from 'react';
import './Carousel.css';

export const Carousel: React.FC = () => {
  const items = [
    {
      id: 1,
      imgSrc: '',
      caption: {
        title: '',
        description: '',
      },
      active: true,
    },
    {
      id: 2,
      imgSrc: '',
      caption: {
        title: '',
        description: '',
      },
      nextActive: true,
    },
    {
      id: 3,
      imgSrc: '',
      caption: {
        title: '',
        description: '',
      },
    },
    {
      id: 2,
      imgSrc: '',
      caption: {
        title: '',
        description: '',
      },
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionStart, setTransitionStart] = useState(false);
  // useEffect(() => {
  //   // 
  //   let timeoutInterval: NodeJS.Timeout | undefined ;
  //   const interval = setInterval(() => {
  //     setTransitionStart(true);
  //     timeoutInterval = setTimeout(() => {
  //       setActiveIndex(Number(activeIndex + 1));
  //       console.log(activeIndex, ':', activeIndex >= items.length);
  //       setTransitionStart(false);
  //     }, 5000);
      
  //   }, 5000);
  //   return () => {
  //     clearInterval(interval);
  //     clearTimeout(timeoutInterval as NodeJS.Timeout);
  //  };

    
  // }, []);

  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {items.map((item) => {
          return (
            <div
              className={`carousel-item ${item.active ? 'active' : ''} ${(item.active || item.nextActive)  && transitionStart ? 'carousel-item-start' : ''}  ${item.nextActive ? 'carousel-item-next' : ''}`}
            >
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                width="800"
                height="400"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: First slide"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>{item.caption.title}</title>
                <rect width="100%" height="100%" fill="#777"></rect>
                <text x="50%" y="50%" fill="#555" dy=".3em">
                  {item.caption.description}
                </text>
              </svg>
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
