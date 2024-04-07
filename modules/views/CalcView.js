import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles} from '../styles/global';


function CalcView() {
	
	const [displayValue, setDisplayValue] = useState('0');
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [prevResult, setPrevResult] = useState('');
	const [operator, setOperator] = useState('');

	const handleNumberPress = (num) => {
		if (operator === '') {
			setOperand1(operand1 + num);
			setDisplayValue(operand1 + num);
		} else {
			setOperand2(operand2 + num);
			setDisplayValue(operand2 + num);
		}
	};

	const handleOperatorPress = (op) => {
		if (operand1 !== '') {
			setOperator(op);
		}
	};

	const calculateResult = () => {
		let result;
		switch (operator) {
			case '+':
				result = parseFloat(operand1) + parseFloat(operand2);
				break;
			case '-':
				result = parseFloat(operand1) - parseFloat(operand2);
				break;
			case '*':
				result = parseFloat(operand1) * parseFloat(operand2);
				break;
			case '/':
				result = parseFloat(operand1) / parseFloat(operand2);
				break;
			default:
				result = 'Error';
		}
		setPrevResult(result);
		setOperand1(result.toString());
		setOperand2('');
		setOperator('');
		setDisplayValue(result.toString());
	};

	const handleEqualsPress = () => {
		calculateResult();
	};

	const handleClearPress = () => {
		setOperand1('');
		setOperand2('');
		setOperator('');
		setDisplayValue('0');
	};

	return (
		<View style={styles.container}>  
			
			<Text style={styles.display}>{displayValue}</Text>
			<View style={styles.buttonRow}>
				<TouchableOpacity style={styles.button} onPress={() => handleNumberPress('1')}>
					<Text style={styles.buttonText}>1</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => handleNumberPress('2')}>
					<Text style={styles.buttonText}>2</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => handleNumberPress('3')}>
					<Text style={styles.buttonText}>3</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => handleOperatorPress('+')}>
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.buttonRow}>
				<TouchableOpacity style={styles.button} onPress={() => handleNumberPress('4')}>
					<Text style={styles.buttonText}>4</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => handleNumberPress('5')}>
					<Text style={styles.buttonText}>5</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => handleNumberPress('6')}>
					<Text style={styles.buttonText}>6</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => handleOperatorPress('-')}>
					<Text style={styles.buttonText}>-</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.buttonRow}>
				<TouchableOpacity style={styles.button} onPress={() => handleNumberPress('7')}>
					<Text style={styles.buttonText}>7</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => handleNumberPress('8')}>
					<Text style={styles.buttonText}>8</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => handleNumberPress('9')}>
					<Text style={styles.buttonText}>9</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => handleOperatorPress('*')}>
					<Text style={styles.buttonText}>*</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.buttonRow}>
				<TouchableOpacity style={styles.button} onPress={() => handleClearPress()}>
					<Text style={styles.buttonText}>C</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => handleNumberPress('0')}>
					<Text style={styles.buttonText}>0</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => handleEqualsPress()}>
					<Text style={styles.buttonText}>=</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => handleOperatorPress('/')}>
					<Text style={styles.buttonText}>/</Text>
				</TouchableOpacity>
			</View>

			<View style={globalStyles.footer}>
				<Text style={globalStyles.text}>Texto 1</Text>
				<Text style={globalStyles.text}>Texto 2</Text>
   				<Text style={globalStyles.text}>Texto 3</Text>
				<Text style={globalStyles.text}>Texto 4</Text>
				<Text style={globalStyles.text}>Texto 5</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 30,
		alignItems: 'center',
		
	},
	display: {
		fontSize: 40,
		color: '#d8d3c5',
		marginBottom: 20,
	},
	buttonRow: {
		flexDirection: 'row',
		marginBottom: 10,
	},
	button: {
		backgroundColor: '#26EAB9',
		padding: 20,
		margin: 5,
		borderRadius: 10,
	},
	buttonText: {
		fontSize: 20,
		color: '#1e2935',
	},
});

export default CalcView;
