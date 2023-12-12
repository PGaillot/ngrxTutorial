import {createAction} from '@ngrx/store'

/**
 *? Ici le fichier d'actions. 
 * les actions sont definis ici, et sont écouté par mon 'reducer', 
 * et sont également écouté par mes 'effects'.
 */


// Créer une nouvelle action, ici une action pour incrementer, decrementer et reset notre counter.
export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');

