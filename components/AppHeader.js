import React from 'react'
import { Header } from 'react-native-elements'

const AppHeader = ({headerText}) => (
        < Header
            centerComponent={{ text: headerText, style: { color: 'white', fontSize: 18, fontWeight: 'bold' } }}
            containerStyle={{ backgroundColor: '#f56a00' }}
        />
    );

export default AppHeader;



