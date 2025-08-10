import {useContext, createContext, useReducer} from "react";
import * as React from "react";

export const SessionTypeWORK = "WORK", SessionTypeBREAK = "BREAK";

interface SessionEvents {
    onSessionStart: (curSession: number) => void;
    onSessionEnd: (curSession: number) => void;
    onSessionChange: (curSession: number, sessionType: string) => void;
    onSessionAllSessionDone: () => void;
}

interface SessionState {
    totalSessions: number;
    currentSession: number;
    sessionState: string;
workSessionLength: number; // in seconds
breakSessionLength: number; // in seconds
eventCallbacks: SessionEvents;
}

interface SessionReduceCommand {
    type: string
}

const context = createContext<{
    state: SessionState,
    dispatch: React.Dispatch<SessionReduceCommand>
} | null>(null);


export function useSessionState() {
    return useContext(context);
}

export function SessionProvider(props: {
    children: React.ReactNode,
    reducer: (prev: SessionState, action: SessionReduceCommand) => SessionState,
    initialState?: SessionState
}) {
    const {children, reducer, initialState} = props;
    const [state, dispatch] = useReducer(reducer, initialState as SessionState);
    return (
        <context.Provider value={{state, dispatch}}>
            {children}
        </context.Provider>
    );
}

