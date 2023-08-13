import { newUsers } from './usersList.js';

function fetchUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.8) {
        resolve(newUsers);
      } else {
        reject(new Error('Oops failed to fetch users'));
      }
    }, 3000);
  });
}

export { fetchUsers };
