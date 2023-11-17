// Frank Ziegler, SE Team 4
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar.jsx';
import image1 from '../../assets/images/mike-kononov-lFv0V3_2H6s-unsplash.jpg'
import image2 from '../../assets/images/visax-N7PFDwM0AYI-unsplash.jpg'
import TeamMemberCard from '../../components/TeamMemberCard.jsx';
import Footer from '../../components/Footer.jsx';

function HomePage() {

  const containerStyle = {
    position: 'relative',
    fontFamily: 'Satoshi, sans-serif',
    backgroundColor: '#F6F5F0',
    padding: '70px',
  };

  const imageStyle1 = {
    width: '100%',
    height: '40%',
    marginTop: '10px',
    borderRadius: '5px',
  };

  const imageStyle2 = {
    width: '100%',
    display: 'block',
    marginTop: '10px',
  };

  const titleStyle = {
    color: 'black',
    fontSize: '64px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const headerStyle = {
    fontSize: '30px',
    color: 'black',
    marginTop: '60px',
  }

  const subTitleTextStyle = {
    fontSize: '16px',
    textAlign: 'right',
    marginTop: '4px'
  }

  const subHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '36px',
    color: 'black',
    margin: '0', // Reset margin to avoid default margin space
    marginLeft: '36px', // Add left margin for indentation
  };

  const subHeaderNumberStyle = {
    marginRight: '10px', // Add space between the number and text
    fontSize: '24px',
  };

  const paragraphStyle = {
    textAlign: 'left', // Align paragraph text to the right
    fontSize: '18px',
    color: 'black',
    marginTop: '5px', // Adjust as needed
    marginLeft: '84px',
  };

  const teamMembers = [
    {
      name: 'Frank Ziegler',
      position: 'Full Stack Engineer, Product Owner',
      credentials: 'Frank is a versatile Full Stack Engineer and designer adept at seamlessly bridging front-end and back-end technologies while implementing innovative solutions.',
    },
    {
      name: 'Kyle Wallace',
      position: 'Frontend Engineer, Scrum Master',
      credentials: 'Kyle is an accomplished Frontend Engineer and dedicated Scrum Master known for his proficiency in crafting engaging user interfaces and orchestrating agile workflows with precision.',
    },
    {
      name: 'Shyaam Darji',
      position: 'UI/UX Designer, AWS Cloud Engineer',
      credentials: 'Shyaam is a dynamic talent, serving as an intuitive UX/UI Designer and proficient AWS Cloud Engineer, skillfully blending user-centric design principles with robust cloud infrastructure expertise to deliver seamless and innovative solutions.',
    },
    {
      name: 'Tom Leonard',
      position: 'Database Engineer, Full Stack Developer',
      credentials: 'Tom is a versatile professional, excelling as a meticulous Database Engineer and adept Full Stack Developer, demonstrating expertise in optimizing data architecture and seamlessly integrating front-end and back-end technologies for comprehensive system development.',
    },
    {
      name: 'Matthew Dickinson',
      position: 'Application Support Specialist, Backend Developer',
      credentials: 'Matthew is a skilled Backend Developer, doubling as a dedicated Application Support Technician, showcasing a proficiency in crafting robust server-side solutions while providing invaluable technical assistance to ensure seamless application functionality and user satisfaction.',
    },
    {
      name: 'Sathwick Baluspati',
      position: '?',
      credentials: 'We are actually not sure if he is still in this class.',
    },
  ];

  const teamCardsStyle = {
    display: 'flex',
    justifyContent: 'center', // Center the cards horizontally
    flexWrap: 'wrap', // Allow cards to wrap to the next line if needed
  };

  return (

    <div>
      <Navbar />
      <div style={containerStyle}>
        <div style={titleStyle}>
          THE WORLD'S LEADING WEB-BASED SURVEY SYSTEM, WELCOME TO SUREWAY
        </div>
        <h1 style={subTitleTextStyle}>the sure way to survey!</h1>
        <img src={image1} alt="Survey Image" style={imageStyle1} />
        <div style={{ paddingLeft: '20px' }}>
        <h1 style={headerStyle}>HOW WE WORK</h1>
        <div style={subHeaderStyle}>
            <h2 style={subHeaderNumberStyle}>01.</h2>
            <h2 style={{ margin: '0' }}>STRATEGY</h2>
        </div>
        <p style={paragraphStyle}>We aim to please our users by implementing features such as creating a survey, taking a survey, and history management. We believe
              we can surpass competition like SurveyMonkey and rise to the top by practicing basic design principles, not allowing ads to take over
              our site, implementing with user accessibility in mind, and more.
        </p>
        <div style={subHeaderStyle}>
            <h2 style={subHeaderNumberStyle}>02.</h2>
            <h2 style={{ margin: '0' }}>DESIGN</h2>
        </div>
        <p style={paragraphStyle}>Our mission is to revolutionize surveys with a user-centric approach. We prioritize an intuitive user experience, 
        offering versatile survey creation tools and robust security measures. Our platform ensures data privacy, delivers actionable insights, and fosters inclusivity, 
        setting a new standard for engaging and accessible surveys. Through continuous innovation, we aim to empower users with a sophisticated yet user-friendly survey 
        system.
        </p>
        <div style={subHeaderStyle}>
            <h2 style={subHeaderNumberStyle}>03.</h2>
            <h2 style={{ margin: '0' }}>IMPACT</h2>
        </div>
        <p style={paragraphStyle}>We strive to empower users to gather meaningful insights effortlessly. Through our user-centric platform, we 
        enable streamlined survey creation, ensuring data security and user privacy. Our goal is to facilitate informed decision-making by delivering actionable 
        analytics and fostering inclusivity in survey accessibility. By revolutionizing the survey experience, we aim to make a lasting impact on how organizations 
        collect valuable data and engage with their audiences.
        </p>
        <h1 style={headerStyle}>OUR TEAM</h1>
        <div style={teamCardsStyle}>
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            position={member.position}
            credentials={member.credentials}
          />
        ))}
      </div>
        </div>
      </div>
      <Footer />
    </div>
);

}

export default HomePage;
