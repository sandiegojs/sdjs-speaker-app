import withAuthRedirect from './withAuthRedirect';

export default function withoutAuth(WrappedComponent, location = '/admin/meetups') {
  return withAuthRedirect({
    WrappedComponent,
    location,
    expectedAuth: false
  });
}
