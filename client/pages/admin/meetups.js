import withAuth from '../../hoc/withAuth';
import Query from "../../components/query";
import MEETUPS_QUERY from "../../apollo/queries/meetup/meetups";

const AdminMeetups = () => {
    return (
        <Query query={MEETUPS_QUERY} id={null}>
        {({ data: { events } }) => {
          return (
            <div className='top-div'>
                <div className='meetups'>
                <div className='meetups-child'>
                <h1>Upcoming Meetups</h1>
                <div>
                    {events.map((event) => {
                        return (<div className='single-meetup' key={event.meetupId}>
                        <div className='header'>
                        <div>{event.date}</div>
                        <div>{event.name}</div>
                        <div >
                        <a className='meetup-link' href={event.link} target='_blank'>Meetup</a>
                        </div>
                        </div>
                        </div>)
                    })}

                </div>
                </div>
                </div>
            </div>
        );
        }}
        </Query>
    );
}

export default withAuth(AdminMeetups);
