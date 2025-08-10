import {useContext, createContext, useReducer} from "react";
import * as React from "react";

interface PlayerEvents {
    onPlayerReady: () => void;
    onPlayerStarted: () => void;
    onPlayerPaused: () => void;
}

interface PlayerState {
    eventCallbacks: PlayerEvents;
}

interface PlayerReduceCommand {
    type: string
}

const workContext = createContext<{
    state: PlayerState,
    dispatch: React.Dispatch<PlayerReduceCommand>
} | null>(null);

const restContext = createContext<{
    state: PlayerState,
    dispatch: React.Dispatch<PlayerReduceCommand>
} | null>(null);


export function usePlayerWorkState() {
    return useContext(workContext);
}

export function usePlayerRestState() {
    return useContext(restContext);
}

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
        <workContext.Provider value={{state: workState, dispatch: workDispatch}}>
            <restContext.Provider value={{state: restState, dispatch: restDispatch}}>
                {children}
            </restContext.Provider>
        </workContext.Provider>
    );
}

