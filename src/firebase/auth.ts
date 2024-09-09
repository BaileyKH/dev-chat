import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updatePassword, UserCredential } from "firebase/auth";

export const createUser = async (email: string, password: string): Promise<UserCredential> => {
    return createUserWithEmailAndPassword(auth, email, password);
}

export const signIn = (email: string, password: string): Promise<UserCredential> => {
    return signInWithEmailAndPassword(auth, email, password);
}

export const signOut = (): Promise<void> => {
    return auth.signOut();
}

export const passwordReset = (email: string): Promise<void> => {
    return sendPasswordResetEmail(auth, email);
}

export const passwordChange = async (password: string): Promise<void> => {
    if (auth.currentUser) {
        return updatePassword(auth.currentUser, password);
    } else {
        throw new Error("No user is currently signed in.")
    }
    
}

export const emailVerification = async (): Promise<void> => {
    if (auth.currentUser){
        return sendEmailVerification(auth.currentUser, {
            url: `${window.location.origin}/home`,
        });
    } else {
        throw new Error("No user is currently signed in.")
    }
    
}