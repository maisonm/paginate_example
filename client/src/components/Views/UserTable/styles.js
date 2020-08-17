import styled from 'styled-components';

export const UserTableContainer = styled.div`
  width: 75%;
  background: #b1b6a6;
  border-radius: 3px;
  box-shadow: 1px 1px 2px #595959;
  padding: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

export const UserCardContainer = styled.div`
  width: 100%;
  margin: 4px;
  padding: 4px;
  border-radius: 3px;
  background: #ffffff;
  box-shadow: 1px 1px 2px #797979;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  transition: 0.3s ease all;
  height: 100%;

  &:hover {
    transition: 0.3s ease all;
    box-shadow: 1px 1px 2px #020202;
  }

  & > img {
    width: 48px;
  }

  & > p {
    overflow: auto;
    font-size: 0.87em;
    letter-spacing: 0.2px;
    text-align: center;
  }
`;

export const UserTableHeader = styled.div`
  background: #ffffff;
  width: 100%;
  margin: 4px;
  padding: 4px;
  border-radius: 3px;
  box-shadow: 1px 1px 2px #020202;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & > p {
    font-weight: bold;
    font-size: 0.82em;
    letter-spacing: 0.2px;
    color: #797979;
    text-align: center;
  }
`;

export const Age = styled.p`
  width: 40px;
`;

export const Name = styled.p`
  width: 150px;
  text-align: left;
`;

export const Email = styled.p`
  width: 200px;
`;

export const Region = styled.p`
  width: 120px;
`;

export const Image = styled.p`
  width: 48px;
`;
