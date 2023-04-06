import ProfileImage from "./ProfileImage";

function Tweet(props) {
  const { user, timestamp, message } = props.tweet;

  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />
    </div>
  );
}

export default Tweet;
