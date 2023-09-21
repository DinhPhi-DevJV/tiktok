import className from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass, faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '../../../../assert/images';
import { useEffect, useState } from 'react';
const cx = className.bind(styles);

function Header() {
    const [searchResulft,setSearchResulft] = useState([])
    useEffect(()=>{
        setTimeout(() => {
            setSearchResulft([1,2,3,4])
        }, 3000);
    },[searchResulft])
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="" />
                </div>
                <Tippy
                    interactive 
                    render={(attrs) => (
                        <div className={cx('search-resulft')} tabIndex="-1" {...attrs}>
                            ket qua
                        </div>
                     )}
                     visible= {searchResulft.length>0}
                >
                    <div className={cx('search')}>
                        <input placeholder="search accounts and vides" />

                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} spin />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <div className={cx('upload-btn')}>
                        <FontAwesomeIcon icon={faPlus} /> Upload
                    </div>
                    <div className={cx('login-btn')}>Log in</div>
                    <div className={cx('action-btn-left')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;
