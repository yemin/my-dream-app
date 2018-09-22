import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Player} from './player.model';
import { PlayerService } from './player.service';

@Component({
    selector: 'app-my-players',
    templateUrl: './players.component.html'
})
export class PlayersComponent implements OnInit {
    players: Player[];
    selectedPlayer: Player;

    constructor(private router: Router, private playerService: PlayerService) { }

    getPlayers(): void {
        this.playerService.getPlayers().then(players => this.players = players);
        console.log('log' + this.players);
    }

    ngOnInit(): void {
        this.getPlayers();
    }

    onSelect(player: Player): void {
        this.selectedPlayer = player;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedPlayer.id]);
    }
}