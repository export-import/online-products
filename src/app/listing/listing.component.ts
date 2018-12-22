import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'listing-component',
    templateUrl: './listing.component.html',
    styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

    public items: Array<any> = [];
    private db: AngularFireDatabase;
    private dialogOptions = { minWidth: '98%', maxWidth: '98%', height: '95%' };

    constructor(db: AngularFireDatabase,
        public dialog: MatDialog,
        public location: Location,
        private activeRoute: ActivatedRoute) {
        this.db = db;
    }

    public ngOnInit(): void {
        this.db.list("/items").valueChanges().subscribe((items: Array<any>) => {
            this.items = items || [];
            !!this.activeRoute.snapshot.queryParams.name &&
                this.openDialog(this.items.find((item) => item.name === this.activeRoute.snapshot.queryParams.name));
        });
    }

    public openDialog(item: any): void {
        if (!!item) {
            this.location.replaceState("", `?name=${item.name}`);
            this.dialog.open(DialogComponent, { ...this.dialogOptions, data: item })
                .afterClosed().toPromise().then(() => this.location.replaceState("", ""));
        }
    }
}