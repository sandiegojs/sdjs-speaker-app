import { PrivateRoute } from '../../hocs/PrivateRoute';
import api from '../../lib/api';

const Organizers = () => {
    const { response, error, isLoading} = api('/users');
    return (
        <div className='top-div'>
        <div className='organizer-container'>
            <div className='organizer-container-child'>
                <h1>Organizers</h1>
                <h3 className='add-admin-title'>Create New Admin Account</h3>
                <form id='organizer-form'>
                    <>
                        <label htmlFor='admin-name'>Username: </label>
                        <input name='newAdminName' type='text' required />
                    </>
                    <>
                        <label htmlFor='admin-email'>Email: </label>
                        <input type="email" name="newAdminEmail" required />
                    </>
                    <>
                        <label htmlFor='admin-phone'>Phone Number: </label>
                        <input type="tel" name="newAdminPhone" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                    </>
                    <>
                        <label htmlFor='admin-password'>Password: </label>
                        <input type="password" name="newAdminPassword" required />
                    </>
                    <div>
                        <button className='btn'>Submit!</button>
                    </div>
                </form>
            </div>

            <div className='organizer-edit-admins'>
            <h3>Current Organizers</h3>
                <div className='organizer-display-container'>
                {!isLoading && response && response.map((user) => {
                    return (
                        <div key={user.id}>
                            <div >
                                <div className='organizer-display-section'>
                                    <div className='organizer-display-div' id='name'> {user.username}</div>
                                    <div className='organizer-display-div'> {user.email}</div>
                                    <div className='organizer-display-div'> {user.phone.replace(/(\d{3})\-?(\d{3})\-?(\d{4})/, '$1-$2-$3')}</div>
                                    <div >
                                        <i className="far fa-edit"
                                            name={user.id}
                                          ></i>
                                        <i className="fas fa-trash-alt"
                                            name={user.id}
                                        ></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    })}
                </div>
            </div>
        </div>
        </div>
    );
};

export default PrivateRoute(Organizers);
