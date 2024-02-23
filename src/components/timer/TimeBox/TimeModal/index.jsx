import Txt from "../../../general/Txt/index";
import { defaultStyle } from "./styles";

import { Modal, View } from "react-native";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";

import { responsiveSize } from "../../../../styles/index";
import Button from "../../../general/Button/index";

import { useContext } from "react";
import { ColorSchemeContext } from "../../../../storage/context/SchemeProvider";
import { getColorsByScheme } from "../../../../styles/index";

import { secondsToMinutes } from "../../../../services/utils/time";

import { saveButton } from "../../../../storage/asyncStorage/plusButton";

import { notificationHandler } from "../../../../services/notificationHandler/index";

import Strings from "../../../../res/strings";
import { LanguageContext } from "../../../../storage/context/LanguageProvider";

import { modalToasts } from "../../../../services/toastAndroid/index";

export default function TimeModal({ modalOpen = false, setModalOpen, timerEditPair, setTimeBackgroundControl }) {
    const { colorScheme, setColorScheme } = useContext(ColorSchemeContext);

    const [temporaryTimer, setTemporaryTimer] = useState(timerEditPair[0]);

    const [automaticInterval, setAutomaticInterval] = useState(null);

    const { language } = useContext(LanguageContext);
    const strings = Strings(language);

    const { changesSaved, changesCanceled } = modalToasts(language);

    useEffect(() => {
        setTemporaryTimer(timerEditPair[0]);
    }, [modalOpen])

    const closeModal = () => {
        setModalOpen(false);
        setTemporaryTimer(0);
    }

    const decrement = () => setTemporaryTimer(prev => {
        const minimum = timerEditPair[2] != 0 ? 6 : 1;
        return prev >= minimum ? prev - 1 : prev;
    })

    const longDecrement = () => {
        decrement();

        setAutomaticInterval(setInterval(() => {
            decrement();
        }, 100));
    }

    const increment = () => setTemporaryTimer(prev => prev + 1 < 6000 ? Number(prev) + 1 : Number(prev));

    const longIncrement = () => {
        increment();

        setAutomaticInterval(setInterval(() => {
            increment();
        }, 100));
    }

    const stopInterval = () => {
        clearInterval(automaticInterval);
        setAutomaticInterval(null);
    }

    return (
        <Modal visible={modalOpen} animationType="slide" transparent={true} onRequestClose={closeModal}>
            <View style={defaultStyle().transparency}>
                <View style={defaultStyle().background}>
                    <Txt size={30} style={[defaultStyle().text, defaultStyle().title]}>
                        {timerEditPair[2] === 0 ? strings.editTime : strings.editButtonTime}
                    </Txt>

                    <View style={defaultStyle().horizontalMenu}>
                        <Button style={defaultStyle().icon} onPress={decrement} onLongPress={longDecrement} onPressOut={stopInterval}>
                            <FontAwesomeIcon
                                icon={faMinusSquare}
                                size={responsiveSize(30)}
                                color={getColorsByScheme(colorScheme).text}
                            />
                        </Button>

                        <View style={defaultStyle().currentTimeDisplay}>
                            <Txt size={40} style={defaultStyle().text}>
                                {secondsToMinutes(temporaryTimer)}
                            </Txt>
                        </View>

                        <Button style={defaultStyle().icon} onPress={increment} onLongPress={longIncrement} onPressOut={stopInterval}>
                            <FontAwesomeIcon
                                icon={faPlusSquare}
                                size={responsiveSize(30)}
                                color={getColorsByScheme(colorScheme).text}
                            />
                        </Button>
                    </View>

                    <View style={defaultStyle().buttonsContainer}>
                        <Button style={defaultStyle().buttonCancel} onPress={() => { closeModal(); changesCanceled() }}>
                            <Txt size={20} style={[defaultStyle().text, defaultStyle().textCancel]}>
                                {strings.cancel}
                            </Txt>
                        </Button>
                        <Button style={defaultStyle().buttonSave} onPress={() => {
                            timerEditPair[1](temporaryTimer);
                            if (timerEditPair[2] != 0) {
                                saveButton(timerEditPair[2], temporaryTimer);
                            } else {
                                setTimeBackgroundControl({ timerTime: temporaryTimer, currentTime: new Date().getTime() });
                                notificationHandler(temporaryTimer);
                            }
                            closeModal();
                            changesSaved();
                        }}>
                            <Txt size={20} style={[defaultStyle().text, defaultStyle().textSave]}>
                                {strings.save}
                            </Txt>
                        </Button>
                    </View>
                </View>
            </View>
        </Modal>
    );
}
