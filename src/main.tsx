import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Provider} from './components/chakra/provider'
import {DarkMode} from "./components/chakra/color-mode.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider>
            <DarkMode>
                <App/>
            </DarkMode>
        </Provider>
    </StrictMode>,
)
