import { Component, Input } from '@angular/core';
import { RulePartsService } from 'src/app/services/rule-parts.service';
import { Rule, RulePart } from 'src/app/supplying-stuff/rules';

@Component({
  selector: 'app-rule-tile',
  templateUrl: './rule-tile.component.html',
  styleUrls: ['./rule-tile.component.scss']
})
export class RuleTileComponent {

  @Input() rule!:Rule

  constructor(
    private _rules:RulePartsService
  ){}

  setRule(rule : Rule){
    this._rules.setRule(rule);
  }



}
