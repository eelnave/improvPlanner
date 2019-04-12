import { Injectable } from '@angular/core';
import {Player} from './players.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  addPlayer(newPlayer: Player) {
    this.http.post(
      'localhost:3000/api/players',
      newPlayer);
  }

  getPlayers() {
    return this.http.get(
      'localhost:3000/api/players'
    );
  }
}
