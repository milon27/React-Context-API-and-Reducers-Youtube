
import Types from './../actions/Types';
export const initDataState = [];

const DataReducer = (state, action) => {
    if (action.type === Types.GET_DATA) {
        const data = action.payload;
        return [...state, ...data];//
    } else {
        return state;
    }

}
export default DataReducer;