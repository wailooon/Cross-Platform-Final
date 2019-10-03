import React from 'react'
import { Button } from 'react-native-elements'
import * as WebBrowser from 'expo-web-browser'
import { WebView } from 'react-native-webview'

const WatchButton = ({ videoId }) => (
    <Button
        raised
        title="Watch on Youtube"
        icon={{ name: 'done' }}
        containerStyle={{ marginTop: 10 }}
        backgroundColor="#E62117"
        onPress={() => {
            WebBrowser.openBrowserAsync(
                `https://m.youtube.com/watch?v=${videoId}`
            );
            console.log("Fff");
        }}
    />
);
export default WatchButton


