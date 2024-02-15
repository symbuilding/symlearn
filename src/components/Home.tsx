import CalenderEvents from "./CalenderEvents";

export default function Home(){
    return (
        <div className="home-container">
            <div className="heading-container">
                <h1>Good morning Sohammaro...</h1>
                <div className="search-noti-container">
                    <input type="search"></input>
                    {/* <img src="https://www.svgrepo.com/show/31480/notification-bell.svg"/> */}
                </div>
            </div>
            <h1>Dashboard</h1>
            <div className="event-container">
                <div className="assignment-test-container">
                    <h1>Assignment and Test</h1>
                </div>
                <div className="classes-container">
                    <h1>Classes</h1>
                </div>
            </div>
            <CalenderEvents />
        </div>
    );
}
