import React from 'react';

const Profile = props => {

    return (
        <main className='profile'>
            <h1>{props.userReducer.user.username}</h1>
            <h3>{props.userReducer.user.age}</h3>
            <h3>{props.userReducer.user.email}</h3>
        </main>
    )
}

export default Profile;