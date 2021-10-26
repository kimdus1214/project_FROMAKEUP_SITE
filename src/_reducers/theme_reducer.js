import { THEME_CHANGE } from "../_actions/type";
import { lightTheme } from "../theme/theme";

const initialTheme = {
    name: '라이트',
    theme: lightTheme
}

export default function theme(state=initialTheme, action){
    switch(action.type){
        case THEME_CHANGE:
            return {
                ...state,
                name: action.name,
                theme: action.theme
            }
        default:
            return state;
    }
}