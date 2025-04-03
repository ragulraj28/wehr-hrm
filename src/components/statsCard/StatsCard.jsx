const StatsCard = ({title, count, style}) => {

    return(
  
      <div className="stats-card" style={style}>
  
        <h3 className="stats-title">{title}</h3>
  
        <p className="stats-count">{count}</p>
  
      </div>
      
    )
  
}

export default StatsCard;