import ntimg from "./images/pagina404.jpg";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  min-height: 100vh;
  background-color: #fdfdfd;
  text-align: center;
`;

const Message = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #c2185b;
  margin-bottom: 10px;
`;

const ImageWrapper = styled.div`
  max-width: 400px;

  img {
    width: 50%;
    height: 50%;
    border-radius: 12px;
  }
`;

const NtButton = styled.button`
  margin-top: 30px;
  padding: 10px 20px;
  background-color: #c2185b;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a00044;
  }
`;

const NotFoundPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };

    return (
        <NotFoundWrapper>
            <Message>Página em Construção</Message>
            <ImageWrapper>
                <img src={ntimg} alt="Página em Construção" />
            </ImageWrapper>
            <NtButton onClick={handleClick}>
                Voltar para a Home
            </NtButton>
        </NotFoundWrapper>
    );
};

export default NotFoundPage;
