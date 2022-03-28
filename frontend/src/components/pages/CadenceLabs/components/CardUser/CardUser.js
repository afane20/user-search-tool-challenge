import React from 'react';
import styles from '../../CadenceLabs.module.css';
//images
import no_image from 'assets/images/no_image.jpg';

const CardUser = (props) => {
    const { user } = props;
    const { thumbnailUrl } = user?.albums[0]?.photos[0];
    return (
        <div className={styles.card_candence}>
            <img className={styles.card_image} src={thumbnailUrl? thumbnailUrl : no_image} alt={user.name} />
            <div className={styles.card_content}>
                <span className={styles.card_title}>{user.name}</span>
                <span>{user.company ? user.company.name : ''}</span>
                <span><a className={styles.link} href={user.website}>{user.website}</a></span>
                <span>{user.albums.length > 0 ? user.albums.length + " Albums" : ''}</span>
            </div>
        </div>
    );
}

export default CardUser;