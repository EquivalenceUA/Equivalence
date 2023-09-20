import { Injectable } from '@angular/core';
import { Rule, RulePart } from '../supplying-stuff/rules';

@Injectable({
  providedIn: 'root'
})
export class RulePartsService {

  constructor() { }

  rule!: Rule;

  setRule(rule:Rule){
    this.rule = rule;
  }

}
