import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import { responsiveSize } from "../../../../styles/index";
import Button from "../../../general/Button/index";

import { useContext, useEffect, useLayoutEffect, useRef } from "react";
import { ColorSchemeContext } from "../../../../storage/context/SchemeProvider";
import { getColorsByScheme } from "../../../../styles/index";

import { saveScheme } from "../../../../storage/asyncStorage/colorScheme";

import { LanguageContext } from "../../../../storage/context/LanguageProvider";
import { themeToast } from "../../../../services/toastAndroid/index";

export default function ThemeButton() {
  const { colorScheme, setColorScheme } = useContext(ColorSchemeContext);

  const { language } = useContext(LanguageContext);

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    themeToast(language);
  }, [colorScheme]);

  return (
    <Button
      onPress={() => {
        const newScheme = colorScheme === "light" ? "dark" : "light";
        setColorScheme(newScheme);
        saveScheme(newScheme);
      }}
    >
      <FontAwesomeIcon
        icon={colorScheme === "light" ? faSun : faMoon}
        size={responsiveSize(40)}
        color={getColorsByScheme(colorScheme).text}
      />
    </Button>
  );
}
