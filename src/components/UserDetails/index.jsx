import React from 'react';
import Avatar from '../Avatar';
import './userdetails.css';
const UserDetails = ({data})=> {
    return (
  
            <div className='userDetailsouter'>
                    <div className='userHeading'>
                        <h3> User Details </h3>
                    </div>

                            <div className='userDetailsleft'>
                                        <div>
                                            <span> <strong> User Name : </strong>   </span>  <span> {data.name}   </span>
                                        </div>
                                        <div>
                                            <span>  <strong>  About : </strong>  </span> <span> {data.bio} </span>
                                        </div>
                                        <div>
                                            <span> <strong>  Public Repositories :  </strong> </span>  <span> {data.public_repos} </span>
                                        </div>
                            </div>

                            <div className='userdetailsright'>
                                        <Avatar src={data.avatar_url}/>
                            </div>



                </div>

    )
}

export default UserDetails;