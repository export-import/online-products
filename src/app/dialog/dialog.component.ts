import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from '../services/auth.service';
import * as firebase from "firebase";

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

    constructor(public dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { type: string, user: firebase.User },
        private authService: AuthService) { }

    public onNoClick(): void {
        this.dialogRef.close();
    }

    public async facebookLogin(): Promise<any> {
        try {
            await this.authService.facebook();
            console.log(JSON.stringify(firebase.auth().currentUser, null, 4));
        } catch (error) {
            console.log(error.message);
        } finally {
            this.onNoClick();
        }
    }

    public async googleLogin(): Promise<any> {
        try {
            await this.authService.google();
        } catch (error) {
            console.log(error.message);
        } finally {
            this.onNoClick();
        }
    }

    public async logout(): Promise<any> {
        try {
            await firebase.auth().signOut();
            this.onNoClick();
        } catch (error) {
            console.log(error.message);
        } finally {
            this.onNoClick();
        }
    }
}
