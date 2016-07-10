import {Component} from '@angular/core';
import {OnInit} from '@angular/core';

@Component({
    selector: 'my-puzzle',
    templateUrl: './dev/puzzle/puzzle.tpl.html'
})

export class PuzzleComponent implements OnInit{
    switchOneNumber: number;
    switchTwoNumber: number;
    switchThreeNumber: number;
    switchFourNumber: number;
    
    ngOnInit():any{
        this.switchOneNumber = Math.round(Math.random());
        this.switchTwoNumber = Math.round(Math.random());
        this.switchThreeNumber = Math.round(Math.random());
        this.switchFourNumber = Math.round(Math.random());

        console.log(this.switchOneNumber, this.switchTwoNumber, this.switchThreeNumber, this.switchFourNumber);
    }


}