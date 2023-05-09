import constant from "../../common/constant"

const INIT_STATE = {
    data: [],
    error: '',
    loading: false
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case constant.GET_DATA_START:
            return { ...state, loading: true }
        case constant.GET_DATA_SUCCESS:
            return { ...state, loading: false, data: action.payload }
        case constant.GET_DATA_FAILED:
            return { ...state, loading: false, error: action.payload }

        default:
            return state
    }
}