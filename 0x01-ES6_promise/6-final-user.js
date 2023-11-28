import singUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([singUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((message) => message.map((result) => ({
      status: result.status,
      value: result.status !== 'fulfilled' ? result.reason.message : result.value,
    })));
}