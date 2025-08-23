import {Box, Center} from "@chakra-ui/react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import {useSessionState} from "../../providers/session-hooks.ts";
import {SessionDispatchCommand} from "../../providers/reducers/session.ts";


const SessionTimer = (
    prop: {
        nextDeadline: number,
    }
) => {
    const {nextDeadline} = prop;
    const {state, dispatch} = useSessionState();
    return (
        <Box bg={"blue.800"} p={4} borderRadius="md" mb={4} width="100%">
            <Center>
                <FlipClockCountdown
                    to={nextDeadline}
                    renderMap={
                        // Days, Hours, Minutes, Seconds
                        [false, false, true, true]
                    }
                    showLabels={false}
                    digitBlockStyle={{
                        width: "8rem",
                        height: "10rem",
                        fontSize: "7rem",
                    }}
                    spacing={{
                        clock: "1rem",
                        digitBlock: "1rem",
                    }}
                    onComplete={() => {
                        dispatch({
                            type: SessionDispatchCommand.NextSession,
                            payload: null,
                        });
                        if (state.currentSession == state.sessionProgram.length-1) {
                            state.eventCallbacks.onSessionAllSessionDone();
                            return
                        }
                        const nextSession = state.currentSession + 1;
                        state.eventCallbacks.onSessionChange(nextSession, state.sessionProgram[nextSession].type);
                    }}
                />
            </Center>
        </Box>
    )
}
export default SessionTimer