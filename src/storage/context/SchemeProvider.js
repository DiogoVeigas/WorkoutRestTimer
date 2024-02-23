import { createContext, useState, useEffect } from "react";
import { useColorScheme } from "react-native";

import { getScheme } from "../asyncStorage/colorScheme";

export const ColorSchemeContext = createContext();

export const SchemeProvider = ({ children }) => {
    const [colorScheme, setColorScheme] = useState("system");
    const systemColorScheme = useColorScheme();
    
    useEffect(() => {
        const fetchStoredScheme = async () => {
            try {
                const storedScheme = await getScheme();
                setColorScheme(storedScheme != null ? storedScheme : systemColorScheme);
            } catch (error) {
                console.error(error);
            }
        };
    
        fetchStoredScheme();
    }, []);

    //console.log(colorScheme)
    return (
        <ColorSchemeContext.Provider value={{ colorScheme, setColorScheme }}>
            {children}
        </ColorSchemeContext.Provider>
    );
};