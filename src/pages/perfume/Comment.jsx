import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const CommentItem = styled.div`
  margin: 0 0 25px 0;
  padding: 15px 30px 15px 30px;
  word-wrap: break-word;
  background-color: #fefdfc;
  border-radius: 30px;
  text-align: left;
  margin-right: 40px;
  font-size: 20px;
  color: #282727;
`;

const CommentList = styled.div`
  margin: 120px -45px 30px 0;
  max-height: 400px;
  overflow-y: scroll;
  background: none;
  &::-webkit-scrollbar {
    background: none;
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #6bff94;
    border-radius: 100px;
  }
`;

const CommentTextarea = styled.textarea`
  padding: 20px;
  border-radius: 10px;
  color: #282727;
  font-family: Pretendard_Medium;
  font-size: 20px;
  width: 1110px;
  height: 142px;
  resize: none;
`;

const CommentButtons = styled.div`
  margin-top: 10px;
  text-align: end;
`;

const CancelButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  font-family: Pretendard_Medium;
  color: #6bff94;
`;

const PostButton = styled.button`
  background-color: #ffffff;
  border-radius: 30px;
  padding: 10px 20px;
  font-size: 20px;
  font-family: Pretendard_Medium;
  color: #7d7d7d;
  margin: 25px 0px 0px 30px;
`;

export default function Comment() {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);

  const onChangeComment = (event) => {
    const newComment = event.target.value;
    setNewComment(newComment);
  };

  const PostComment = () => {
    if (newComment.trim() !== "") {
      //setComments([newComment, ...comments]);
      setComments([...comments, newComment]);
      console.log(comments);
      setNewComment("");
    } else {
      alert("댓글 내용을 작성해주세요.");
    }
  };

  const CancelComment = () => {
    setNewComment("");
  };

  return (
    <>
      <CommentList>
        {comments.map((comment) => (
          <CommentItem>{comment}</CommentItem>
        ))}
      </CommentList>
      <CommentTextarea
        value={newComment}
        onChange={onChangeComment}
        placeholder="댓글을 입력하세요."
      />
      <CommentButtons>
        <CancelButton onClick={CancelComment}>취소</CancelButton>
        <PostButton onClick={PostComment}>게시하기</PostButton>
      </CommentButtons>
    </>
  );
}
