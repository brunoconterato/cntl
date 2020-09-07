import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f8fb',
  },
  headerContainer: {
    padding: 10,
    height: 60,
  },
  listHeaderContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  title: {
    color: '#606e7d',
    fontSize: 22,
    fontWeight: 'bold',
  },
  listHeaderDay: {
    color: '#9dadb8',
    fontWeight: 'bold',
    fontSize: 18,
    textAlignVertical: 'bottom',
    marginRight: 3,
  },
  listHeaderWeekDay: {
    color: '#9dadb8',
    fontSize: 12,
    textAlignVertical: 'bottom',
    marginBottom: 2,
  },
  footerContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    paddingTop: 10,
    backgroundColor: '#dce4f0',
  },
  footerTotal: {
    fontSize: 14,
    color: '#9dadb8',
    fontWeight: 'bold',
  },
  footerValue: {
    color: '#0f3a57',
    fontSize: 20,
    fontWeight: 'bold',
  },
  footerMoneyValue: {
    color: '#0f3a57',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
