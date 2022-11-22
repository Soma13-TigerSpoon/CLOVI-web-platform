import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ChannelList() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    // console.log('home effect executed');
    (async () => {
      const response = await (
        await fetch(process.env.REACT_APP_BASE_API_URL + "v1/channels")
      ).json();
      console.log("response:", response);
      setCreators((creators) => response.data);
    })();
  }, []);

  return (
    <>
      <Container>
        <Title>
          <img
            className="logo__img"
            alt="logo"
            src={`${process.env.REACT_APP_IMAGE_RESOURCE_URL}clovi-img-logo-w-text.png`}
          ></img>
          <h1>크리에이터와 팬을 위한</h1>
          <h1>유튜브 쇼핑 플랫폼</h1>
        </Title>
        <Main>
          <ul>
            {creators
              ? creators.map((creator, index) => (
                  <li key={index}>
                    <Link to={`/channel/${creator.name}`}>
                      <div className="creator">
                        <div className="creator__img">
                          <img src={creator.profileUrl} alt="" />
                        </div>
                        <div className="creator__name">{creator.name}</div>
                      </div>
                    </Link>
                  </li>
                ))
              : ""}
          </ul>
        </Main>
        <Footer>
          <div>팀 타이거스푼</div>
          <div>tigerspoon.soma@gmail.com</div>
        </Footer>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  top: 30px;
  position: fixed;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  font-size: 16px;
  img {
    width: 160px;
    margin-bottom: 20px;
  }
`;
const Main = styled.main`
  li {
    width: 220px;
    margin-bottom: 20px;
    .creator {
      display: flex;
      align-items: center;
      .creator__img {
        margin-right: 18px;
        img {
          width: 50px;
          border-radius: 50%;
        }
      }
      .creator__name {
        font-size: 18px;
      }
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 20px;
  font-size: 14px;
  color: ${(props) => props.theme.text_grey};
`;

export default ChannelList;
