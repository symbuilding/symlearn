import './AdminPanelBox.css';
export default function AdminPanelBox({boxtitle}) {
    return (
        <>
            <div className="layout">
                <div className='color'>
                    <span className='text'>{boxtitle}</span>
                </div>
            </div>
        </>
    )
}