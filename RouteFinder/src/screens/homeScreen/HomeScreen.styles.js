import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    height: 50, 
    marginVertical: 15,
    paddingLeft: 10,
    borderColor: 'gray', 
    borderWidth: 1,
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    marginVertical: 30,
  },
  touchableOpacity: {
    width: '80%',
    height: 50,
    marginVertical: 15,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 5,
  },
  button: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  }
});

export default styles;
