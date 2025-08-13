// import {useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import {
    Box,
    Container,
    Drawer,
    Flex,
    Heading, Portal, Presence,
    Stack, type StackProps,
} from "@chakra-ui/react";
import ReactPlayer from "react-player";
import SessionPanel from "./components/session-control/panel.tsx";
import VideoSourceInput from "./components/session-control/video-source.tsx";
import {forwardRef, useEffect, useRef, useState} from "react";
import SessionDrawer from "./components/timer/session-drawer.tsx";

const DrawerContainer = forwardRef<HTMLDivElement, StackProps>(
    function DrawerContainer(props, ref) {
        return (
            <Stack
                pos="relative"
                overflow="hidden"
                align="flex-start"
                p="8"
                layerStyle="fill.subtle"
                ref={ref}
                {...props}
            />
        )
    },
)

function App() {
    const initialState = {
        src: undefined,
        pip: false,
        playing: false,
        controls: false,
        light: false,
        volume: 1,
        muted: false,
        played: 0,
        loaded: 0,
        duration: 0,
        playbackRate: 1.0,
        loop: false,
        seeking: false,
        loadedSeconds: 0,
        playedSeconds: 0,
    };

    type PlayerState = Omit<typeof initialState, 'src'> & {
        src?: string;
    };

    const [state1, setState1] = useState<PlayerState>(initialState);

    const load1 = (src?: string) => {
        setState1(prevState => ({
            ...prevState,
            src,
            playing: false,
            played: 0,
            loaded: 0,
            pip: false,
        }));
    };
    useEffect(() => {
        load1("https://www.youtube.com/watch?v=jfKfPfyJRdk")
    }, []);


    const portalRef = useRef<HTMLDivElement | null>(null)
    return (
        <Container minH="30rem" maxH="1400px" width="80vw" minW="80rem">
            <Drawer.Root placement={"top"} size={"full"}>
                <DrawerContainer ref={portalRef}>
                    <Stack bg="green.900" gap={2} alignItems="center" p={2} width="100%" height="100%">
                        <Box bg="gray.800" p={4}>
                            <Heading>
                                Welcome to Pomodoro Timer
                            </Heading>
                        </Box>
                        <Flex direction={{base: "column", md: "row"}} gap={4} width="100%" height="100%">
                            <Box bg="gray.800" p={4} width="100%" height="100%" flex={12}>
                                {/*<AspectRatio ratio={16 / 9}>*/}
                                <Box blur={state1.playing ? "md" : "none"} filter={"auto"} width="100%" height="100%">
                                    <ReactPlayer
                                        style={{width: '100%', height: 'auto', aspectRatio: '16/9'}}
                                        // onStart={() => setState1(prev => ({...prev, playing: true}))}
                                        onPause={() => setState1(prev => ({...prev, playing: false}))}
                                        onPlay={() => setState1(prev => ({...prev, playing: true}))}
                                        {...state1}
                                    />
                                </Box>
                                {/*</AspectRatio>*/}
                                <Presence present={true}
                                          animationName={{_open: "fade-in", _closed: "fade-out"}}
                                          animationDuration="moderate">
                                    <VideoSourceInput/>
                                </Presence>
                            </Box>
                            <SessionPanel/>
                        </Flex>
                    </Stack>
                </DrawerContainer>

                <Portal container={portalRef}>
                    <Drawer.Backdrop pos="absolute" boxSize="full"/>
                    <Drawer.Positioner pos="absolute" boxSize="full">
                        <SessionDrawer/>
                    </Drawer.Positioner>
                </Portal>
            </Drawer.Root>

        </Container>
    )
}


export default App
