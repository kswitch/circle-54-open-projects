import { users } from './userData.js'

const tracks = ['frontend', 'backend', 'cloud'];

const randomTrack = () => {
  return tracks[Math.floor(Math.random() * tracks.length)];
};

const generateUniqueRandomNumbers = (n) => {
  const uniqueRandomNumbers = [];
  while (uniqueRandomNumbers.length < n) {
    const randomNumber = Math.floor(Math.random() * 40) + 1;
    if (!uniqueRandomNumbers.includes(randomNumber)) {
      uniqueRandomNumbers.push(randomNumber);
    }
  }
  console.log(uniqueRandomNumbers);
  return uniqueRandomNumbers;
};

const randomIds = generateUniqueRandomNumbers(users.length);

const newUsers = users.map((user, idx) => {
  return {
    ...user,
    id: `Alt${randomIds[idx]}`,
    track: randomTrack(),
  };
});

export { newUsers };
