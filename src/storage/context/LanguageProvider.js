import { createContext, useState, useEffect } from "react";

import { getLanguage } from "../asyncStorage/language";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const defaultLanguage = 'english';
    const [language, setLanguage] = useState(defaultLanguage);

    useEffect(() => {
        const fetchStoredLanguage = async () => {
            try {
                const storedLanguage = await getLanguage();
                //console.log("storedLanguage: " + storedLanguage)
                setLanguage(storedLanguage != null ? storedLanguage : defaultLanguage);
            } catch (error) {
                console.error(error);
            }
        };

        fetchStoredLanguage();
        //console.log("storedLanguage: " + language)
    }, []);

    
    return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};