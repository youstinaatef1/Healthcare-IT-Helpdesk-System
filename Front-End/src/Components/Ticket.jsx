function Ticket({title, status}){
    return(
        <div>
            <h2> {title} </h2>
            <p>{status}</p>
        </div>
    )
}
export default Ticket;