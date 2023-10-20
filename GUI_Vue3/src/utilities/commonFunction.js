export const formatDate = (date) => {
    var objectDate = new Date(date);
    let day = objectDate.getDate();
    let month = objectDate.getMonth() + 1;
    let year = objectDate.getFullYear();
    return (year + '-' + month + '-' + day);
}