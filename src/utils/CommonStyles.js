import {StyleSheet} from 'react-native';
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
});
