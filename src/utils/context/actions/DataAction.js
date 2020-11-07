
import Types from './Types';

class DataAction {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    //get data action
    getData = () => {
        //server + api call stuff
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                //response data obj
                const data = [
                    1, 2, 3, 4, 5, 6
                ]
                resolve({ response: true, msg: "get data succesfully", data: data })
                //will update the state or UI

                this.dispatch({
                    type: Types.GET_DATA,
                    payload: data
                });

            }, 3000)
        });

    }
}


export default DataAction;