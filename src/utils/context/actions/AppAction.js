import Types from './Types';

class AppAction {

    constructor(dispatch) {
        this.dispatch = dispatch
    }

    DarkTheme = () => {
        

        this.dispatch({
            type: Types.DARK_THEME,
            payload: "black"
        })
    }
}

export default AppAction;