import { Component } from '@angular/core';
import { RulePartsService } from 'src/app/services/rule-parts.service';

@Component({
  selector: 'app-rule-parts',
  templateUrl: './rule-parts.component.html',
  styleUrls: ['./rule-parts.component.scss']
})
export class RulePartsComponent {

constructor(
  private _rules:RulePartsService
){

}

  ruleParts = this._rules.rule;

}
