import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

import { responsiveSize } from "../../../../styles/index";
import Button from "../../../general/Button/index";

import { useContext } from "react";
import { ColorSchemeContext } from "../../../../storage/context/SchemeProvider";
import { getColorsByScheme } from "../../../../styles/index";

export default function ResetButton({ setTime, Notifications }) {
  const { colorScheme, setColorScheme } = useContext(ColorSchemeContext);

  async function resetHandling() {
    Notifications.cancelAllScheduledNotificationsAsync();
    setTime(0);
  }

  return (
    <Button style={{ paddingTop: 30 }} onPress={resetHandling}>
      <FontAwesomeIcon
        icon={faRotateRight}
        size={responsiveSize(30)}
        color={getColorsByScheme(colorScheme).text}
      />
    </Button>
  );
}
