import { fetchUsers } from './fetchUsers.js';
import { newUsers } from './usersList.js';

// initialize variables

fetchUsers()
  .then((userData) => displayUsersInTable(userData))
  .catch((err) => console.error(err));

function displayUsersInTable(users) {
  let userData = ''

  users.map((user) => {
    const { firstName, lastName, imageUrl, track, email, id, gender } = user

    return userData += `
      <tr id=${id}>
        <td>
          <a href="#">
            <img
              class="profile_image"
              id=${id}
              src="${imageUrl}"
              alt="${firstName} ${lastName}'s image"
            />
          </a>
        </td>
        <td>
          <a href="#" id=${id}> ${firstName} ${lastName} </a>
        </td>
        <td>${id}</td>
        <td>${track}</td>
        <td>${(gender === 'F') ? 'Female' : 'Male'}</td>
        <td>${email}</td>
      </tr>
    `
  })
  console.log(users);

  return document.querySelector('#user-list').innerHTML = userData
}

document.querySelector('#user-list').addEventListener('click', (e) => displayMoreDetails(e.target.id))

function displayMoreDetails(userID) {
  const userData = newUsers.find(user => user.id === userID)

  const {firstName, lastName, imageUrl, track, age, gender} = userData

  const userDetails = `
    <div class="aside_container">
      <div class="aside_profile">
        <p class="aside_profile_student">Student</p>
        <img
          class="aside_profile_image"
          src="${imageUrl}"
          alt="${firstName} ${lastName}'s image"
        />
        <h3 class="aside_content_name">${firstName} ${lastName}</h3>
        <p>${track}</p>
        <p>Age: ${age}</p>
        <p>Gender: ${gender}</p>
      </div>

      <div class="aside_profile_info">
        <h4 class="aside_profile_info_about">About</h4>
        <p>
          Meet ${firstName} ${lastName}, a remarkable <br />individual whose passion for
          <br />creativity knows no bounds. <br />With a heart full of
          <br />compassion and a mind <br />teeming with innovative ideas,<br />
          Mary has been a guiding <br />light for many.
        </p>
      </div>
      <div class="aside_profile_schedule">
        <h4 class="aside_profile_schedule_head">Schedule</h4>
        <p class="schedule_town_hall">Town Hall</p>
        <p class="schedule_live_class">Live class</p>
        <p class="schedule_fun_friday">Fun Friday</p>
      </div>
    </div>
  `
  return document.querySelector('#more-student-details').innerHTML = userDetails
}

// console.log(newUsers);
