import React, { useState, useEffect } from 'react';
import styles from './CadenceLabs.module.css';
//icons
import { GoSearch } from 'react-icons/go';
import axios from 'utils/axios';

const CadenceLabs = (props) => {

    //state
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState(null);
    const [albums, setAlbums] = useState(null);
    const [photos, setPhotos] = useState(null);

    useEffect(() => {
        getUsers();
        getAlbums();
        getPhotos();
    }, [])
    
    const getUsers = async () => {
        const result = await axios.get('users');
        setUsers(result.data);
    }
    
    const getAlbums = async () => {
        const result = await axios.get('albums');
        setUsers(result.data);
    }
    
    const getPhotos = async () => {
        const result = await axios.get('photos');
        setUsers(result.data);
    }


    return ( 
        <div className={styles.container}>
        
        <div className={styles.header_top}>
            <h2 className={styles.title}>CADENCELABS</h2>
            <div className={styles.cont_search}>
                <input 
                    type="search"
                    className={styles.input_search}
                />
                <GoSearch
                    className={styles.search_icon}
                />
            </div>
        </div>

        <div className={styles.list}>
            <div className={styles.card_candence}>

            </div>
        </div>
        
        </div>
     );
}
 
export default CadenceLabs;