import React, { useState, useEffect } from 'react';
import styles from './CadenceLabs.module.css';
//components
import CircularProgress from '@mui/material/CircularProgress';
//icons
import { GoSearch } from 'react-icons/go';
import axios from 'utils/axios';
//images
import no_image from 'assets/images/no_image.jpg';

const UserCard = (props) => {
    const { user } = props;
    const { thumbnailUrl } = user?.albums[0]?.photos[0];
    return (
        <div className={styles.card_candence}>
            <img className={styles.card_image} src={thumbnailUrl? thumbnailUrl : no_image} alt={user.name} />
            <div className={styles.card_content}>
                <span>{user.name}</span>
                <span>{user.company ? user.company.name : ''}</span>
                <span><a href={user.website}>{user.website}</a></span>
                <span>{user.albums.length > 0 ? user.albums.length + " Albums" : ''}</span>
            </div>
        </div>
    );
}

const CadenceLabs = () => {

    //state
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState(null);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        const result = await axios.get('allData').catch(error => console.log(error));
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

            {users ? (
                <div className={styles.list}>
                    {users && users.map(user => (
                        <UserCard user={user} key={user.id} />
                    ))}
                </div>

            ) : (<CircularProgress />)}

        </div>
    );
}

export default CadenceLabs;