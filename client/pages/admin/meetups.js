const AdminMeetups = () => {
    return (
        <div className='top-div'>
        <div className='meetups'>
            <div className='meetups-child'>
                <h1>Upcoming Meetups</h1>
                <div>
                    <div className='single-meetup' key='271163392'>
                        <div className='header'>
                            <div>2020-07-07</div>
                            <div>[Online] San Diego JS Monthly Meeting]</div>
                            <div >
                                <a className='meetup-link' href='https://www.meetup.com/sandiegojs/events/271163392/' target='_blank'>Meetup</a>
                            </div>
                        </div>
                            <div>
                               {/* TODO Add Talks */}
                            </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default AdminMeetups;
