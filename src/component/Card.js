import { useNavigate } from 'react-router-dom';
import '../style/result.css';

const DisplayCard = ({info}) =>{
    let navigate = useNavigate();

    const handleRedirect = (info) =>{
        navigate("/detail", {state:info});
    };


  return (
    <div>
        <div className="card__container" onClick={()=>{handleRedirect(info)}}>
            <img className="card__image" src={info.image} alt={info.name}/>
            <span  className="card__name">{info.name}</span>
            <span  className="card__price">{info.price}</span>
            {info.freeBreakfast && 
            <span  className="card__freeBreakfast">free Breakfast</span>}
        </div>
    </div>
  )
};

const Card = ({data}) =>{
    return (
        <div className="parent__card__container">
            {data?.map((d, i)=>(
                <DisplayCard key={i} info={d}/>
            ))}
        </div>
    )
};

export default Card;