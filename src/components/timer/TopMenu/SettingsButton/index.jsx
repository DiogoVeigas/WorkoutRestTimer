import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

import { responsiveSize } from "../../../../styles/index";
import Button from "../../../general/Button/index";

import { useContext, useEffect, useLayoutEffect, useRef } from "react";
import { ColorSchemeContext } from "../../../../storage/context/SchemeProvider";
import { getColorsByScheme } from "../../../../styles/index";

import { LanguageContext } from "../../../../storage/context/LanguageProvider";
import { languages } from "../../../../res/strings";
import { saveLanguage } from "../../../../storage/asyncStorage/language";

import { languageToast } from "../../../../services/toastAndroid/index";

export default function SettingsMenu() {
  const { colorScheme, setColorScheme } = useContext(ColorSchemeContext);
  const { language, setLanguage } = useContext(LanguageContext);

  const availableLanguages = new NavigationArray(languages());

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    languageToast(language);
    saveLanguage(language);
  }, [language]);

  return (
    <Button
      onPress={() => {
        const nextLanguage = availableLanguages.next();
        setLanguage(nextLanguage);
      }}
    >
      <FontAwesomeIcon
        icon={faGear}
        size={responsiveSize(40)}
        color={getColorsByScheme(colorScheme).text}
      />
    </Button>
  );
}

class NavigationArray extends Array {
  constructor(array) {
    if (array.length !== 2) {
      throw new Error("NavigationArray should only be initialized with two elements.");
    }
    super(...array);
    this.current = 0;
  }

  next() {
    this.current = 1 - this.current; // Toggle between 0 and 1
    return this[this.current];
  }

  prev() {
    this.current = 1 - this.current; // Toggle between 0 and 1
    return this[this.current];
  }
}