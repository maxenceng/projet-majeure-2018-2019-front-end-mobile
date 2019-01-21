import { NavigationActions } from 'react-navigation';

export default routeName => dispatch => dispatch(NavigationActions.navigate({ routeName }));
