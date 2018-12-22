import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

    public user: any;

    constructor(public dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private authService: AuthService) { }

    public onNoClick(): void {
        this.dialogRef.close();
    }

    public async facebookLogin(): Promise<any> {
        try {
            this.user = await this.authService.facebook();
            console.log(JSON.stringify(this.user, null, 4));
        } catch (error) {
            console.log(error.stack);
        }
    }

    public async googleLogin(): Promise<any> {
        try {
            this.user = await this.authService.google();
            console.log(JSON.stringify(this.user, null, 4));
        } catch (error) {
            console.log(error.stack);
        }
    }
}
