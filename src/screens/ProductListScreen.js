import { View, Text, ScrollView, FlatList, Image } from 'react-native'
import React, { useEffect } from 'react'
import store from '../store/store'
import { connect, useSelector } from 'react-redux'
import { getData } from '../store/actions'
import Spinner from 'react-native-loading-spinner-overlay/lib'
import { strings } from '../locales'
import { useTranslation } from 'react-i18next'

const ProductListScreen = ({ getData, data, loading, error }) => {
    const {t} = useTranslation();

    useEffect(() => {
        getData()
    }, [])

    const _renderItem = (item)=>(
        <View>
            {/* <Image  style={{height:100,width:100,backgroundColor:'red'}}  source={"https://i.dummyjson.com/data/products/9/1.jpg"}/> */}
            <Text>
                {item.title}
            </Text>
        </View>       
    )

    return (

        <View style={{flex:1}}>
            <Text>{t('hello')}</Text>
            <Spinner visible={loading} />
            <FlatList style={{flex:1}}
                data={data}
                key={(item) => item.id}
                renderItem={({item})=>_renderItem(item)}
            />
        </View>
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