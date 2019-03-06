import React from 'react';
import Pagination from '../Pagination';
import './displayLists.css';

const DisplayLists = ({toDisplay, data, viewRepos, currentPage, noofitems})=> {
    return(
        <div className='displayLists--outer'>
            {toDisplay &&
            <div className='displayLists'>
                    <table className='table table-striped'> 
                        <thead>
                                <tr>
                                    <th scope="col"> Repository Name </th>
                                    {/* <th scope="col">Repository Url </th> */}
                                    <th scope="col"> Created At </th>
                                    <th scope="col"> Updated At </th>
                                    <th scope="col"> Owner </th>
                                    <th scope='col'> Location </th>
                                    <th scope='col'> repos_url</th>
                                    <th scope='col'>public_repos</th>
                                    <th scope='col'>followers</th>
                                    <th scope='col'>following</th>
                                </tr>
                        </thead>
                        <tbody>
                            {data.map((data, index)=> {
                                return (
                                       <tr key={index}>
                                            <td> <a href={data.url} onClick={viewRepos}>  {data.name} </a> </td>
                                            {/* <td> {data.url}</td> */}
                                            <td>{data.created_at}</td>
                                            <td>{data.updated_at}</td>
                                            <td> {data.owner.login}</td>
                                        </tr>
                                
                                )
                            })}
                        </tbody>
                    </table>
            </div>}
                <Pagination  data={data} currentPage={currentPage} noofitems={noofitems}/>
        </div>
    )
}
export default DisplayLists;