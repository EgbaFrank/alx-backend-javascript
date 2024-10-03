import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then(([photoData, userData]) => {
    console.log(photoData.body, userData.firstName, userData.lastName);
  }).catch((err) => {
    console.error('Signup system offline', err);
  });
}
