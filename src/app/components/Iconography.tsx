import { useState } from "react";

export const Iconography = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        width="103"
        height="142"
        viewBox="0 0 103 142"
        className="w-32 h-32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Lock keyhole */}
        <path
          d="M44.3743 116.181L57.6864 116.181V102.115C60.501 101.018 62.8802 99.0769 64.4768 96.5757C66.0734 94.0745 66.71 91.1539 66.71 88.2117C66.71 85.9998 66.4417 84.1626 65.7204 82.2617C64.9991 80.3608 63.8606 78.6345 62.3836 77.2022C60.9067 75.77 59.1265 74.6659 57.1662 73.9665C55.2059 73.267 53.1143 72.9998 51.0303 72.9998C48.942 72.9998 46.8548 73.267 44.8945 73.9665C42.9342 74.6659 41.154 75.77 39.6771 77.2022C38.2001 78.6345 37.0616 80.3608 36.3403 82.2617C35.619 84.1626 35.35 85.9998 35.35 88.2117C35.35 91.1539 35.9873 94.0745 37.5839 96.5757C39.1804 99.0769 41.5597 101.018 44.3743 102.115V116.181Z"
          fill="currentColor"
        />

        {/* Lock outline */}
        <path
          className={`transition-all duration-300 ease-in-out ${
            isHovered
              ? "fill-transparent stroke-current"
              : "fill-current stroke-transparent"
          }`}
          strokeWidth="4"
          d={
            isHovered
              ? "M102.06 64.3331C102.06 53.0489 96.3443 47.3331 85.06 47.3331H35.4991V28.2695C35.4991 17.1505 39.5638 13.2089 51.03 13.2089C62.4962 13.2089 66.5609 17.1505 66.5609 28.2695V34.3331H79.873V28.2695C79.873 15.511 74.8677 0.299805 51.03 0.299805C27.1923 0.299805 22.187 15.511 22.187 28.2695V47.3331H17C5.71573 47.3331 0 53.0489 0 64.3331V111.03C0.00939465 121.445 3.05122 128.554 8.45831 133.798C13.8654 139.041 21.1963 141.991 31.843 142H70.2169C80.8637 141.991 88.1946 139.041 93.6017 133.798C99.0088 128.554 102.051 121.445 102.06 111.03V64.3331ZM88.7478 112.03C88.7478 119.024 87.1115 121.855 84.1989 124.68C81.2863 127.504 78.336 129.091 71.2169 129.091H30.843C23.724 129.091 20.7737 127.504 17.8611 124.68C14.9485 121.855 13.3122 119.024 13.3122 112.03V64.2422C13.3122 61.5854 14.6553 60.2422 17.3122 60.2422H84.7478C87.4047 60.2422 88.7478 61.5854 88.7478 64.2422V112.03Z"
              : "M102.06 64.3331C102.06 53.0489 96.3443 47.3331 85.06 47.3331H35.4991V39.2695C35.4991 28.1505 39.5638 24.2089 51.03 24.2089C62.4962 24.2089 66.5609 28.1505 66.5609 39.2695V47.3331H79.873V39.2695C79.873 26.511 74.8677 11.2998 51.03 11.2998C27.1923 11.2998 22.187 26.511 22.187 39.2695V47.3331H17C5.71573 47.3331 0 53.0489 0 64.3331V111.03C0.00939465 121.445 3.05122 128.554 8.45831 133.798C13.8654 139.041 21.1963 141.991 31.843 142H70.2169C80.8637 141.991 88.1946 139.041 93.6017 133.798C99.0088 128.554 102.051 121.445 102.06 111.03V64.3331ZM88.7478 112.03C88.7478 119.024 87.1115 121.855 84.1989 124.68C81.2863 127.504 78.336 129.091 71.2169 129.091H30.843C23.724 129.091 20.7737 127.504 17.8611 124.68C14.9485 121.855 13.3122 119.024 13.3122 112.03V64.2422C13.3122 61.5854 14.6553 60.2422 17.3122 60.2422H84.7478C87.4047 60.2422 88.7478 61.5854 88.7478 64.2422V112.03Z"
          }
        />
      </svg>
    </div>
  );
};

// The full component with the container
export const IconographyContainer = () => {
  return (
    <div className="border eighth bg-[#b4dc19] z-10 flex justify-around items-start flex-col p-6 text-[#175641] hover:bg-[#1e1919] hover:text-[#f7f6f5] cursor-pointer transition-colors duration-150 rounded-bl-2xl">
      <h1 className="text-4xl">Iconography</h1>
      <div className="w-full h-full flex justify-center items-center">
        <Iconography />
      </div>
    </div>
  );
};

export default IconographyContainer;
