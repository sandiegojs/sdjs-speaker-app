import { PrivateRoute } from '../../hocs/PrivateRoute';

const Organizers = () => {
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

                </div>
            </div>
        </div>
        </div>
    );
};

export default PrivateRoute(Organizers);
