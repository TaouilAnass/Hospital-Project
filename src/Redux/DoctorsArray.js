import { createSlice } from "@reduxjs/toolkit";
 
const initialState = 
[
    {
        id : 1,
        First_Name: 'Fatima',
        Last_Name: 'El Wazani',
        Number_Phone : '0612878596',
        Sexe: 'Famle',
        City : 'Al Hoceima',
        Photo  : "/image/doc-1.jpg",
        Specialty : 'Doctor of Nephrology'
    },
    {
        id : 2,
        First_Name: 'Mohamed',
        Last_Name: 'Tijarti',
        Number_Phone : '0612878596',
        Sexe: 'Male',
        City : 'Al Hoceima',
        Photo  : "/image/doc-2.jpg",
        Specialty : 'Doctor of Hematology'

    },
    {
        id : 3,
        First_Name: 'Ayoub',
        Last_Name: 'Yahyaoui',
        Number_Phone : '0612878596',
        Sexe: 'Male',
        City : 'Al Hoceima',
        Photo  : "/image/doc-3.jpg",
        Specialty : 'Doctor of Liver Diseases'

    },
    {
        id : 4,
        First_Name: 'Asaad',
        Last_Name: 'Azroual',
        Number_Phone : '0612878596',
        Sexe: 'Male',
        City : 'Al Hoceima',
        Photo  : "/image/doc-4.jpg",
        Specialty : 'Doctor of Rheumatology'

    },
    {
        id : 5,
        First_Name: 'Yassine',
        Last_Name: 'Ezoubi',
        Number_Phone : '0612878596',
        Sexe: 'Male',
        City : 'Al Hoceima',
        Photo  : "/image/doc-5.jpg",
        Specialty : 'Doctor of Neurologist'

    },
    {
        id : 6,
        First_Name: 'Anass',
        Last_Name: 'Boisa',
        Number_Phone : '0612878596',
        Sexe: 'Male',
        City : 'Al Hoceima',
        Photo  : "/image/doc-6.jpg",
        Specialty : 'Doctor of  Urologist'

    }
];

const ArrayDoctors = createSlice({
    name : 'Doctors',
    initialState,
    reducers: {
       
    },
});
export const DoctorsReducer = ArrayDoctors.reducer;