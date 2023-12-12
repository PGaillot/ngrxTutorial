import { Component } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { increment, decrement, reset } from "../counter.actions";

@Component({
    selector:'app-my-counter',
    templateUrl:'./my-counter.component.html',
})


/**
 * ? Le Composent qui déclanche mes actions.
 * 
 */
export class MyCounterComponent{

    count$:Observable<number>;

    constructor(private store:Store<{count:number}>){
        this.count$ = store.pipe(select('count'));
    }

    increment(){
        this.store.dispatch(increment()); //? dispatch déclanche l'action increment qui est écouté par le reducer.
    }

    decrement(){
        this.store.dispatch(decrement());
    }

    reset(){
        this.store.dispatch(reset());
    }

}

