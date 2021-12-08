import React from "react";

const tweetComponent = (props) => {
  return (
    <div className="d-flex flex-column tweet-body">
      <div className="d-flex flex-row">
        <div className="avatar">{props.name.charAt(0)}</div>
        <div className="body">
          <div className="d-flex flex-row justify-content-between">
            <div className="tweet-header">
              <span className="tweet-user">{`@${props.name}`}</span>.{" "}
              <span className="tweet-timeline">{props.createdOn}</span>
            </div>
          </div>
          <div className="tweet">{props.message}</div>
          <div className="d-flex flex-row tweet-icons justify-content-between">
            <button> Like </button>
            <button> Reply </button>
            <button> Comments</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default tweetComponent;
