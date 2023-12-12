import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset } from "./counter.actions";

/**
 *? Ici le fichier reducer.
 * Le reducer ecoute les actions déclanché (dispatch) par mon composant.
 * les actions qu'il écoute sont importé.
 */


 // l'initialisation de mon counter.
 export const initialState = 0;


 // le reducer de mon counter.
 export const counterReducer = createReducer(
    initialState, 
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(reset, (state) => 0)
 )
