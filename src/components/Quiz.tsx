import { useLocation } from "react-router-dom"

export default function Quiz(){
    const location = useLocation();

    console.log(location.state);

    return(
        <h1>Hi from quiz</h1>
    )
}
