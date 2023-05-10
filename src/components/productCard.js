import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import constant from '../common/constant'

const ProductCard = ({ item, imageHeight }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate(constant.ProductDetailsScreen, { item: item })} style={{ margin: 15, flex: 1 }}>
            <Image resizeMode="cover" style={{ height: imageHeight, width: '100%', alignSelf: 'center' }} source={{ uri: item.thumbnail }} />
            <View style={{ paddingHorizontal: 10, paddingVertical: 16}}>
                <Text style={{ color: '#7B4039' }}>
                    {item.brand}
                </Text>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: "600" }}>
                    {item.title}
                </Text>
                <Text style={{ color: 'black', fontSize: 14, fontWeight: "300" }} >
                    ${item.price}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard