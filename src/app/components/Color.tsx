export const Color = () => {
  return (
    <div className="color-visual-container w-full h-full flex justify-center items-center">
      <div className="color-visual-square relative">
        <div className="color-block block-1 absolute transition-all duration-300">
          <svg
            width="150"
            height="150"
            viewBox="0 0 150 150"
            className="color-circle transition-all duration-300"
          >
            <path
              d="M75 25C42.7594 25 25 42.7563 25 75C25 107.244 42.7594 125 75 125C107.241 125 125 107.244 125 75C125 42.7563 107.241 25 75 25Z"
              className="transition-all duration-300"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
