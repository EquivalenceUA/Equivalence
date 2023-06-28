import { WORDS } from "db/first-db";
import { AppState } from "./app.state";
import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { setWord } from "./app.actions";


const initialWordState: AppState = {
    word:  WORDS[0],
}

export const wordReducer = createReducer(
    initialWordState,
    on(setWord, (state, {value}) => ({
        ...state,
        word: value
    }))
);

export const selectAppFeature = createFeatureSelector<AppState>('wordSearchModule');
export const selectWord = createSelector(selectAppFeature, (state: AppState) => state.word);