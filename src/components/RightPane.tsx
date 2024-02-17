import './RightPane.css'
import CalenderEvents from './CalenderEvents'
import RightPaneTop from './RightpaneTop'
export default function RightPane(){
    return(
        <>
        <div className='layout'>
            
            <RightPaneTop></RightPaneTop>
            <CalenderEvents></CalenderEvents>

        </div>

        </>
    )
}