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
    private dialogOptions = { minWidth: '98%', maxWidth: '98%', height: '95%', disableClose: true };

    constructor(db: AngularFireDatabase,
        public dialog: MatDialog,
        public location: Location,
        private activeRoute: ActivatedRoute) {
        this.db = db;
    }

    public ngOnInit(): void {
        this.items = [
            {
                "name": "Hydrogen",
                "position": 1,
                "symbol": "H",
                "weight": 1.0079
            },
            {
                "name": "Helium",
                "position": 2,
                "symbol": "He",
                "weight": 4.0026
            },
            {
                "name": "Lithium",
                "position": 3,
                "symbol": "Li",
                "weight": 6.941
            },
            {
                "name": "Beryllium",
                "position": 4,
                "symbol": "Be",
                "weight": 9.0122
            },
            {
                "name": "Boron",
                "position": 5,
                "symbol": "B",
                "weight": 10.811
            },
            {
                "name": "Carbon",
                "position": 6,
                "symbol": "C",
                "weight": 12.0107
            },
            {
                "name": "Nitrogen",
                "position": 7,
                "symbol": "N",
                "weight": 14.0067
            },
            {
                "name": "Oxygen",
                "position": 8,
                "symbol": "O",
                "weight": 15.9994
            },
            {
                "name": "Fluorine",
                "position": 9,
                "symbol": "F",
                "weight": 18.9984
            },
            {
                "name": "Neon",
                "position": 10,
                "symbol": "Ne",
                "weight": 20.1797
            }
        ];
        // this.db.list("/items").valueChanges().subscribe((items: Array<any>) => {
        //     this.items = items || [];
        //     !!this.activeRoute.snapshot.queryParams.name &&
        //         this.openDialog(this.items.find((item) => item.name === this.activeRoute.snapshot.queryParams.name));
        // });
    }

    public openDialog(item: any): void {
        if (!!item) {
            this.location.replaceState("", `?name=${item.name}`);
            this.dialog.open(DialogComponent, { ...this.dialogOptions, data: { ...item, type: "details" } })
                .afterClosed().toPromise().then(() => this.location.replaceState("", ""));
        }
    }
}