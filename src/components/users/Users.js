import React from 'react';
import UserItem from './UserItem';
import Spinner from './../layout/Spinner';

export default function Users({ users, loading }) {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="users" style={usersStyle}>
        {users.map((user) => {
          return <UserItem key={user.id} {...user} />;
        })}
      </div>
    );
  }
}

const usersStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(10rem, 1fr))',
  gridGap: '1rem',
};
