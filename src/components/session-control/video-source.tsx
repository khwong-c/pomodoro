import {Button, Field, Fieldset, Flex, Input} from "@chakra-ui/react";

const VideoSourceInput = () => {
    return (
        <Fieldset.Root bg="gray.700" alignItems={"center"} p={4}>
            <Fieldset.Content>
                <Field.Root>
                    <Field.Label>Video Source</Field.Label>
                    <Flex width="100%" gap={2} alignItems="center">
                        <Input flex={8} name="name"/>
                        <Button flex={3}>Change Video</Button>
                    </Flex>
                </Field.Root>
            </Fieldset.Content>
        </Fieldset.Root>
    )
}

export default VideoSourceInput;