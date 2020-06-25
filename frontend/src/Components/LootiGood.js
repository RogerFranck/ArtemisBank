import React, { Component } from "react";
import Lottie from "react-lottie";

class animation extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: this.props.anilootie,
       rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
      <div>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    );
  }
}

export default animation;