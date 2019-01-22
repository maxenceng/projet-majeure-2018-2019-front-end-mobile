import { COLOR_PRIMARY, COLOR_SECONDARY } from '../helpers/common';

export default title => ({
  title,
  headerStyle: {
    backgroundColor: COLOR_PRIMARY,
  },
  headerTintColor: COLOR_SECONDARY,
  headerTitleStyle: {
    fontWeight: 'bold',
    width: '100%',
  },
});
