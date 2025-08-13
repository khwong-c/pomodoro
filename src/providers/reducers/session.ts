import type {DispatchPresetSessionEnum, SessionState} from "../models/session.ts";
import {dispatchPresetSession} from "../models/session.ts";

export interface SessionEventSelectPresetSessions {
    preset: DispatchPresetSessionEnum
}

export const SessionDispatchCommand = {
    ChangeSessionPreset: "ChangeSessionPreset",
}

export type SessionDispatchCommandEnum = typeof SessionDispatchCommand[keyof typeof SessionDispatchCommand];

export interface SessionAction {
    type: SessionDispatchCommandEnum
    payload: (SessionEventSelectPresetSessions | undefined)
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
        default:
            return prev;
    }
}