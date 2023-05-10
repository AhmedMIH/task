import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ReviewCard = ({ item }) => {
    return (
        <View style={styles.reviews}>
            <View style={styles.row}>
                <View>
                    <Text> {item.header} </Text>
                    <Text style={{ marginTop: 10 }}> {item.stars} </Text>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                    <Text> {item.name} </Text>
                    <Text style={{ marginTop: 10, color: 'gray' }}>
                        {item.date}
                    </Text>
                </View>
            </View>
            <Text style={{ marginTop: 20 }}>{item.description}</Text>
        </View>
    )
}



const styles = StyleSheet.create({

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    reviews: {
        marginHorizontal: 20,
        padding: 15,
        width: 300,
        backgroundColor: 'white',
    },
    stars: {
        marginLeft: 10,
    },
});

export default ReviewCard