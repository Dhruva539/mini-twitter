import React from "react";
import TweetComponent from "../components/tweet/TweetComponent";
import ComposeTweet from "../components/tweet/ComposeTweet";
const tweets = [
  {
    firstName: "Test",
    lastName: "1",
    message: "Test Data"
  },
  {
    firstName: "Test",
    lastName: "2",
    message: "Test2 Data"
  },
  {
    firstName: "Test",
    lastName: "3",
    message: "Test3 Data"
  },
  {
    firstName: "Test",
    lastName: "4",
    message: "Test4 Data"
  },
  {
    firstName: "Test",
    lastName: "5",
    message: "Test5 Data"
  }
];
const feedContainer = () => {
  return (
    <div className="d-flex flex-column justfy-content-center align-items-center tweet-contianer">
      <ComposeTweet />
      <div className="seperator"></div>
      {tweets.map((tweet, index) => (
        <TweetComponent
          name={`${tweet.firstName} ${tweet.lastName}`}
          message={tweet.message}
          createdOn="3d Ago"
        />
      ))}
    </div>
  );
};

export default feedContainer;
