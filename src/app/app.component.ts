import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import * as firebase from "firebase";
import { UtilityService } from './services/utility.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    private userInfoDialogOptions = {
        minWidth: '98%',
        maxWidth: '98%',
        height: '95%',
        backdropClass: "backdrop",
        disableClose: true
    };

    constructor(public dialog: MatDialog, public utility: UtilityService) {
        if (!utility.isMobile()) {
            this.userInfoDialogOptions.minWidth = "30%";
            this.userInfoDialogOptions.maxWidth = "30%";
        }
    }

    public login(): void {
        if (!this.utility.isMobile()) {
            this.userInfoDialogOptions.height = !!firebase.auth().currentUser ? "90%" : "45%";
        }
        this.dialog.open(DialogComponent, {
            ...this.userInfoDialogOptions,
            data: {
                type: "auth",
                user: firebase.auth().currentUser
            }
        });
    }
}