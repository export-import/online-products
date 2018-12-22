import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public user: any;
    private dialogOptions = { minWidth: '98%', maxWidth: '98%', height: '70%', disableClose: true };

    constructor(public dialog: MatDialog) {
    }

    public login(): void {
        this.dialog.open(DialogComponent, { ...this.dialogOptions, data: { type: "auth"} });
    }
}