import { View, Text } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'

const ProductDetailsScreen = (props) => {
  const item = props.route.params.item
  return (
    <View>
      <Text>ProductDetailsScreen</Text>
    </View>
  )
}


export default ProductDetailsScreen