import {Component, Injectable, OnInit} from '@angular/core';
import { Player } from './players.model';
import {MatDialog} from '@angular/material';
import {NewPlayerFormComponent} from './new-player-form/new-player-form.component';
import {PlayerService} from './player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})

@Injectable()
export class PlayerListComponent implements OnInit {
  newPlayer: Player;
  players;

  constructor(public dialog: MatDialog, private playersService: PlayerService) { }

  ngOnInit() {
    this.playersService.getPlayers().subscribe((response) => {
      this.players = response;
    });
    console.log(this.players);
  }

  openAdd(): void {
    const dialogRef = this.dialog.open(NewPlayerFormComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal Closed');
    });
  }
}
