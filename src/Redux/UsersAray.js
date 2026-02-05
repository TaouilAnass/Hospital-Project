import { createSlice } from "@reduxjs/toolkit";
 
const initialState = 
[
    {
        id : 1,
        First_Name: 'Anass',
        Last_Name: 'Taouil',
        Username : 'Itaouil09',
        Email: 'anass.taouil.393@gmail.com',
        Number_Phone : '0612878596',
        Sexe: 'Male',
        City : 'Al Hoceima',
        Age : 19,
        Password : '0000',
        Avater  : "/image/pic-1.png"
    },
    {
        id : 2,
        First_Name: 'Imane',
        Last_Name: 'Taouil',
        Username : 'Itaouil_01',
        Email: 'imane.taouil.393@gmail.com',
        Number_Phone : '0612877896',
        Sexe: 'female',
        City : 'Al Hoceima',
        Age : 27,
        Password : '1111',
        Avater  : "/image/pic-2.png"
    }
];

const UsersArry = createSlice({
    name : 'Users',
    initialState,
    reducers: {
        AddUsers(state , action){
           state.push(action.payload)
        },
        DeleteAccount:(state , action) => state.filter(item => item.id !== action.payload),
        
    },
});
export const UsersReducer = UsersArry.reducer;
export const {AddUsers} = UsersArry.actions;