import { Audio } from 'expo-av';
import { useState, useEffect } from 'react';

export function Beep() {
    const [sound, setSound] = useState();

    useEffect(() => {
        async function loadSound() {
            try {
                const { sound } = await Audio.Sound.createAsync(
                    require('../../assets/sounds/beeps/level_up_notification.mp3')
                );
                setSound(sound);
            } catch (error) {
                console.error('Error loading sound:', error);
            }
        }

        loadSound();

        return () => {
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, []);

    const playSound = async () => {
        if (sound) {
            try {
                await sound.replayAsync(); // Replay the sound
            } catch (error) {
                console.error('Error playing sound:', error);
            }
        }
    };

    return { playSound };
}

export function ButtonFeedback() {
    const [sound, setSound] = useState();

    useEffect(() => {
        async function loadSound() {
            try {
                const { sound } = await Audio.Sound.createAsync(
                    require('../../assets/sounds/beeps/game_soft_notification.mp3')
                );
                setSound(sound);
            } catch (error) {
                console.error('Error loading sound:', error);
            }
        }

        loadSound();

        return () => {
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, []);

    const playSound = async () => {
        if (sound) {
            try {
                await sound.replayAsync(); // Replay the sound
            } catch (error) {
                console.error('Error playing sound:', error);
            }
        }
    };

    return { playSound };
}
