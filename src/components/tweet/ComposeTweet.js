import React from "react";

const composeTweet = () => {
  const [tweetText, setTweetText] = React.useState("");
  const handleSubmit = (e) => {
    // call API to post new tweet
    setTweetText("");
  };
  return (
    <form
      className="d-flex flex-column align-items-end tweet-form"
      onSubmit={handleSubmit}
    >
      <div className="d-flex" style={{ width: "100%" }}>
        <div className="avatar"></div>
        <textarea
          onChange={(e) => setTweetText(e.target.value)}
          value={tweetText}
          className="tweet-textarea"
          placeholder="what's happening"
        />
      </div>
      <button className="tweet-btn">Tweet</button>
    </form>
  );
};

export default composeTweet;
