import "./card.css";
function Card(name) {
    const classes = 'card ' + name.className;
    return <div className={classes}>{name.children}</div>
}


export default Card;