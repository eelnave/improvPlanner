import {Component, Injectable, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PlayerService} from '../player.service';
import {Player} from '../players.model';

@Component({
  selector: 'app-new-player-form',
  templateUrl: './new-player-form.component.html',
  styleUrls: ['./new-player-form.component.scss']
})

@Injectable()
export class NewPlayerFormComponent implements OnInit {


  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const formValues = form.value;
    const newPlayer = new Player(formValues.firstName, formValues.lastName);
    this.playerService.addPlayer(newPlayer);
  }

}
