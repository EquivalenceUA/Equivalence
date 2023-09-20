import { Component, Input } from '@angular/core';
import { RulePart } from 'src/app/supplying-stuff/rules';

@Component({
  selector: 'app-rule-part',
  templateUrl: './rule-part.component.html',
  styleUrls: ['./rule-part.component.scss']
})
export class RulePartComponent {

  @Input() rulePart!: RulePart;

}
