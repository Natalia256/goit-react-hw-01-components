import PropTypes from 'prop-types'
import defaultImg from './../Profile/no-image.jpg'
import styles from './FriendList.module.css'

const FriendList = ({ friends }) => (
    <ul className={styles.friendList}>
        {friends.map(({id, avatar, name, isOnline }) => (
          <li key={id} className={styles.friendsItem} >
            <span className={styles.status} style={{ backgroundColor: isOnline? 'green': 'red'}}></span>
            <img className={styles.img} src={avatar || defaultImg} alt="Аватар"/>
            <p className={styles.friendsName}>{name}</p>
          </li>))}
    </ul>
    )
    
    
    
    FriendList.propTypes = {
      friends: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          avatar: PropTypes.string,
          isOnline: PropTypes.bool.isRequired,
        })
      ).isRequired,
    }
    
    
    export default FriendList;