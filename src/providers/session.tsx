import {useReducer} from "react";
import * as React from "react";
import {
    SessionContext,
    type SessionState,
    type SessionReduceCommand
} from "./models/session.ts";


export function SessionProvider(props: {
    children: React.ReactNode,
    reducer: (prev: SessionState, action: SessionReduceCommand) => SessionState,
    initialState?: SessionState
}) {
    const {children, reducer, initialState} = props;
    const [state, dispatch] = useReducer(reducer, initialState as SessionState);
    return (
        <SessionContext.Provider value={{state, dispatch}}>
            {children}
        </SessionContext.Provider>
    );
}

