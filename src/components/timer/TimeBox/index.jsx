import ResetButton from "./ResetButton/index";
import PlusButton from "./PlusButton/index";
import TimeDisplay from "./TimeDisplay/index";
import TimeModal from "./TimeModal/index";

import { View, Vibration } from "react-native";
import { defaultStyle } from "./styles";

import { useState, useEffect } from "react";

import { Beep } from "../../../services/soundConfig/index";

import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
})

import { getButtons } from "../../../storage/asyncStorage/plusButton";

export default function TimeBox() {
  const style = defaultStyle();

  const [time, setTime] = useState(0);

  const buttonsTime = getButtons();
  const [buttonTime1, setButtonTime1] = useState(15);
  const [buttonTime2, setButtonTime2] = useState(45);

  useEffect(() => {
    const fetchButtonDuration = async () => {
      const storedButtons = await getButtons();
      setButtonTime1(storedButtons[0] != null && storedButtons[0]["1"] != null ? storedButtons[0]["1"] : 15);
      setButtonTime2(storedButtons[0] != null && storedButtons[0]["2"] != null ? storedButtons[0]["2"] : 45);
    };

    fetchButtonDuration();
  }, []);


  const beep = Beep();

  const [timeBackgroundControl, setTimeBackgroundControl] = useState({ timerTime: time, currentTime: new Date().getTime() })

  const [modalOpen, setModalOpen] = useState(false);

  const [timerEditPair, setTimerEditPair] = useState([]);

  useEffect(() => {
    const timeFlow = setInterval(() => {
      setTime((currentTime) => {
        if (currentTime > 0) {
          const realTimePassed = Math.floor((new Date().getTime() - timeBackgroundControl.currentTime) / 1000);

          const foregroundTimePassed = timeBackgroundControl.timerTime - time + 1;

          const timeDivergence = realTimePassed - foregroundTimePassed;

          if (timeDivergence === 0) { return currentTime - 1; }
          else if (currentTime - timeDivergence >= 0) { return currentTime - timeDivergence; }
          else { return 0; }

        }
        return currentTime;
      });
    }, 1000);

    return () => {
      clearInterval(timeFlow);
    };
  }, [time]);

  useEffect(() => {
    if (time === 1) {
      setTimeout(() => {
        beep.playSound();
        Vibration.vibrate();
      }, 1000);
    }
  }, [time, beep]);

  return (
    <View style={style.mainContainer}>
      <TimeModal modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        timerEditPair={timerEditPair}
        setTimeBackgroundControl={setTimeBackgroundControl}
      />

      <View style={style.displayContainerHeightWrapper}>
        <View style={style.displayContainer}>
          <TimeDisplay time={time}
            setTime={setTime}
            setTimerEditPair={setTimerEditPair}
            setModalOpen={setModalOpen}
          />
        </View>
      </View>

      <View style={style.buttonsContainer}>
        <ResetButton setTime={setTime} Notifications={Notifications} />
        <View style={style.plusButtonsContainer}>
          <PlusButton
            id={1}
            buttonTime={buttonTime1}
            setButtonTime={setButtonTime1}
            time={time}
            setTime={setTime}
            setTimeBackgroundControl={setTimeBackgroundControl}
            setModalOpen={setModalOpen}
            setTimerEditPair={setTimerEditPair}
          />
          <PlusButton
            id={2}
            buttonTime={buttonTime2}
            setButtonTime={setButtonTime2}
            time={time}
            setTime={setTime}
            setTimeBackgroundControl={setTimeBackgroundControl}
            setModalOpen={setModalOpen}
            setTimerEditPair={setTimerEditPair}
          />
        </View>
      </View>
    </View>
  );
}
