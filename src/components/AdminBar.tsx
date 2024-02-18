import './AdminBar.css'
import AdminPanelBox from './AdminPanelBox'
export default function AdminBar() {
    return (
        <>
            <div className="layout">

                <AdminPanelBox boxtitle={"courses and lectures"}></AdminPanelBox>


                <AdminPanelBox boxtitle={"quiz"}></AdminPanelBox>
                <div className='button-layout'>
                    <div className='button'>
                        <span className='save'>save</span>
                        <span className='cancel'>cancel</span>
                        <span className='delete'>delete</span>
                    </div>
                </div>
            </div>
        </>
    )
} 