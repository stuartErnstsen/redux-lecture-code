import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = props => {

    return (
        <header className='main-header'>
            <Link to='/dashboard'><h1>Pokemon Trainer</h1></Link>
            {props.username && 
                <Link to='/profile'><h1>{props.username}</h1></Link>
            }
            
        </header>
    )
}

const mapStateToProps = reduxState => ({username: reduxState.userReducer.user.username});

export default connect(mapStateToProps)(Header);