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
`;
const Content = styled.div`
  white-space: normal;
  max-width: 1060px;
`;

const Trash = styled.div`
  display: flex;
  align-items: center;
  :hover {
    color: red;
  }
`;

const CommentList = styled.div`
  margin: 50px -45px 30px 0;
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
    color: black;
  }
`;

export default function Comment(props) {
  const [newComment, setNewComment] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [response, setResponse] = useState([]);
  const [perfumeName, setPerfumeName] = useState(props.perfumeName);
  const commentListRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (perfumeName) {
          // 로그인이 되어있는 경우
          if (localStorage.getItem("token")) {
            const response = await axios.get(
              `${apiUrl}/${perfumeName}/readUser`,
              {
                params: {
                  Name: perfumeName,
                },
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            console.log("댓글 전체 조회:", response);
            setResponse(response.data.result);
          } else {
            const response = await axios.get(`${apiUrl}/${perfumeName}/read`, {
              params: {
                Name: perfumeName,
              },
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            console.log("댓글 일부 조회:", response.data.result);
            setResponse(response.data.result);
          }
        } else {
          console.log("향수 이름 없음");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [perfumeName]);

  const onChangeComment = (event) => {
    const newComment = event.target.value;
    setNewComment(newComment);
  };

  const postComment = async () => {
    try {
      if (token) {
        if (newComment.trim() !== "") {
          // 댓글을 서버에 POST로 전송
          await axios.post(
            `${apiUrl}/${perfumeName}/write`,
            {
              Content: newComment,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          // 서버 응답에 포함된 새 댓글을 사용하여 댓글 업데이트
          setResponse((prevResponse) => ({
            ...prevResponse,
            perfume_comment_contentsData: [
              ...prevResponse.perfume_comment_contentsData,
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
      } else {
        alert("로그인 후 댓글 작성이 가능합니다");
      }
    } catch (error) {
      console.error("Error posting comment:", error);
      const errorMessage = error.response.data.message;

      // 같은 내용의 코멘트가 존재하는 경우
      if (errorMessage === "같은 내용의 코멘트가 존재합니다.") {
        alert(errorMessage);
      }
    }
  };

  const deleteComment = async (contentToDelete) => {
    try {
      if (token) {
        // 댓글을 서버에 DELETE로 전송
        await axios.delete(
          `${apiUrl}/${perfumeName}/delete/${contentToDelete}`,
          {
            params: {
              Name: perfumeName,
              Content: contentToDelete,
            },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // 서버 응답에 따라 댓글 업데이트
        setResponse((prevResponse) => ({
          ...prevResponse,
          perfume_comment_contentsData:
            prevResponse.perfume_comment_contentsData.filter(
              (comment) => comment.Content !== contentToDelete
            ),
        }));

        console.log("댓글 삭제 성공");
      } else {
        alert("로그인 후 댓글 삭제가 가능합니다");
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  return (
    <>
      <CommentList ref={commentListRef}>
        {response &&
          response.perfume_comment_contentsData &&
          response.perfume_comment_contentsData.map((comment, index) => (
            <CommentItem key={index}>
              <Content>{comment.Content}</Content>
              <Trash>
                <FaRegTrashAlt onClick={() => deleteComment(comment.Content)} />
              </Trash>
            </CommentItem>
          ))}
      </CommentList>
      <CommentTextarea
        value={newComment}
        onChange={onChangeComment}
        placeholder="댓글을 입력하세요."
      />
      <CommentButtons>
        <CancelButton onClick={() => setNewComment("")}>취소</CancelButton>
        <PostButton onClick={postComment}>게시하기</PostButton>
      </CommentButtons>
    </>
  );
}
