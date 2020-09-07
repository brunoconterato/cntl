import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingHorizontal: 10,
  },
  listHeaderContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  title: {
    color: '#606e7d',
  },
  footerContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    // backgroundColor: 'blue',
  },
  footerTotal: {},
  footerValue: {},
});
