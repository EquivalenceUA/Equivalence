import { Component } from '@angular/core';
import { RULES, Rule } from 'src/app/supplying-stuff/rules';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent {

  rules: Rule[]=[];

  ngOnInit(){
    this.rules = RULES;
  }

}
