import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
    selector: 'listing-component',
    templateUrl: './listing.component.html',
    styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

    public items: Array<any> = [];
    public displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    private db: AngularFireDatabase;

    constructor(db: AngularFireDatabase, public dialog: MatDialog) {
        this.db = db;
    }

    public ngOnInit(): void {
        this.db.list("/items").valueChanges().subscribe((items: Array<any>) => {
            this.items = items || [];
        });
    }

    public openDialog(item: any): void {
        const dialogRef = this.dialog.open(DialogComponent, {
            width: '80%',
            height: '80%',
            data: item
        });
    }
}