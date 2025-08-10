import { useReducer} from "react";
import * as React from "react";

import {
    WorkPlayerContext,
    RestPlayerContext,
    type PlayerState,
    type PlayerReduceCommand
} from "./models/player.ts";



export function PlayerProvider(props: {
    children: React.ReactNode,
    workReducer: (prev: PlayerState, action: PlayerReduceCommand) => PlayerState,
    workInitialState?: PlayerState,
    restReducer: (prev: PlayerState, action: PlayerReduceCommand) => PlayerState,
    restInitialState?: PlayerState,
}) {
    const {children, workReducer, workInitialState, restReducer, restInitialState} = props;
    const [workState, workDispatch] = useReducer(workReducer, workInitialState as PlayerState);
    const [restState, restDispatch] = useReducer(restReducer, restInitialState as PlayerState);
    return (
        <WorkPlayerContext.Provider value={{state: workState, dispatch: workDispatch}}>
            <RestPlayerContext.Provider value={{state: restState, dispatch: restDispatch}}>
                {children}
            </RestPlayerContext.Provider>
        </WorkPlayerContext.Provider>
    );
}

