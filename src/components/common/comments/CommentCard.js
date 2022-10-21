import "./CommentCard.css";
import star_icon from "../../../assets/star_icon.svg";

const CommentCard = ({ comments }) => {
  return (
    <div className="commentContainer">
      <div>
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
      </div>
      <h3>{comments.name}</h3>
      <h4>{comments.comment}</h4>
      <h4>{comments.page}</h4>
    </div>
  );
};

export default CommentCard;
