import {useReducer} from "react";
import * as React from "react";

import type {SessionState} from "./models/session.ts";
import {sessionReducer} from "./reducers/session.ts";
import {SessionContext} from "./session-hooks.ts";

export function SessionProvider(props: {
    children: React.ReactNode,
    initialState?: SessionState
}) {
    const {children, initialState} = props;
    const [state, dispatch] = useReducer(sessionReducer, initialState as SessionState);
    return (
        <SessionContext.Provider value={{state, dispatch}}>
            {children}
        </SessionContext.Provider>
    );
}

