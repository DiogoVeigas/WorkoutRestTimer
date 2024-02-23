import Button from "../../../general/Button/index";
import Txt from "../../../general/Txt/index";

import { defaultStyle } from "./styles";

import { secondsToMinutes } from "../../../../services/utils/time";

import { notificationHandler } from "../../../../services/notificationHandler/index";

import { ButtonFeedback } from "../../../../services/soundConfig/index";

import { Vibration } from "react-native";

export default function PlusButton({
	id,
	buttonTime = 0,
	setButtonTime,
	time, setTime,
	setTimeBackgroundControl,
	setModalOpen,
	setTimerEditPair
}) {
	const buttonFeedback = ButtonFeedback();

	function onPressHandler() {
		buttonFeedback.playSound();
		Vibration.vibrate(100);

		setTimeBackgroundControl({ timerTime: time + buttonTime, currentTime: new Date().getTime() });

		setTime(currentTime => {
			if (currentTime + buttonTime < 6000)
				return currentTime + buttonTime;
			else
				return 5999;
		});

		notificationHandler(Number(time) + Number(buttonTime));
	}

	function onLongPressHandler() {
		setTimerEditPair([buttonTime, setButtonTime, id]);
		setModalOpen(prev => prev === true ? false : true);
	}

	return (
		<Button
			style={defaultStyle().button}
			onPressStyle={defaultStyle().buttonPress}
			onLongPress={onLongPressHandler}
			onPress={onPressHandler}
		>
			<Txt size={40} style={defaultStyle().text}>
				{secondsToMinutes(buttonTime)}
			</Txt>
		</Button>
	);
}
