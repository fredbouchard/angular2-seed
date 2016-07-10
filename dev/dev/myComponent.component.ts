import {Component} from '@angular/core';
import {onInit} from '@angular/core';

@Component({
	selector: 'my-component',
	template: `
	<h2>Yeah!  {{ name }}</h2>
	<pre [style.color] = "!inputText1.value ? 'red' : 'green'">Code: {{ inputText1.value }}</pre>
	<input type="text" #inputText1 (keyup)="null"/>
	`,

})
export class myComponent implements onInit(){
	name: string;

	ngOnInit():any{
		this.name = "PHOQUE YOU";
	}
}