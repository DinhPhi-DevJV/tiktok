import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link}from 'react-router-dom'
import { faHouse, faUser, faCompass, faVideo,faCaretDown,faAt} from '@fortawesome/free-solid-svg-icons';
import styles from './Slidebar.module.scss';
import { useState } from 'react';
const cx = classNames.bind(styles);
function Sliderbar() {
    const [state,setState] = useState('subNavLinkItem')
    const [more,setmore] = useState('seeMore')
//    const [stateIcon,setStateIcon] = useState()
 
    const handleState = ()=>
        {   setState('active')
            setmore('hidenMore')
        }
    return (
        // thẻ định nghĩa nội dung bên ngoài của nội dung chính thường là phần sidebar
        <div className={cx('wrapper')}>
            <nav className={cx('navContainer')}>
                <ul className={cx('navList')}>
                    <li >
                        <div >
                            <FontAwesomeIcon icon={faHouse} />
                        </div>
                        <Link to="" >For You</Link>
                    </li>
                    <li>
                        <div >
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <Link to="/following" >Following</Link> 
                    </li>
                    <li>
                        <div >
                            <FontAwesomeIcon icon={faCompass} />
                        </div>
                        <Link to="" >Explore</Link>
                    </li>
                    <li>
                        <div>
                            <FontAwesomeIcon icon={faVideo} />
                        </div>
                        <Link to="">Live</Link>
                    </li>
                </ul>
            </nav>

            <div className={cx('navParagrap')}>
                Log in to follow creators, like videos, and view comments.
                <br />
                <button>Login</button>
            </div>
            <div className={cx('navLink')}>
                <div>
                    <a href="https://www.google.com/">About</a>
                    <a href="https://www.google.com/">Newsroom</a>
                    <a href="https://www.google.com/">Contact</a>
                    <a href="https://www.google.com/">Careers</a>
                </div>
                <div className={cx('subNavLink')}>
                    <a href="https://www.google.com/">TikTok for Good</a>
                    <a href="https://www.google.com/">Advertise</a>
                    <a href="https://www.google.com/">Developers</a>
                    <a href="https://www.google.com/">Transparency</a>
                    <a href="https://www.google.com/">TikTok Rewards</a>
                    <a href="https://www.google.com/">TikTok Embeds</a>
                </div>
                <div>
                    <a href="https://www.google.com/">Help</a>
                    <a href="https://www.google.com/">Safety</a>
                    <a href="https://www.google.com/">Terms</a>
                    <a href="https://www.google.com/">Privacy </a>
                    <a href="https://www.google.com/">Creator Portal</a><br />
                    <a href="https://www.google.com/">Community Guidelines</a>
                </div>
                <div className={cx(`${more}`)}>
                    <span>See more</span>
                    <FontAwesomeIcon icon={faCaretDown} onClick={handleState} />
                </div>
                <div className={cx(`${state}`)}>
                    <a href="https://www.google.com/">Dance</a>
                    <a href="https://www.google.com/">Arts</a>
                    <a href="https://www.google.com/">Food and Drink</a>
                    <a href="https://www.google.com/">Tourism</a>
                    <a href="https://www.google.com/">Production and Manufacturing</a><br />
                    <a href="https://www.google.com/">Vehicles and Transportation</a>
                    <a href="https://www.google.com/">Relationship</a>
                    <a href="https://www.google.com/">TikTok Style</a>
                    <a href="https://www.google.com/">Athletics</a>
                    <a href="https://www.google.com/">Hobbies</a>
                </div>
                <span className={cx('endNav')}>
                <FontAwesomeIcon icon={faAt} /> 2023 TikTok
                </span>
            </div>
        </div>
    );
}
export default Sliderbar;
