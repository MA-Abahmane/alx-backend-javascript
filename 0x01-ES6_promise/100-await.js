import {uploadPhoto, createUser} from './utils'

export default async function asyncUploadUser() {

    try 
    {
        let pic = await uploadPhoto();
        let usr = await createUser();

        return {photo: pic, user: usr,};
    }
    catch 
    {
        return {photo: null, user: null,}
    }

}
