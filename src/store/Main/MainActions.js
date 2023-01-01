export const SET_SORT_TYPE = "SET_SORT_TYPE";
export const CLEAR_SORT_TYPE = "CLEAR_SORT_TYPE";
export const SEARTCH_CHANGE = "SEARTCH_CHANGE";

export function setSortType(sort){
    return {
        type: SET_SORT_TYPE,
        payload: sort,
    }
}

export function clearSortType(){
    return {
        type: CLEAR_SORT_TYPE,
    }
}

export function searchCHange(text){
    return {
        type: SEARTCH_CHANGE,
        payload: text,
    }
}