import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { FaRegTrashAlt } from "react-icons/fa";

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
  display: flex;
  justify-content: space-between;

  svg:hover {
    color: red; // 호버 시 색상 변경
  }
`;

const CommentList = styled.div`
  margin: 120px -45px 30px 0;
  max-height: 400px;
  overflow-y: scroll;
  background: none;
  font-family: Pretendard_Medium;
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

  &:hover {
    color: red;
  }
`;

const PostButton = styled.button`
  background-color: #ffffff;
  border-radius: 30px;
  padding: 10px 20px;
  font-size: 20px;
  font-family: Pretendard_Medium;
  color: #7d7d7d;
  margin: 25px 0px 0px 30px;

  &:hover {
    color: black; // Change text color on hover
  }
`;

export default function Comment(props) {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [response, setResponse] = useState([]);
  const [perfumeName, setPerfumeName] = useState(props.perfumeName);
  const commentListRef = useRef();

  const fetchData = async () => {
    try {
      if (perfumeName) {
        const response = await axios.get(`${apiUrl}/${perfumeName}/readUser`, {
          params: {
            Name: perfumeName,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("댓글 전체 조회:", response.data.result);
        setResponse(response.data.result);
      } else {
        console.log("향수 이름 없음");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [perfumeName]);

  const onChangeComment = (event) => {
    const newComment = event.target.value;
    setNewComment(newComment);
  };

  const PostComment = async () => {
    try {
      if (newComment.trim() !== "") {
        // 댓글을 서버에 POST로 전송
        await axios.post(
          `${apiUrl}/${perfumeName}/write`, // 앤드포인트 직접 여기에 추가
          {
            Content: newComment, // 서버에서 요구하는 댓글 내용에 따라 필드명을 조절해주세요.
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              // 필요에 따라 추가적인 헤더를 여기에 포함시킬 수 있습니다.
            },
          }
        );

        // 서버 응답에 포함된 새 댓글을 사용하여 댓글 업데이트
        setResponse((prevResponse) => ({
          ...prevResponse,
          perfume_comment_contents_userData: [
            ...prevResponse.perfume_comment_contents_userData,
            { Content: newComment },
          ],
        }));
        // 입력창을 초기화
        setNewComment("");

        // 스크롤을 가장 하단으로 이동
        if (commentListRef.current) {
          commentListRef.current.scrollTop =
            commentListRef.current.scrollHeight;
        }
      } else {
        alert("댓글 내용을 작성해주세요.");
      }
    } catch (error) {
      console.error("Error posting comment:", error);
      // 에러가 발생한 경우에 대한 처리를 추가할 수 있습니다.
    }
  };

  const CancelComment = () => {
    setNewComment("");
  };

  return (
    <>
      <CommentList ref={commentListRef}>
        {response &&
          response.perfume_comment_contents_userData &&
          response.perfume_comment_contents_userData.map((comment, index) => (
            <CommentItem key={index}>
              {comment.Content}
              <FaRegTrashAlt />
            </CommentItem>
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
