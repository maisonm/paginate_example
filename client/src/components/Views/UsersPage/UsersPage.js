import React from 'react';

//Styles
import { UsersPageContainer } from './styles';

//Components
import UserTable from '../UserTable/UserTable';

const UsersPage = () => {
  return (
    <UsersPageContainer>
      <UserTable />
    </UsersPageContainer>
  );
};

export default UsersPage;
