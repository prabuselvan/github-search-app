import { Redirect, Link } from 'react-router-dom';
import React from 'react';
import Pagination from '../Pagination';

import './displayLists.css';



const DisplayLists = ({toDisplayRepo,count, data, viewRepos, currentPage, noofitems, onPageChange})=> {

    const RenderingTal =(repoName)=> {
        console.log('repo Name is ', repoName);
       return <Redirect to={'/repository'} repoName ={repoName}/>
        };


    return(
        <div className='displayLists--outer'>
            {toDisplayRepo &&
            
            <div className='displayLists'>
                 
                    <table className='table table-striped'> 
                 
                        <thead>
                        {/* <h3> Repository Details </h3> */}
                                <tr>
                                    <th scope="col"> Repository Name </th>
                                    {/* <th scope="col">Repository Url </th> */}
                                    <th scope="col"> Created At </th>
                                    <th scope="col"> Updated At </th>
                                    <th scope="col"> Owner </th>
                                    {/* <th scope='col'> Location </th>
                                    <th scope='col'> repos_url</th>
                                    <th scope='col'>public_repos</th>
                                    <th scope='col'>followers</th>
                                    <th scope='col'>following</th> */}
                                </tr>
                        </thead>
                        <tbody>
                            {data.map((data, index)=> {
                                return (
                                       <tr key={index}>
                                            {/* <td> <a href='#' onClick={RenderingTal}>  {data.name} </a> </td> */}
                                            <td> <Link to='/repository' onClick={()=>RenderingTal(data.name)}>  {data.name} </Link> </td>
                                            {/* <td> {data.url}</td> */}
                                            <td> <a></a> {data.created_at}</td>
                                            <td>{data.updated_at}</td>
                                            <td> {data.owner.login}</td>
                                        </tr>
                                
                                )
                            })}
                        </tbody>
                    </table>
            </div>}
                <Pagination  count={count} currentPage={currentPage} noofitems={noofitems} onPageChange={onPageChange}/>
        </div>
        
    )



  
}
export default DisplayLists;