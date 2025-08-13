import {createContext, useContext} from "react";
import * as React from "react";
import type {SessionState} from "./models/session.ts";
import type {SessionAction} from "./reducers/session.ts";

export const SessionContext = createContext<{
    state: SessionState,
    dispatch: React.Dispatch<SessionAction>
} | null>(null);


export function useSessionState() {
    return useContext(SessionContext) ?? {
        state: {} as SessionState,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        dispatch: (_) => {
            return
        },
    };
}