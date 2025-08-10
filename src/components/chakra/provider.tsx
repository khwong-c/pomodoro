"use client"

import {ChakraProvider, defaultSystem} from "@chakra-ui/react"
import * as React from "react"

export const Provider = (
    props: { children: React.ReactNode }
) =>
    <ChakraProvider value={defaultSystem} {...props}/>;
