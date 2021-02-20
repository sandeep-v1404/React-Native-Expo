import {lightTheme} from "../Theme"
import {SWITCH_THEME} from "./themeActions"
import { RecyclerViewBackedScrollView } from "react-native";

const initialState = {
    theme: lightTheme
}

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_THEME:
            return { theme: action.theme };

            default:
                return state;
    }
};

export default themeReducer;