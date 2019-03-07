import _ from 'lodash';

export function  Paginate(data, currentPage, noofitems) {
    const startIndex = (currentPage - 1) *noofitems;
    return _(data).slice(startIndex).take(noofitems).value();
}

// export function paginate(items, pageNumber, pageSize) {
//     const startIndex = (pageNumber - 1 ) * pageSize;
//     return _(items).slice(startIndex).take(pageSize).value();
// }