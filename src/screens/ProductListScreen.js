import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getData } from '../store/actions'
import Spinner from 'react-native-loading-spinner-overlay/lib'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProductCard from '../components/productCard'
import Header from '../components/header'

const ProductListScreen = ({ getData, data, loading, error }) => {

    useEffect(() => {
        getData()
    }, [])

    const _renderItem = ({ index, item }) => {
        let imageHeight = 170;
        if (index % 2 == 0) {
            imageHeight = 120
        }
        return (
            <ProductCard item={item} imageHeight={imageHeight} />
        )
    }

    return (

        <SafeAreaView style={{ flex: 1 }}>
            <Header BGColor={'#7B4039'}
             leftComponent={<Image source={require('../assets/left-arrow.png')} style={{ height: 20, width: 20 }} />}
                rightComponent={
                    <TouchableOpacity onPress={() => {}} style={{ backgroundColor: 'white', alignItems: 'center', padding: 10, borderRadius: 15 }}>
                        <Text >RTL</Text>
                    </TouchableOpacity>
                }
                mainText={'Product List'}
            />
            <View style={{ backgroundColor: '#ff00a0', height: 70, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15 }}>
                <Text style={{ color: 'white', fontSize: 15 }}>25% discount</Text>
                <Text style={{ color: 'white', fontSize: 12, paddingTop: 8 }}>Enjoy it now!</Text>
            </View>

            <Spinner visible={loading} />
            <FlatList style={{ flex: 1 }}
                numColumns={2}
                data={data}
                key={(item) => item.id}
                renderItem={(item) => _renderItem(item)}
            />
        </SafeAreaView>
    )
}

function mapStateToProps(state) {
    return { data: state.data, loading: state.loading, error: state.error }
}

const mapDispatchToProps = {
    getData
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductListScreen)