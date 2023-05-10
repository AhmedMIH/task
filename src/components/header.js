import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = ({ leftComponent, rightComponent, mainText }) => {
    return (
        <View style={{ backgroundColor: '#7B4039', height: 70, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15 }}>
            <View style={{ width: 20 }}>
                {leftComponent && leftComponent}

            </View>
            <Text style={{ color: 'white', fontSize: 20 }}>{mainText}</Text>
            <View style={{ width: 60 }}>
                {rightComponent && rightComponent}

            </View>

        </View>
    )
}

export default Header