import React from 'react';
import naverImage from './images/kakao.png';

function KakaoButton() {
    const fetchGetURL = async() => {
        try {
            const {url} = await (
                await fetch("http://localhost:3000/login")
            ).json();

            console.log(url);

            document.location.href = url;
        } catch (error) {
            alert(`function fetchGetURL error! ${error.message}`);
            console.error(error);
        }
    };
    return (
        <button onClick={fetchGetURL} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
        <img
          src={naverImage}
          alt="Naver"
          style={{ width: "90px", height: "90px" }}
        />
      </button>
    );
};

export default KakaoButton;