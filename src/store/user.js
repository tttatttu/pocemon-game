import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'user',
    initialState: {
        isLoading: true,
        data: {}
    },
    reducers: {
        fetchUsers: () => ({
            isLoading: true
        }),
        updateUser: (state, action) => ({
            isLoading: false,
                data: action.payload
        }),
        removeUser: () => ({
            isLoading: false,
            data: {}
        })
    }
})

export const {fetchUsers, updateUser, removeUser} = slice.actions;

export const selectUserLoading = state => state.user.isLoading;
export const selectUser = state => state.user.data;
export const selectLocalID = state => state.user.data?.localID;

export const getUserUpdateAsync = () => async (dispatch) => {
    const idToken = localStorage.getItem('idToken');
    if (idToken) {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                idToken,
            })
        };

        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDRWQmSXQ5N8bQjUygBrOmNstP5AIof7Ws', requestOptions).then(res => res.json());

        // console.log('response', response)

        if (response.hasOwnProperty('error')) {
            localStorage.removeItem('idToken');
            dispatch(removeUser());
        } else {
            dispatch(updateUser(response.users[0]));
            console.log('response.users[0]', response.users[0])
        }
    } else {
        dispatch(removeUser());
    }
}

export const getUserAsync = () => (dispatch) => {
    dispatch(fetchUsers());
    dispatch(getUserUpdateAsync());
}

export default slice.reducer;