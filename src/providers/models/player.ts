import {useContext, createContext} from "react";
import * as React from "react";

export interface PlayerEvents {
    onPlayerReady: () => void;
    onPlayerStarted: () => void;
    onPlayerPaused: () => void;
}

export interface PlayerState {
    eventCallbacks: PlayerEvents;
}

export interface PlayerReduceCommand {
    type: string
}

export const WorkPlayerContext = createContext<{
    state: PlayerState,
    dispatch: React.Dispatch<PlayerReduceCommand>
} | null>(null);

export const RestPlayerContext = createContext<{
    state: PlayerState,
    dispatch: React.Dispatch<PlayerReduceCommand>
} | null>(null);


export function useWorkPlayerState() {
    return useContext(WorkPlayerContext);
}

export function useRestPlayerState() {
    return useContext(RestPlayerContext);
}
