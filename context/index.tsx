
import { createContext } from "react";

export interface AppContextProps{
    state: AppStates;
    setAppState: () => void;
}

export enum AppStates{
    home = "home",
    notHome = "notHome",
    menu = "menu"
}

export const AppContext = createContext<AppStates>(AppStates.home);
