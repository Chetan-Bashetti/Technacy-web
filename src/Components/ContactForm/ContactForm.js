import React from 'react';
import Button from '../../Components/Button/MuiButton';

import '../../Assets/CSS/ContactForm.css';

const Input = ({ placeholder, value, onChange, maxLength, type }) => {
	return (
		<input
			className='input-field'
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			maxLength={maxLength}
			type={type}
		/>
	);
};

const ContactForm = () => {
	const [name, setName] = React.useState('');
	const [phone, setPhone] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [queryDesc, setQueryDesc] = React.useState('');
	const [subject, setSubject] = React.useState('');

	const checkIsNumber = (value) => {
		let reg = new RegExp('^[0-9]*$');
		if (reg.test(value)) {
			return true;
		} else {
			alert('Only number are allowed');
		}
	};

	const handleCreateQuery = async () => {
		if (name === '') {
			alert('Please enter you name');
			return;
		}
		if (phone === '' || phone.length !== 10) {
			alert('Please enter 10 digit phone number');
			return;
		}
		if (queryDesc === '') {
			alert('Please write your query');
			return;
		}

		window.open(
			`https://wa.me/${''}?text=Hi, My name is ${name} my query is ${queryDesc} i want book an appoitment on`,
			'_blank'
		);
	};

	const handleTextField = (e, setter) => {
		const { value } = e.target;
		console.log(value);
		setter(value);
	};

	const handleFieldOnchange = (e, setter) => {
		const isNumber = checkIsNumber(e.target.value, setter);
		if (isNumber) setter(e.target.value);
	};

	return (
		<div className='query-form-wrapper'>
			<div className='form-fields'>
				<div className='form-fields-set-1'>
					<div className='field-container'>
						<label>name</label>
						<Input
							placeholder='Name'
							value={name}
							onChange={(e) => handleTextField(e, setName)}
						/>
					</div>
					<div className='field-container'>
						<label>email</label>
						<Input
							placeholder='Email'
							value={email}
							onChange={(e) => handleFieldOnchange(e, setEmail)}
							maxLength={12}
						/>
					</div>
				</div>
				<div className='form-fields-set-1'>
					<div className='field-container'>
						<label>phone number</label>
						<Input
							placeholder='Phone number'
							value={phone}
							onChange={(e) => handleFieldOnchange(e, setPhone)}
							maxLength={10}
						/>
					</div>
					<div className='field-container'>
						<label>Subject</label>
						<Input
							placeholder='Subject'
							value={subject}
							onChange={(e) => handleFieldOnchange(e, setSubject)}
							maxLength={10}
						/>
					</div>
				</div>
				<div className='field-container'>
					<label>Write your message below</label>
					<textarea
						className='input-field'
						placeholder='Message'
						value={queryDesc}
						onChange={(e) => setQueryDesc(e.target.value)}
					/>
				</div>
			</div>
			<div className='form-actions'>
				<Button
					title='Submit'
					style={{ margin: '0.5em 1em' }}
					onClick={handleCreateQuery}
				/>
			</div>
		</div>
	);
};

export default ContactForm;
