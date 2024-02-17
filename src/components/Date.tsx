import datesvg from './svgs/date.svg' 
import {getDate} from "./CalenderEvents"
import './Date.css'
export default function Date(){
    return(
        <>
            <div className="date-layout">
                <div className="svg">
                    <img src={datesvg}></img>
                </div>
                <div className='date-text'>
                    <span>{getDate()}</span>

                </div>
            </div>
        </>
    )
}   