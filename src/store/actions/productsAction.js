import api from "../../api"
import constant from "../../common/constant"


export function getData() {
    console.log("getData")
    return async (dispatch) => {

        dispatch({
            type: constant.GET_DATA_START
        })

        let res = await api.getDate()
        console.log(res)

        if (res.status == 200) {
            let resJson = await res.json()
            dispatch(handleGetDataSuccess(resJson))
        } else {
            dispatch(handleGetDataError())
        }
    }
}

const handleGetDataSuccess = (res) => {
    return {
        type: constant.GET_DATA_SUCCESS,
        payload: res.products
    }
}


const handleGetDataError = () => {
    return {
        type: constant.GET_DATA_FAILED,
        payload: 'something want wrong'
    }
}