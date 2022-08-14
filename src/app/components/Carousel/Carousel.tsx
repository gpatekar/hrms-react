import React, { useEffect, useState } from 'react';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

import { IconButton } from '../UI';

import './Carousel.css';

interface ICarouselProps {
  children: React.ReactNode[] | React.ReactNode;
}
export const Carousel: React.FC<ICarouselProps> = (props) => {
  const [itemList, setItemList] = useState<any>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionStart, setTransitionStart] = useState(false);

  useEffect(() => {
    const childList = props.children as any;
    const itemArr = childList.map((item: React.ReactNode, index: number) => {
      return {
        id: index,
        active: index === 0,
        nextActive: index === 1,
        children: item,
      };
    });

    setItemList(itemArr);
  }, [props.children]);

  // useEffect(() => {
  //   //
  //   let timeoutInterval: NodeJS.Timeout | undefined ;
  //   const interval = setInterval(() => {
  //     setTransitionStart(true);
  //     timeoutInterval = setTimeout(() => {
  //       setActiveIndex(Number(activeIndex + 1));
  //       setTransitionStart(false);
  //     }, 5000);

  //   }, 5000);
  //   return () => {
  //     clearInterval(interval);
  //     clearTimeout(timeoutInterval as NodeJS.Timeout);
  //  };

  // }, []);

  return (
    <div className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {itemList &&
          itemList.length > 0 &&
          itemList.map((item: any) => {
            return (
              <div
                key={item.id}
                className={`carousel-item ${item.active ? 'active' : ''} ${
                  (item.active || item.nextActive) && transitionStart
                    ? 'carousel-item-start'
                    : ''
                }  ${item.nextActive ? 'carousel-item-next' : ''}`}
              >
                {item.children}
              </div>
            );
          })}
      </div>
      <div className="carousel-control-prev">
        <IconButton>
          <ArrowBackIosNewRoundedIcon />
        </IconButton>
      </div>
      <div className="carousel-control-next">
        <IconButton>
          <ArrowForwardIosRoundedIcon />
        </IconButton>
      </div>
    </div>
  );
};
