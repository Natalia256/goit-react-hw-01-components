import PropTypes from 'prop-types'
import styles from './Profile.module.css'
import defaultImg from './no-image.jpg'

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Profile = ({name, tag, location, avatar, stats})=>(
  
<div className={styles.profile}>
  <div className={styles.description}>
    <img
      src={avatar}
      alt="Аватар пользователя"
      className={styles.avatar}
    />
      <p className={styles.name}>{name}</p>
    <p className={styles.tag}>@{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>

  <ul className={styles.stats}>
    <li className={styles.statsItem}>
      <span className={styles.label}>Followers</span>
      <span className={styles.quantity}>{numberWithCommas(stats.followers)}</span>
    </li>
    <li className={styles.statsItem}>
      <span className={styles.label}>Views</span>
      <span className={styles.quantity}>{numberWithCommas(stats.views)}</span>
    </li>
    <li className={styles.statsItem}>
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}>{numberWithCommas(stats.likes)}</span>
    </li>
  </ul>
</div>
    );


Profile.defaultProps = {
  avatar: defaultImg,
};
  Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.object.isRequired,
  }
  
export default Profile
