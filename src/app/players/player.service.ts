import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Player } from './player.model';

@Injectable()
export class PlayerService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private apiUrl = 'http://localhost:62831/api/players';  // URL to web api

    constructor(private http: Http) { }

    getPlayers(): Promise<Player[]> {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(response => response.json() as Player[])
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
