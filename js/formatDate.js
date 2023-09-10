const formatDate = (date) => {
    const inputDate = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = inputDate.toLocaleDateString('en-US', options);

    return formattedDate;
}

export default formatDate;

