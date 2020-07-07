import withAuthRedirect from './withAuthRedirect';

export default function withAuth(WrappedComponent, location = '/admin/signin') {
  return withAuthRedirect({
    WrappedComponent,
    location,
    expectedAuth: true
  });
}
