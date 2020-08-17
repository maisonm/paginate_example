import React, { useState, useEffect } from 'react';

//Styles
import {
  UserTableContainer,
  UserCardContainer,
  UserTableHeader,
  Age,
  Name,
  Email,
  Region,
  Image
} from './styles';

//Components
import Paginate from '../../Paginate/Paginate';

const UserTable = () => {
  const [data, setData] = useState(null);
  const [dataFromPaginate, setDataFromPaginate] = useState(null);
  const [usersPerPage] = useState(4);

  useEffect(() => {
    fetch('/users/getAllUsers')
      .then(data => data.json())
      .then(users => setData(users.users))
      .catch(e => console.warn(e));
  }, []);

  const updateDataFromPaginate = data => setDataFromPaginate(data);

  const renderUserList = () =>
    dataFromPaginate
      ? dataFromPaginate.map((user, i) => (
          <UserCardContainer key={i}>
            <img src={user.image} alt="avatar" />
            <Name>{user.name}</Name>
            <Age>{user.age}</Age>
            <Email>{user.email}</Email>
            <Region>{user.region}</Region>
          </UserCardContainer>
        ))
      : data.map((user, i) => {
          if (i < usersPerPage) {
            return (
              <UserCardContainer key={i}>
                <img src={user.image} alt="avatar" />
                <Name>{user.name}</Name>
                <Age>{user.age}</Age>
                <Email>{user.email}</Email>
                <Region>{user.region}</Region>
              </UserCardContainer>
            );
          } else {
            return null;
          }
        });

  return (
    <UserTableContainer>
      {data ? (
        <Paginate
          data={data}
          setData={updateDataFromPaginate}
          itemsPerPage={usersPerPage}
        />
      ) : null}

      <UserTableHeader>
        <Image>Avatar</Image>
        <Name>Name</Name>
        <Age>Age</Age>
        <Email>Email</Email>
        <Region>Region</Region>
      </UserTableHeader>
      {data ? renderUserList() : null}
    </UserTableContainer>
  );
};

export default UserTable;
