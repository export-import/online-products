import { Injectable } from '@angular/core';
import { AngularFireAuth, } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(public afAuth: AngularFireAuth) { }

    public facebook(): Promise<any> {
        let provider = new firebase.auth.FacebookAuthProvider();
        return this.afAuth.auth.signInWithPopup(provider);
    }

    public google(): Promise<any> {
        let provider = new firebase.auth.GoogleAuthProvider();
        return this.afAuth.auth.signInWithPopup(provider);
    }
}
