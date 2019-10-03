import React from 'react'
import { View, ScrollView } from 'react-native'
import VideoListItem from './VideoListItem'

const VideoList = ({ videos }) => {
    const videoItems = videos.map(video => (
        <VideoListItem
            key={video.etag}
            video={video}
        />
    ));

    return (
        <ScrollView>
            <View style={styles.containerStyle}>
                {videoItems}
            </View>
        </ScrollView>
    );
}

const styles = {
    containerStyle: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
    }
}

export default VideoList;