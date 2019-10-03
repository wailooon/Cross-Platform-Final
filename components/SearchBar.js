import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import { Button } from 'react-native-elements'

class SearchBar extends Component {
    state = {term: ''};

    render() {
        const {
            containerStyle,
            searchTextStyle,
            buttonStyle
        } = styles;

        return (
            <View style={containerStyle}>
                <TextInput
                    style={searchTextStyle}
                    placeholder="Search youtube video"
                    onChangeText={term => this.setState({ term })}
                    value={this.state.term}
                />
                <Button style={buttonStyle}
                    title={this.props.loading ? 'Loading...' : 'Search'}
                    onPress={() => this.props.onPressSearch(this.state.term)}
                />
            </View>
        );

    }
}

const styles = {
    containerStyle: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 10,
    },
    searchTextStyle: {
        flex: 1

    },
    buttonStyle: {
        height: 40,
        marginBottom: 8
    }
}

export default SearchBar;