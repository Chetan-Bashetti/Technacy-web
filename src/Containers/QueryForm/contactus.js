import React from 'react';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import CallIcon from '@mui/icons-material/Call';
import ChatIcon from '@mui/icons-material/Chat';

import ContactForm from '../../Components/ContactForm/ContactForm';
import { contact } from '../../mock/contact';

import './contactus.css';

const ContactUs = () => {
	const icons = {
		call: <CallIcon />,
		chat: <ChatIcon />,
		mail: <ForwardToInboxIcon />
	};

	return (
		<div className='contact-us-wrapper' id='contact'>
			<div className='titles'>Get in touch </div>
			<div className='contact-us-content'>
				<ContactForm />
				<div className='contact-us-links'>
					{contact.map((eachContact) => (
						<div key={eachContact.key} className='contact-card'>
							<div className='contact-icon'>{icons[eachContact.key]}</div>
							<div className='contact-title'>{eachContact.title}</div>
							<div className='contact-value'>
								{eachContact.key === 'chat' && (
									<a
										href={`https://wa.me/${eachContact.value}?text=Hi, Thank you for contacting Tecnacy`}
										target='_blank'
										rel='noreferrer'
									>
										{eachContact.display_val}
									</a>
								)}
								{eachContact.key === 'call' && (
									<a
										href={`tel:${eachContact.value}`}
										target='_blank'
										rel='noreferrer'
									>
										{eachContact.display_val}
									</a>
								)}
								{eachContact.key === 'mail' && (
									<a
										href={`mailto:${eachContact.value}`}
										target='_blank'
										rel='noreferrer'
									>
										{eachContact.display_val}
									</a>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
