import React from 'react'
import { useSelector } from 'react-redux'


import styles from "./FavoritesPage.module.css";


export default function FavoritesPage() {

    const storeData = useSelector((state) => state.favoriteReducer);
    console.log(storeData)

    return (
        <div>
            <>favorite page</>
        </div>
    )
}
