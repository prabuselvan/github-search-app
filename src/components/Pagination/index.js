import  React  from 'react';

const Pagination= ({data, currentPage,noofitems})=> {
    return(
        <div>
            <nav>
                <ul className='pagination'>
                    <li className='page-item'> <a className='page-link' > 1 </a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;