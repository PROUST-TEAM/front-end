import React, { useState } from "react";

export default function Comment() {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handlePostComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const handleCancelComment = () => {
    setNewComment("");
  };

  return (
    <div>
      <textarea
        value={newComment}
        onChange={handleCommentChange}
        placeholder="댓글을 입력하세요."
      />
      <div>
        <button onClick={handlePostComment}>댓글 등록</button>
        <button onClick={handleCancelComment}>취소</button>
      </div>
      <div
        className="comment-list"
        style={{ margin: "10px 0", maxHeight: "200px", overflowY: "auto" }}
      >
        {comments.map((comment, index) => (
          <div key={index}>{comment}</div>
        ))}
      </div>
    </div>
  );
}
