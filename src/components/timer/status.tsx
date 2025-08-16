import {Box, Flex, Heading} from "@chakra-ui/react";
import {useSessionState} from "../../providers/session-hooks.ts";
import {SessionType} from "../../providers/models/session.ts";

const SessionStatus = () => {
    const {state} = useSessionState()
    const currentSession = state.sessionProgram[state.currentSession];
    const sessionTypeText = `${currentSession.type === SessionType.Work ? "Work" : "Rest"} Session`;
    return (
        <Flex width={"100%"} gap={4}>
            <Box
                bg={"blue.800"} p={4} borderRadius="md"
                mb={4} flex={3}
                alignContent={"center"}
            >
                <Heading>{sessionTypeText}</Heading>
            </Box>
            <Box
                bg={"blue.800"} p={4} borderRadius="md"
                mb={4} flex={1}
                alignContent={"center"}
            >
                <Heading>
                    Session: No. {state.currentSession + 1}
                </Heading>
            </Box>
        </Flex>
    )
}

export default SessionStatus;