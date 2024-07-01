import React from "react";
import Lottie from "react-lottie";
import animationData from "../../../animations/typing.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const TypingIndicator = () => {
  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={50}
        width={70}
        style={{ marginBottom: 15, marginLeft: 0 }}
      />
    </div>
  );
};

export default TypingIndicator;
