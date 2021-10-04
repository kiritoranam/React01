import './ExpenseDate.css';
function ExpenseDate(name) {
    const Month = name.date.toLocaleString('en-us', { month : 'long'});
    const Day = name.date.toLocaleString('en-us', { day :'2-digit'});
    const Year = name.date.getFullYear();

    return(
    <div className="expense-date">
        <div className="expense-date__month">{Month}</div>
        <div className="expense-date__year">{Year}</div>
        <div className="expense-date__day">{Day}</div>
    </div>
    );
}


export default ExpenseDate;