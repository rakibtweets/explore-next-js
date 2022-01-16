import React from 'react';
import Link from 'next/link';

const index = ({ users }) => {
  return (
    <div>
      <h3>This is users page</h3>
      <h3>Total Users: {users.length}</h3>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <Link href={`/users/${user.id}`}>
            <a>
              <button>about {user.name}</button>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default index;

export async function getStaticProps(context) {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  return {
    props: { users }, // will be passed to the page component as props
  };
}
