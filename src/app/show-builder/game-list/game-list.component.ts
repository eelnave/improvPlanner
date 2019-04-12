import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewGameFormComponent} from './new-game-form/new-game-form.component';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openAdd(): void {
    const dialogRef = this.dialog.open(NewGameFormComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal Closed')
    });
  }
}
