import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const pic = await uploadPhoto();
    const usr = await createUser();

    return { photo: pic, user: usr };
  } catch (error) {
    return { photo: null, user: null };
  }
}
