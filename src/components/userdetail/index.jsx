import React from 'react';

const UserDetail = props => {
    const {user} = props
    return (<p>
        {
            user !== {} && <div>
                <p>Name: {user.name}</p>
                <p>UserName: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Address: </p>
                <p>Street: {user.address.street}</p>
                <p>Suite: {user.address.suite}</p>
                <p>City: {user.address.city}</p>
                <p>Zipcode: {user.address.zipcode}</p>
                <p>Geo: </p>
                <p>Lat: {user.address.geo.lat}</p>
                <p>Lng: {user.address.geo.lng}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
                <p>Company:</p>
                <p>Name: {user.company.name}</p>
                <p>CatchPhrase: {user.company.catchPhrase}</p>
                <p>Bs: {user.company.bs}</p>
            </div>
        }

    </p>);
}
 
export default UserDetail;