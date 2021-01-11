import React, { Component } from "react";
import { NAME_TRUMP, IMG_TRUMP, NAME_BIDEN, IMG_BIDEN } from "../common";

export default class VoteWithClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      president: NAME_TRUMP,
      imgPresident: IMG_TRUMP,
    };
  }

  handleVote = (value) => {
    if (value === 1) {
      this.setState({
        president: NAME_TRUMP,
        // imgPresident: IMG_TRUMP,
      });
    } else {
      this.setState({
        president: NAME_BIDEN,
        // imgPresident: IMG_BIDEN,
      });
    }
  };

  render() {
    return (
      <>
        <div className="col-6">
          <div className="card" style={{ width: "20rem" }}>
            <img
              className="card-img-top"
              src={this.state.imgPresident}
              alt="President"
            />
            <div className="card-body">
              <p className="card-text">Your vote is:</p>
              <p className="card-text">{this.state.president}</p>
              <div className="d-flex justify-content-around">
                <button
                  className="btn btn-primary mr-2"
                  onClick={() => this.handleVote(1)}
                >
                  Trump
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => this.handleVote(2)}
                >
                  Biden
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

// componentDidUpdate(prevProps, prevState) {
//   if (prevState.president !== this.state.president) {
//     this.state.president === NAME_TRUMP
//       ? this.setState({ ...this.state, imgPresident: IMG_TRUMP })
//       : this.setState({ ...this.state, imgPresident: IMG_BIDEN });
//   }
// }
