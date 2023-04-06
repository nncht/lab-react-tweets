import ProfileImage from "./ProfileImage";
import User from "./User";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User userData={props.tweet.user} />
        </div>
      </div>
    </div>
  );
}

export default Tweet;
