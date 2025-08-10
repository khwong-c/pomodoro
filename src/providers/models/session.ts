import {useContext, createContext} from "react";
import * as React from "react";

export const SessionTypeWORK = "WORK", SessionTypeBREAK = "BREAK";

export interface SessionEvents {
    onSessionStart: (curSession: number) => void;
    onSessionEnd: (curSession: number) => void;
    onSessionChange: (curSession: number, sessionType: string) => void;
    onSessionAllSessionDone: () => void;
}

export interface SessionState {
    totalSessions: number;
    currentSession: number;
    sessionState: string;
    workSessionLength: number; // in seconds
    breakSessionLength: number; // in seconds
    eventCallbacks: SessionEvents;
}

export interface SessionReduceCommand {
    type: string
}

export const SessionContext = createContext<{
    state: SessionState,
    dispatch: React.Dispatch<SessionReduceCommand>
} | null>(null);


export function useSessionState() {
    return useContext(SessionContext);
}