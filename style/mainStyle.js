import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: "#000",
      borderWidth: 5,
      borderStyle: "solid"
    },
    maskedInput: {
      alignSelf: "flex-start",
      flexGrow: 1,  
      height: 40,
      fontSize: 18,
      borderBottomColor: "#999",
      borderBottomWidth: 1,
      borderStyle: "solid",
    },
    containerMask: {
      flexDirection: "row",
      marginEnd: 500,
      marginBottom: 5,
      marginLeft: 10,
      marginRight: 475,
    },
    errorMessage: {
      alignSelf: "flex-start",
      marginLeft: 15,
      color: "#f00",
      fontSize: 13,
    }
  });

export default styles