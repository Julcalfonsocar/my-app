import { async } from '@firebase/util';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {FirebaseAuth} from './config'


const googleProvider = new GoogleAuthProvider(); //Nueva instancia, como un clon

export const signInWithGoogle = async()=>{
    try{
        const result = await signInWithPopup(FirebaseAuth, googleProvider)
        const credentials = GoogleAuthProvider.credentialFromResult(result)
        console.log("~file: providers.js:11 ~singInwithGoogle ~ credentials:",credentials)
    }catch (error){
        console.log(error)
    }
}