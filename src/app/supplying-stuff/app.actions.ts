import { createAction, props } from "@ngrx/store";
import { Word } from "db/word-interface";


export const setWord = createAction('Equivalence Set Variable', props<{ value: Word }>());