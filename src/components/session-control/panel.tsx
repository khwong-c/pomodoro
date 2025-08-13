import {
    Button, Container,
    createListCollection,
    Drawer,
    Fieldset,
    Stack,
} from "@chakra-ui/react";
import * as React from "react";

import {SingleSelector} from "../chakra/select";
import {useSessionState} from "../../providers/session-hooks.ts";
import {
    SessionDispatchCommand,
} from "../../providers/reducers/session.ts"
import {
    DispatchPresetSession,
    type DispatchPresetSessionEnum,
} from "../../providers/models/session.ts";

const presetChoices = createListCollection({
    items: [
        {label: "50-30-20 Mins Program", value: DispatchPresetSession.Preset503020},
    ],
})


const PresetSessionSelect = (
    props: {
        value: string,
        onChange: (value: DispatchPresetSessionEnum) => void,
    }
) => {
    const {value, onChange} = props;
    return (
        <SingleSelector
            collection={presetChoices}
            label={"Preset Program"}
            helperText={"Select a preset program"}
            value={value}
            onChange={onChange}
        />
    )
}


const SessionPanel = () => {
    const {state, dispatch} = useSessionState();
    return (
        <Container flex={4}>
            <Fieldset.Root flex={4} bg="gray.700" alignItems={"center"} p={4}>
                <Stack>
                    <Fieldset.Legend>Session Setting</Fieldset.Legend>
                    <Fieldset.HelperText>
                        TODO: FILL IN THE BLANKS
                    </Fieldset.HelperText>
                </Stack>
                <Fieldset.Content>
                    <PresetSessionSelect
                        value={state.presetSession ?? ""}
                        onChange={(value) => {
                            dispatch({
                                type: SessionDispatchCommand.ChangeSessionPreset,
                                payload: {preset: value},
                            })
                        }}
                    />
                </Fieldset.Content>
            </Fieldset.Root>
            <Drawer.Trigger>
                <Button>Start Session</Button>
            </Drawer.Trigger>
        </Container>

    );
}

export default SessionPanel;