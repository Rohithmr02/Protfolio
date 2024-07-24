import React from "react";
import '../About/About.css'
import AboutImage from '../asset/Bitmap.png'
import ProfileImage from '../asset/image.jpg'

function About(){
    return(
        <div className="About-container" id="About">
            <div className="About-profile">
             <div className="About-image">
              <div className="box1"></div>
              <div className="box2"></div>
              <div className="image">
                <img src={AboutImage} />
              </div>
              
              <div className="cloud">
              <svg xmlns="http://www.w3.org/2000/svg" width="215" height="130" viewBox="0 0 215 130" fill="none">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M202.706 19.3482C192.882 5.26628 175.96 -2.03449 159.006 0.49478C154.828 1.04171 150.748 2.18068 146.89 3.87758C142.752 5.85825 138.84 8.28305 135.224 11.1094C131.44 14.0811 127.432 16.7543 123.236 19.1051C118.86 21.4223 113.933 22.4911 108.993 22.1953C98.5996 20.3716 88.5395 16.9906 79.1499 12.1659C69.1559 8.20179 58.3002 6.93283 47.6646 8.48553C38.0201 9.93608 29.1596 14.6472 22.5516 21.8382C16.3054 28.5264 12.8651 37.3676 12.9437 46.5296C13.7373 52.1911 14.2162 57.8925 14.3785 63.6073C13.706 68.2906 11.7597 72.6976 8.75328 76.3449C5.91175 79.9143 3.50206 83.8087 1.5746 87.9466C-0.0571867 92.0767 -0.430796 96.5991 0.501015 100.942C2.84891 109.791 8.52266 117.385 16.3327 122.132C25.021 127.543 35.1053 130.272 45.3294 129.979C56.0375 129.785 66.5286 126.919 75.8549 121.641C84.187 115.919 93.4903 111.769 103.308 109.394C114.054 109.259 124.763 110.679 135.105 113.61C140.23 114.544 145.47 114.656 150.63 113.943C154.889 113.231 158.997 111.802 162.781 109.717C170.55 105.486 176.782 98.8963 180.582 90.8929C182.448 86.9168 183.618 82.6483 184.04 78.2744C183.604 73.6129 184.999 68.9649 187.928 65.3185C191.118 62.9506 194.696 61.1596 198.501 60.0261C202.646 58.6036 206.392 56.2073 209.425 53.0373C214.053 47.8296 215.952 40.7341 214.545 33.9031C213.139 27.0721 208.593 21.3106 202.286 18.3661C201.331 17.8435 200.135 18.1591 199.56 19.0853C199.013 20.037 199.331 21.2523 200.272 21.8134C208.249 25.3841 212.59 34.1153 210.632 42.6508C209.584 46.9103 207.061 50.658 203.513 53.2258C200.089 55.2556 196.452 56.8992 192.668 58.1264C188.879 59.3843 185.532 61.7088 183.026 64.8225C180.802 69.1436 179.725 73.9658 179.899 78.8249C178.755 87.0114 174.843 94.5562 168.817 100.198C162.974 105.948 155.329 109.496 147.177 110.242C136.821 109.885 126.538 108.369 116.518 105.724C111.391 104.824 106.151 104.773 101.008 105.575C96.2439 106.536 91.6455 108.189 87.3576 110.48C78.9439 115.68 70.0763 120.103 60.8643 123.694C42.1199 130.294 21.257 124.662 8.35254 109.518C5.90584 106.234 4.3158 102.389 3.72672 98.3331C3.28232 94.1784 4.16402 89.9896 6.24495 86.3693C8.41191 82.4359 11.3408 79.0035 13.7205 75.209C16.3316 71.2715 17.7666 66.6682 17.8565 61.9407C17.8812 56.4746 16.3327 51.1326 16.3179 45.6666C16.3303 41.3994 17.2654 37.1857 19.0587 33.3159C22.7789 25.3952 29.1613 19.0403 37.0871 15.3652C46.4798 11.2991 56.9056 10.2794 66.9051 12.4487C76.8557 15.239 86.5954 18.7365 96.0502 22.9145C100.749 24.6777 105.709 25.6433 110.724 25.7715C115.567 25.7251 120.329 24.523 124.617 22.2647C132.755 18.1032 139.206 11.2731 147.469 7.31494C162.406 0.765346 179.703 2.78165 192.742 12.5925C195.822 14.9323 198.625 17.6165 201.098 20.5932C201.467 20.9408 202.032 20.9686 202.432 20.6587C202.833 20.3488 202.949 19.7931 202.706 19.3482Z" fill="#E7C4B2"/>
               </svg>
              </div>
              <div className="Profile-image">
                <img src={ProfileImage} alt="" />
              </div>
             </div>
             <div className="About-content">
                <p>Rohith m. r.</p>
                <h1>Professional<br></br>Web Designer</h1>
                <h4>Provides a full service range</h4>
                <h5>Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.</h5>
                <button><a href="#Services">view more</a></button>
             </div>
            </div>
            <div className="About-footer">
             <div className="About-design">
             <div className="About-Design-Logo">
             <svg xmlns="http://www.w3.org/2000/svg" width="112" height="112" viewBox="0 0 112 112" fill="none">
             <circle cx="56" cy="56" r="56" fill="#EF6C57"/>
             </svg>
             <div className="About-icon">
             <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 0C11.3284 0 12 0.671573 12 1.5V3H36V1.5C36 0.671573 36.6716 0 37.5 0C38.3284 0 39 0.671573 39 1.5V3H42C45.3137 3 48 5.68629 48 9V42C48 45.3137 45.3137 48 42 48H6C2.68629 48 0 45.3137 0 42V9C0 5.68629 2.68629 3 6 3H9V1.5C9 0.671573 9.67157 0 10.5 0ZM40.362 9H7.635C6.735 9 6 9.672 6 10.5V13.5C6 14.328 6.732 15 7.635 15H40.365C41.265 15 42 14.328 42 13.5V10.5C42 9.672 41.268 9 40.362 9ZM32.562 24.438C33.1485 25.0245 33.1485 25.9755 32.562 26.562L23.562 35.562C23.2806 35.8441 22.8985 36.0027 22.5 36.0027C22.1015 36.0027 21.7194 35.8441 21.438 35.562L16.938 31.062C16.5586 30.6826 16.4104 30.1296 16.5493 29.6113C16.6882 29.093 17.093 28.6882 17.6113 28.5493C18.1296 28.4104 18.6826 28.5586 19.062 28.938L22.5 32.379L30.438 24.438C31.0245 23.8515 31.9755 23.8515 32.562 24.438Z" fill="white"/>
              </svg>
             </div>
             </div>
             <div className="About-Design-Name">
                <h1>4</h1>
                <p>Years of experience</p>
             </div>
             </div>
             <div className="About-development">
             <div className="About-Development-Logo">
             <svg xmlns="http://www.w3.org/2000/svg" width="112" height="112" viewBox="0 0 112 112" fill="none">
             <circle cx="56" cy="56" r="56" fill="#EF6C57"/>
             </svg>
             <div className="About-development-icon">
             <svg xmlns="http://www.w3.org/2000/svg" width="48" height="39" viewBox="0 0 48 39" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 0C17.0147 0 15 2.01472 15 4.5V6H4.5C2.01472 6 0 8.01472 0 10.5V14.652L22.842 20.742C23.6008 20.9441 24.3992 20.9441 25.158 20.742L48 14.652V10.5C48 8.01472 45.9853 6 43.5 6H33V4.5C33 2.01472 30.9853 0 28.5 0H19.5ZM19.5 3H28.5C29.3284 3 30 3.67157 30 4.5V6H18V4.5C18 3.67157 18.6716 3 19.5 3ZM4.5 39C2.01472 39 0 36.9853 0 34.5V17.55L23.613 23.841C23.8666 23.9087 24.1334 23.9087 24.387 23.841L48 17.55V34.5C48 36.9853 45.9853 39 43.5 39H4.5Z" fill="white"/>
             </svg>
             </div>
             </div>
             <div className="About-Design-Name">
              <h1>10+</h1>
              <p>Projects Done</p>
             </div>
             </div>
            </div>
        </div>
    )
}


export default About;