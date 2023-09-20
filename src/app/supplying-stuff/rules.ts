export interface Rule{
    ruleName:string;
    ruleParts: RulePart[];
}

export interface RulePart{
    rulePartName: string;
    routerLink: string;
    isReady: boolean;
}

export const RULES : Rule[] = [
    {
      ruleName: 'Grammar (Active Voice)',
      ruleParts: 
      [
        {
          rulePartName: 'Present Simple',
          routerLink: '/present-simple',
          isReady: true
        },
        {
          rulePartName: 'Present Continuous',
          routerLink: '/not-done-yet',
          isReady: false
        },
        {
          rulePartName: 'Present Perfect',
          routerLink: '/not-done-yet',
          isReady: false
        },
        {
          rulePartName: 'Past Simple',
          routerLink: '/not-done-yet',
          isReady: false
        },
        {
          rulePartName: 'Past Continuous',
          routerLink: '/not-done-yet',
          isReady: false
        },
        {
          rulePartName: 'Past Perfect',
          routerLink: '/not-done-yet',
          isReady: false
        },
        {
          rulePartName: 'Future Simple',
          routerLink: '/not-done-yet',
          isReady: false
        },
        {
          rulePartName: 'Future Continuous',
          routerLink: '/not-done-yet',
          isReady: false
        },
        {
          rulePartName: 'Future Perfect',
          routerLink: '/not-done-yet',
          isReady: false
        },
        {
          rulePartName: 'Present Perfect Continuous',
          routerLink: '/not-done-yet',
          isReady: false
        },
        {
          rulePartName: 'Past Perfect Continious',
          routerLink: '/not-done-yet',
          isReady: false
        },
        {
          rulePartName: 'Future Perfect Continious',
          routerLink: '/not-done-yet',
          isReady: false
        },
        {
          rulePartName: 'Tenses Table',
          routerLink: '/not-done-yet',
          isReady: false
        },
      ]
    },
    {
      ruleName: 'Modal Verbs',
      ruleParts: []
    },
    {
      ruleName: 'Clauses',
      ruleParts: []
    },
    {
      ruleName: 'Passive voice',
      ruleParts: []
    },
    {
      ruleName: 'Gerund and Infinitive',
      ruleParts: []
    },
    {
      ruleName: 'Talking About Habits',
      ruleParts: []
    },
    {
      ruleName: 'Useful Expressions',
      ruleParts: []
    },
    {
      ruleName: 'Additional',
      ruleParts: []
    },
  ]