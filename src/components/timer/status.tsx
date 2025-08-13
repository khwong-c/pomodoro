import {Box, Flex, Heading} from "@chakra-ui/react";

const SessionStatus = () => {
    return (
        <Flex width={"100%"} gap={4}>
            <Box
                bg={"blue.800"} p={4} borderRadius="md"
                mb={4} flex={3}
                alignContent={"center"}
            >
                <Heading>
                    Working Session
                </Heading>
            </Box>
            <Box
                bg={"blue.800"} p={4} borderRadius="md"
                mb={4} flex={1}
                alignContent={"center"}
            >
                <Heading>
                    Session: No. 1
                </Heading>
            </Box>
        </Flex>
    )
}

export default SessionStatus;