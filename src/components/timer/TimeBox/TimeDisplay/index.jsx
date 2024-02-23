import Button from "../../../general/Button/index";
import Txt from "../../../general/Txt/index";

import { defaultStyle } from "./styles";

import { secondsToMinutes } from "../../../../services/utils/time";

export default function TimeDisplay({ time = 0, setTime, setTimerEditPair, setModalOpen }) {

  function onLongPressHandler() {
		setTimerEditPair([time, setTime, 0]);
		setModalOpen(prev => prev === true ? false : true);
	}

  return (
    <Button onLongPress={onLongPressHandler}>
      <Txt size={100} style={defaultStyle().text}>
        {secondsToMinutes(time)}
      </Txt>
    </Button>
  );
}
