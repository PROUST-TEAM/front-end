import React, { useState } from "react";
import styled from "styled-components";

export default function Comment() {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);

  const onChangeComment = (event) => {
    const newComment = event.target.value;
    setNewComment(newComment);
    console.log(newComment);
  };

  const PostComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const CancelComment = () => {
    setNewComment("");
  };
  const Btn = styled.div`
    margin-top: 10px;

    text-align: end;
  `;
  const CancelBtn = styled.button`
    background: none;
    border: none;
    font-size: 20px;
    font-family: Pretendard_Medium;
    color: #6bff94;
  `;
  const PostBtn = styled.button`
    background-color: #ffffff;
    border-radius: 30px;
    padding: 10px 20px 10px 20px;
    font-size: 20px;
    font-family: Pretendard_Medium;
    color: #7d7d7d;
    margin-left: 30px;
  `;
  const CommentList = styled.div`
    margin: 10px 0;
    maxheight: 200px;
    overflowy: auto;
    background-color: #ffffff;
  `;
  return (
    <>
      <CommentList>
        {comments.map((comment, index) => (
          <div key={index}>{comment}</div>
        ))}
      </CommentList>

      <textarea
        value={newComment}
        onChange={onChangeComment}
        placeholder="댓글을 입력하세요."
        style={{
          padding: "20px 20px 10px 20px",
          borderRadius: "10px",
          color: "#282727",
          fontFamily: "Pretendard_Medium",
          fontSize: "20px",
        }}
      />
      <Btn>
        <CancelBtn onClick={CancelComment}>취소</CancelBtn>
        <PostBtn onClick={PostComment}>게시하기</PostBtn>
      </Btn>
    </>
  );
}
