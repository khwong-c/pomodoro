import type {DispatchPresetSessionEnum, SessionState} from "../models/session.ts";
import {dispatchPresetSession} from "../models/session.ts";

export interface SessionEventSelectPresetSessions {
    preset: DispatchPresetSessionEnum
}

export interface SessionEventStart {
    currentTime: number
}

export const SessionDispatchCommand = {
    ChangeSessionPreset: "ChangeSessionPreset",
    BeginSessions: "BeginSessions",
    NextSession: "NextSession",
}

export type SessionDispatchCommandEnum = typeof SessionDispatchCommand[keyof typeof SessionDispatchCommand];

export interface SessionAction {
    type: SessionDispatchCommandEnum
    payload: (
        SessionEventSelectPresetSessions |
        SessionEventStart |
        undefined | null
        )
}

export function sessionReducer(prev: SessionState, action: SessionAction): SessionState {
    switch (action.type) {
        case SessionDispatchCommand.ChangeSessionPreset: {
            const payload = action.payload as SessionEventSelectPresetSessions;
            return {
                ...prev,
                presetSession: payload.preset,
                sessionProgram: dispatchPresetSession(payload.preset),
            }
        }
        case SessionDispatchCommand.BeginSessions: {
            const payload = action.payload as SessionEventStart;
            let sumOfTime = 0
            return {
                ...prev,
                sessionDeadlines: prev.sessionProgram.map(
                    (session) =>
                        payload.currentTime + (sumOfTime += session.length) * 1000 // Time is in ms.
                ),
                currentSession: 0,
            }
        }
        case SessionDispatchCommand.NextSession: {
            const nextSession = prev.currentSession < (prev.sessionProgram.length - 1) ?
                prev.currentSession + 1 : prev.currentSession;
            return {
                ...prev,
                currentSession: nextSession,
            }
        }
        default:
            return prev;
    }
}