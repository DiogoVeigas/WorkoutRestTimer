export default Strings = (language = 'english') => {
    switch(language){
        case 'english':
            return {
                editButtonTime: "Edit Button Time",
                editTime: "Edit Time",
                cancel: "Cancel",
                save: "Save",
                changesSaved: "Your changes have been saved!",
                changesCanceled: "Changes discarded.",
                themeChanged: "Your theme has been changed.",
                languageChange: "The language has been changed."
            };
        case 'portuguese':
            return {
                editButtonTime: "Editar botão",
                editTime: "Editar tempo",
                cancel: "Anular",
                save: "Guardar", 
                changesSaved: "As tuas alterações foram guardadas!",
                changesCanceled: "Alterações descartadas.",
                themeChanged: "O teu tema foi alterado.",
                languageChange: "O idioma foi alterado"
            };
    }
}

export const languages = () => {
    return ['english', 'portuguese'];
};