import  React  from 'react';
import _ from 'lodash';
import './pagination.css';
const Pagination= ({count, currentPage,noofitems, onPageChange})=> {

    console.log('count is ', count);

    const noofPages= Math.ceil(count / noofitems);
    const totalNoOfPages=_.range(1, noofPages+1);
    console.log('Total no of pages are ', totalNoOfPages);
    if (noofPages === 1) return <div> All Repos are displayed here </div>
    return(
        <div>
            <nav>
                <ul className='pagination'>
                    {totalNoOfPages.map((page, index)=> {
                        return (
                            <li key={index} className={page === currentPage ? 'page-item active':'page-item'}> <a className='page-link' href='#'onClick={()=> onPageChange(page)} > {page} </a></li>
                        )

                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;