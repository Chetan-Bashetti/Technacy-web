import { team } from '../../mock/team';
import './team.css';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Team = () => {
	const socialIcons = {
		linkedIn: <LinkedInIcon />,
		insta: <InstagramIcon />,
		twitter: <XIcon />,
		github: <GitHubIcon />
	};

	return (
		<div id='team' style={{ padding: '3em 0' }}>
			<div className='titles'>Meet our team</div>
			<div className='reviews-conent'>
				{team?.map((eachMember) => (
					<div className='review team-member' key={eachMember.name}>
						<img
							src={require(eachMember.gender === 'm'
								? '../../Assets/Images/user.jpg'
								: '../../Assets/Images/user-f.jpg')}
							alt='user'
							className='team-user-icon'
						/>
						<div className='review-text'>
							<div className='user-name team-user'>{eachMember.name}</div>
							<div className='member-desg'>{eachMember.desg}</div>
							<div className='social-links'>
								{eachMember.social.map((eachLink, id) => (
									<a
										href={eachLink.link}
										className='each-social-link'
										key={eachLink.link + id}
										target='_blank'
										rel='noreferrer'
									>
										{socialIcons[eachLink.key]}
									</a>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Team;
