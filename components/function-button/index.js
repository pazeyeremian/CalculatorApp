import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const FunctionButton = (props) => {
      return (
        <TouchableOpacity style={{...styles.container, width: props.ButtonWidth}} onPress={() => props.ButtonAction(props.ThisFunction)}>
            <Text style={styles.text}>{props.ThisFunction}</Text>
        </TouchableOpacity>
      );
    };
    
    const styles = StyleSheet.create({
          container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
            paddingHorizontal: 10,
            backgroundColor: '#202020',
            borderWidth: 1,
            borderColor: '#000000',
            paddingTop: '25%',
            position: 'relative',
          },
           text: {
            fontSize: 20,
            color: '#FFFFFF',
            position: 'absolute',
            textTransform: 'uppercase',
          },
        });
        
        export default  FunctionButton;