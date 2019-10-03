import React from 'react'
import { View, Text, Image } from 'react-native'
import { Card } from 'react-native-elements'
import WatchButton from '../components/WatchButton'

const VideoListItem = ({ video }) => {

    const { imageStyle, cardStyle, contentStyle, titleStyle, channelTitleStyle,descriptionTitleStyle, descriptionStyle } = styles;
    const { title, channelTitle, description, thumbnails: { medium: { url } } } = video.snippet;

    return (
        <View>
            <Card title={null} containerStyle={cardStyle}>
                <Image style={imageStyle}
                    source={{ uri: url }}
                />
                <View style={contentStyle}>
                    <Text style={titleStyle}>{title}</Text>
                    <Text style={channelTitleStyle}>{channelTitle}</Text>
                    <Text style={descriptionTitleStyle}>Video Information:</Text>
                    <Text style={descriptionStyle}>{description}</Text>
                    <WatchButton videoId={video.id.videoId} />
                </View>
            </Card>
        </View>
    );
}

const styles = {
    imageStyle: {
        alignSelf: 'stretch',
        height: 180
    },
    cardStyle: {
        padding: 5
    },
    contentStyle: {
        flex: 1,
        padding: 5
    },
    titleStyle: {
        fontSize: 20,
        marginBottom: 5,
        fontWeight:'bold'
    },
    channelTitleStyle: {
        fontSize:15,
        marginBottom: 10,
        color:'#777',
        alignSelf:'flex-end'
    },
    descriptionTitleStyle:{
        fontSize:15,
        marginBottom: 1,
        fontWeight:'bold',
        textDecorationLine: 'underline'
    },
    descriptionStyle: {
        fontSize:15,
        alignSelf:'center'
    }
};

export default VideoListItem;




