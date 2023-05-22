import React from 'react'
import './style.css'




const ListOfUsers = ({user}) => {
  return (
    <div>
     <div className="card">
        <div className="cardtitle"> Name:{user.name}  <br/>
        UserName:{user.username} </div>
            <div className="cardbody">
                <div className="email"/><h2> Email:{user.email} </h2></div>
                <div className="address">
                <p> Street:{user.address.street} </p>
                <p> Suite:{user.address.suite} </p>
                <p>City:{user.address.City} </p>
                <p> ZipCode:{user.address.zipcode} </p>
                <h3> GEO-Lat:{user.address.geo.lat}  </h3>
                <h3>GEO-Lng:{user.address.geo.lng}  </h3>
            </div>
        <div className="card__footer">
            <div className='="info"'>
             <h4> Phone:{user.phone} </h4> 
             <h4> Website:{user.website} </h4> 
                <h5> Company: {user.company.name} </h5>
                <h5> CatchPhrase:{user.company.catchPhrase}</h5> 
                <h5> Bs:{user.company.bs}</h5>
            </div>
            </div>
        </div>
</div>
  )
}

export default ListOfUsers;