export const dateDecoder = (unixDate) => {

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        
    };
    let date = '';
    const milliseconds = unixDate;
    const dateObject = new Date(milliseconds);
    date = dateObject.toLocaleDateString('es', options);
    date += (". "+dateObject.getHours()+":"+dateObject.getMinutes());
    return date;

}
