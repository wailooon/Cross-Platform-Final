import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import YTSearch from 'youtube-api-search'
import AppHeader from '../components/AppHeader'
import SearchBar from '../components/SearchBar'
import VideoList from '../components/VideoList'

const API_KEY = 'AIzaSyAu-LJi0AEOVtTMuLsn5QcgzSnPbm1ufgg';

export default class Home extends React.Component {
    state = {
        loading: false,
        videos: []
    }

    componentDidMount(){
        this.searchYT('React-Native');
    }

    onPressSearch = term => {
        this.searchYT(term);
    }

    searchYT = term => {
        this.setState({loading:true})
        YTSearch({
            key: API_KEY, term
        }, videos => {
            this.setState({
                loading: false,
                videos
            });
        });
    }

    render() {
        const { loading, videos } = this.state;

        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <AppHeader headerText="YouVideo Search"
                />
                <SearchBar
                    loading={loading}
                    onPressSearch={this.onPressSearch}
                />
                <VideoList
                    videos={videos}
                />
            </View>
        )
    }
}


// const mapStateToProps = state => {
//     return {
//         user: state.user
//     }
// }

// export default connect(mapStateToProps)(Home)