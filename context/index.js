import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [activeTab, setActiveTab] = useState('BLOCKCHAINS');
    let sharedState = { activeTab, setActiveTab };

    return (
    <AppContext.Provider value={sharedState}>
        {children}
    </AppContext.Provider>
    );
} 

export function useAppContext() {
    return useContext(AppContext);
}