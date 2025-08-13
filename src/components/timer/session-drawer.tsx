import {Button, Drawer, Stack} from "@chakra-ui/react";
import SessionStatus from "./status.tsx";
import SessionTimer from "./timer.tsx";
import SessionSubtitle from "./subtitle.tsx";

const SessionDrawer = () => {
    return (
        <Drawer.Content bg="gray.900" borderRadius="md" boxShadow="lg" height="100%">
            <Drawer.Header>
                <Drawer.Title>
                    Pomodoro Timer
                </Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
                <Stack height="100%" width="100%" gap={4} alignItems="center">
                    <SessionStatus/>
                    <SessionTimer/>
                    <SessionSubtitle/>
                </Stack>
            </Drawer.Body>
            <Drawer.Footer>
                <Drawer.CloseTrigger asChild>
                    <Button variant="outline">Cancel</Button>
                </Drawer.CloseTrigger>
                <Button>Save</Button>
            </Drawer.Footer>
        </Drawer.Content>
    )
}

export default SessionDrawer;