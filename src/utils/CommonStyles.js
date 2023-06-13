import {I18nManager, StyleSheet} from 'react-native';
import typography from './typography';
import { moderateScale } from 'react-native-size-matters';

export default StyleSheet.create({
  HelveticaNeue16Green: {
    fontSize: moderateScale(16),
    color: '#6F776B',
    fontFamily: typography.HelveticaNeue,
  },
  HelveticaNeue13: {
    fontSize: moderateScale(13),
    color: '#707070',
    fontFamily: typography.HelveticaNeue,
  },
  HelveticaNeue16: {
    fontSize: moderateScale(16,0.3),
    color: '#707070',
    fontFamily: typography.HelveticaNeue,
    // alignSelf:'flex-start',
    // textAlign:I18nManager.isRTL?"right":'left'
  },
  HelveticaBold20: {
    fontSize: moderateScale(20),
    color: '#707070',
    fontFamily: typography.HelveticaBold,
    // alignSelf:'flex-start',
    // textAlign:I18nManager.isRTL?"right":'left'
  },
  HelveticaNeue20: {
    fontSize: moderateScale(20),
    color: '#707070',
    fontFamily: typography.HelveticaNeue,
  },
  rowstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: moderateScale(4),
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
    height: moderateScale(45),
    marginTop: moderateScale(20),
  },
  inputView: {
    borderBottomColor: '#707070',
    borderBottomWidth: 1,
    flex: 1,
    marginHorizontal: moderateScale(15),
    paddingHorizontal: moderateScale(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextInput: {
    height: moderateScale(50),
    flex: 1,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  loginContainer: {
    backgroundColor: '#ffffff',
    flex: 1,
    padding: moderateScale(20),
    borderTopRightRadius: moderateScale(45),
    borderTopLeftRadius: moderateScale(45),
  },
  loginBtn: {
    backgroundColor: '#F2D847',
    padding: moderateScale(10),
    marginVertical:moderateScale(20),
    paddingHorizontal: moderateScale(35),
    borderRadius: moderateScale(10),
    alignItems: 'center',
  },
  loginLogo: {
    height: moderateScale(150),
    width: moderateScale(150),
    alignSelf: 'center',
  },
  Error:{
    fontFamily: typography.Helvetica,
    fontSize: moderateScale(14),
    color: 'red',
    marginVertical:moderateScale(5)
  },
  backArrow:{marginTop: moderateScale(30), marginLeft: moderateScale(30), alignItems: 'flex-start'},
  LoginTitle:{
    fontFamily: typography.HelveticaBold,
    fontSize: moderateScale(22),
    color: '#000000',
  },
});
