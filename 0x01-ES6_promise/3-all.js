import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then(([photoData, userData]) => {
    console.log(photoData.body, userData.firstName, userData.lastName);
  }).catch((err) => console.log('Signup system offline'));
}
