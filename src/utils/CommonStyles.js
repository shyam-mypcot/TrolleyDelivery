import {I18nManager, StyleSheet} from 'react-native';
import typography from './typography';
export default StyleSheet.create({
  HelveticaNeue16Green: {
    fontSize: 16,
    color: '#6F776B',
    fontFamily: typography.HelveticaNeue,
  },
  HelveticaNeue13: {
    fontSize: 13,
    color: '#707070',
    fontFamily: typography.HelveticaNeue,
  },
  HelveticaNeue16: {
    fontSize: 16,
    color: '#707070',
    fontFamily: typography.HelveticaNeue,
    // alignSelf:'flex-start',
    // textAlign:I18nManager.isRTL?"right":'left'
  },
  HelveticaNeue20: {
    fontSize: 20,
    color: '#707070',
    fontFamily: typography.HelveticaNeue,
  },
  rowstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  boxShadow: {
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  inputContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    marginTop: 20,
  },
  inputView: {
    borderBottomColor: '#707070',
    borderBottomWidth: 1,
    flex: 1,
    marginHorizontal: 15,
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextInput: {
    height: 50,
    flex: 1,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  loginContainer: {
    backgroundColor: '#ffffff',
    flex: 1,
    padding: 20,
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
  },
  loginBtn: {
    backgroundColor: '#F2D847',
    padding: 10,
    marginVertical:20,
    paddingHorizontal: 35,
    borderRadius: 10,
    alignItems: 'center',
  },
  loginLogo: {
    height: 200,
    width: 200,
    alignSelf: 'center',
  },
  Error:{
    fontFamily: typography.Helvetica,
    fontSize: 14,
    color: 'red',
    marginVertical:5
  },
});
