import React from 'react';
import Image from 'next/image';
import { Photo } from './PhotoContainer';
import style from './style.module.css'

const Picture = () => {
  return (
    <div style={{position: 'relative' }} className={style.widthFixer}>
      <svg 
        id="sw-js-blob-svg" 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg" 
        style={{ width: '100%', height: '100%' }}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop id="stop1" stopColor="rgba(39.795, 187.636, 190.183, 1)" offset="0%" />
            <stop id="stop2" stopColor="rgba(0, 0.18, 255, 1)" offset="100%" />
          </linearGradient>
          <mask id="blobMask" mask-type="alpha">
            <path 
              fill="white" 
              d="M16.9,-25.7C23.1,-22.3,30.2,-19.7,33.9,-14.6C37.6,-9.5,37.9,-2,37.4,5.8C36.9,13.6,35.6,21.6,31.3,27.9C27.1,34.2,19.9,38.8,12.1,40.9C4.3,43.1,-4.1,42.9,-10.6,39.5C-17.2,36.1,-21.8,29.5,-25.5,23.2C-29.2,16.9,-32,11,-33,4.7C-34,-1.6,-33.1,-8.1,-30.4,-13.8C-27.7,-19.5,-23.1,-24.2,-17.8,-28C-12.4,-31.7,-6.2,-34.5,-0.4,-33.8C5.3,-33.2,10.7,-29.1,16.9,-25.7Z" 
              transform="translate(50 50)"
            />
          </mask>
        </defs>
        <g mask="url(#blobMask)">
          <rect width="100%" height="100%" fill="url(#sw-gradient)" />
          <foreignObject x="0" y="0" width="100" height="100">
            <div style={{ width: '100%', height: '100%' }}>
              <Image
                src={Photo}
                alt="profile"
                layout="fill"
                objectFit="cover"
                className={style.profilePhoto}
              />
            </div>
          </foreignObject>
        </g>
      </svg>
    </div>
  );
};

export default Picture;
