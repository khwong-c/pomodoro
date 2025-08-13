import {Box, Center} from "@chakra-ui/react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import '@leenguyen/react-flip-clock-countdown/dist/index.css';


const SessionTimer = () => {
    return (
        <Box bg={"blue.800"} p={4} borderRadius="md" mb={4} width="100%">
            <Center>
                <FlipClockCountdown
                    to={new Date().getTime() + 3600 * 1000 + 5000}
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
                        clock:"1rem",
                        digitBlock:"1rem",
                    }}
                />
            </Center>
        </Box>
    )
}
export default SessionTimer