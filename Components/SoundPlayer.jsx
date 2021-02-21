import SoundPlayer from 'react-native-sound-player'

try {
    // play the file tone.mp3
    SoundPlayer.playSoundFile('tone', 'mp3')
    // or play from url
    SoundPlayer.playUrl('https://example.com/music.mp3')
} catch (e) {
    console.log(`cannot play the sound file`, e)
}