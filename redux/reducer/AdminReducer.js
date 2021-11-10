import {
    ADD_ADMIN,
    GET_ADMIN,
    EDIT_ADMIN,
    DELETE_ADMIN,
} from "./types";

const initialstate = {
    admins: [],
    admin: {},
    loading: true,
};

export default function AdminReducer(state = initialstate, action){
    switch (action.type){
        case GET_ADMIN:
            return {
                ...state, 
                admins: action.payload,
                loading: false,
            };

        case ADD_ADMIN:
            return {
                ...state,
                admins: state.admins.concat(action.payload),
                loading: false,
            };
        
        case EDIT_ADMIN:
            return {
                ...state,
                admins: state.admins.map((admin) =>
                    Number(admin.id) === Number(action.payload.id)
                    ? (admin = action.payload)
                    : admin
                ),
                loading: false,
            };

        case DELETE_ADMIN:
            const filteredState = state.admins.filter(
                (admin) => Number(admin.id) !== Number(action.payload.id)
              );
            return { ...state, admins: filteredState };
        
        default:
            return state;
    }
}
