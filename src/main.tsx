import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Provider} from './components/chakra/provider'
import {DarkMode} from "./components/chakra/color-mode.tsx";
import {SessionProvider} from "./providers/session.tsx";
import type {SessionTypeEnum} from "./providers/models/session.ts";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider> <DarkMode>
            <SessionProvider initialState={{
                presetSession: null,
                sessionProgram: [],
                sessionDeadlines: [],
                currentSession: 0,
                eventCallbacks: {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    onSessionChange: (curSession: number, sessionType: SessionTypeEnum) => {
                    },
                    onSessionAllSessionDone: () => {
                    },
                }
            }}>
                <App/>
            </SessionProvider>
        </DarkMode> </Provider>
    </StrictMode>,
)
