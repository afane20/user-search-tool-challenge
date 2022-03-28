import React, { useState, useEffect } from 'react';
import styles from './CadenceLabs.module.css';
import { useParams, useLocation } from 'react-router-dom';
//utils
import axios from 'utils/axios';
//components
import CircularProgress from '@mui/material/CircularProgress';
import DialogShare from './components/DialogShare/DialogShare';
import CardUser from './components/CardUser/CardUser'
//icons
import { GoSearch } from 'react-icons/go';
//images
import { TextField, Button } from '@mui/material';

const CadenceLabs = (props) => {

    const params = useParams();

    //state
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState(null);
    const [search, setSearch] = useState(params.search ? params.search: '');
    const [pagination, setPagination] = useState(5);

    useEffect(() => {
        getUsers(search, pagination);
    }, [search, pagination])

    const getUsers = async (search, pagination) => {
        setLoading(true);
        const queryParams = new URLSearchParams({
            search,
            pagination,
        })
        const result = await axios.get('allData?'+queryParams)
        .catch(error => console.log(error))
        .finally(() => {
            setLoading(false);
        });
        setUsers(result.data);
    }

    const handleSearch = (e) => {
        setSearch(e.target.value);
        setPagination(5);
    };

    const handleShowMore = async () =>{
        setPagination(pagination + 5);
    }

    return (
        <div className={styles.container}>

            <div className={styles.header_top}>
                <h2 className={styles.title}>CADENCELABS</h2>
                <TextField
                    value={search}
                    label="Search"
                    hiddenLabel
                    size="small"
                    onChange={handleSearch}
                    InputProps={{
                        endAdornment: <GoSearch/>,
                    }}
                />
                <DialogShare
                    search={search}
                    {...props}
                />
            </div>

            {users ? (
                <div className={styles.list}>
                    {users && users.map(user => (
                        <CardUser user={user} key={user.id} />
                    ))}
                </div>
            ) : null}

            { loading === true ? (
                <div className={styles.cont_spinner}>
                    <CircularProgress />
                </div>
            ) : (
                <Button 
                variant="contained"
                style={{ marginTop: 20, marginBottom: 20 }}
                onClick={handleShowMore}
                >Show More</Button>
            ) }

            

        </div>
    );
}

export default CadenceLabs;