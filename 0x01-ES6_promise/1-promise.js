export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => (success ? resolve({ status: 200, body: 'Success' }) : reject('The fake API is not working currently')));
}
