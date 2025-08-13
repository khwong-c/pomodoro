export const SessionType = {
    Work: "WORK",
    Rest: "REST",
}
export type SessionTypeEnum = typeof SessionType[keyof typeof SessionType];

export const DispatchPresetSession = {
    Preset503020: "Preset-50-30-20",
}
export type DispatchPresetSessionEnum = typeof DispatchPresetSession[keyof typeof DispatchPresetSession];

export interface Session {
    type: SessionTypeEnum;
    length: number; // In seconds
}

export const dispatchPresetSession = (preset: DispatchPresetSessionEnum): Session[] => {
    const minutes = 60;
    switch (preset) {
        case DispatchPresetSession.Preset503020:
            return [
                {type: SessionType.Work, length: 50 * minutes},
                {type: SessionType.Rest, length: 10 * minutes},
                {type: SessionType.Work, length: 30 * minutes},
                {type: SessionType.Rest, length: 10 * minutes},
                {type: SessionType.Work, length: 20 * minutes},
                {type: SessionType.Rest, length: 10 * minutes},
            ]
        default:
            return [];
    }
}

export interface SessionEvents {
    onSessionStart: (curSession: number) => void;
    onSessionEnd: (curSession: number) => void;
    onSessionChange: (curSession: number, sessionType: SessionTypeEnum) => void;
    onSessionAllSessionDone: () => void;
}

export interface SessionState {
    presetSession: DispatchPresetSessionEnum | null;
    sessionProgram: Session[];
    currentSession: number;
    eventCallbacks: SessionEvents;
}