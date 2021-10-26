import { Link } from "react-router-dom";
import classes from './MainHeader.module.css';

const MainHeader = () => {
    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>React</h1>
            <nav className={classes.nav} >
                <ul>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/products'>Products</Link>
                    </li>
                    <li>
                        <Link to='/editProduct'>Edit Product</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;