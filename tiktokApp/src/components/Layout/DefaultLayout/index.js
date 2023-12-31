import Header from '../components/Header';
import Sliderbar from './Slidebar';
import styles from './Defaulayout.module.scss'
import classNames  from 'classnames/bind';
const cx = classNames.bind(styles)
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />  
            <div className={cx('container')}>
                <Sliderbar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
