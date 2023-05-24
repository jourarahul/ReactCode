import { CDN_URL } from "../utils/constants";

const RestarurantCard=(props)=>{

    const { resData }=props;

    return (<div className="res-card">
        <img className="res-logo" alt="res-logo" src={CDN_URL+resData.data.cloudinaryImageId}></img>
        <h3>{resData.data.name}</h3>
        <h4>{resData.data.cuisines.join(",")}</h4>
        <h4>{resData.data.avgRating} stars</h4>
        <h4>{resData.data.costForTwo/100} FOR TWO</h4>
        <h4>{resData.data.deliveryTime} minutes</h4>
    </div>);
}

export default RestarurantCard;