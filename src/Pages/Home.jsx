import { Box, Button, Center, Flex, Heading, HStack, Link, Tooltip, Image, Text,Grid } from '@chakra-ui/react';
import React, { useRef,useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoCloudDownload } from 'react-icons/go'
import { FaPhoneAlt } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import jeyan from "../Images/jeyan.png"
import emailjs from 'emailjs-com';
import { projects, skills } from '../Utils/data';

import ProjectCard from '../Components/Card';
import Svg2 from '../Components/Svg2';
import Svg3 from '../Components/Svg3';
import Slider from 'react-slick';
import Resume from '../Resume/jeyachandran.pdf'

const Home = () => {

    const form = useRef();
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: matchMedia("(max-width: 425px)").matches ? 1 : matchMedia("(max-width: 1024px)").matches ? 2 : 3,
        slidesToScroll: 1,
    };

    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        Aos.init()
        emailjs.init('UJSohQzVe-YoVPjcs');
    }, [])

    const sendEmail = async (e) => {
        e.preventDefault();
        const serviceId = 'service_r2b0vmv';
        const templateId = 'template_bv0h6ej';

        try {
            setLoading(true);
            await emailjs.send(serviceId, templateId, {
                from_name: nameRef.current.value,
                email_id: emailRef.current.value,
                message: messageRef.current.value,
            });
            alert('Email successfully sent. Check your inbox.');
        } catch (error) {
            console.error('Failed to send email:', error);
        } finally {
            setLoading(false);
        }
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        centerMode: true, 
        centerPadding: '0', 
    };
    

    const categorizedProjects = {
        fullStack: projects.filter(project => project.type === 'FULL STACK'),
        frontend: projects.filter(project => project.type === 'FRONTEND'),
        ml: projects.filter(project => project.type === 'ML')
    };

    

    return (
        <Box>
            <Box id='home'>
                <Flex flexDirection={['column-reverse', 'column-reverse', 'row']} m="Featuredo" justifyContent="space-around" alignItems="center" h="100%">
                    <Box data-aos="fade-down">
                        <Heading>Hey! <span className='themeText'>I'm</span></Heading>
                        <Box className='content'>
                            <Heading fontSize="3.3em" className='text' ><span className='themeText'>JEYACHANDRAN</span></Heading>
                        </Box>
                        <Text>Am a software Developer passionate and experienced in building Web applications.</Text>
                        <HStack className='hireMe' onClick={() => { window.open("https://drive.google.com/file/d/13gDxTpIfoB-8HW7imv_fVcbWp50Z0pBa/view?usp=drive_link", '_blank') }}>
                            <a href={Resume} download="jeyachandran">
                                <Button>Resume <GoCloudDownload /></Button>
                            </a>
                        </HStack>
                    </Box>
                    <Box data-aos="fade-down">
                        <Image src="https://freesvg.org/img/1519501415.png" alt="jeyan"/>
                    </Box>
                </Flex>
            </Box>

            {/* About me */}

            <Box id="aboutMe">
                <Heading>About <span className='themeText'>me</span></Heading>
                <Flex flexDirection={['column-reverse', 'column-reverse', 'column-reverse', 'row']} alignItems="center" h="100%">
                    <div data-aos="fade-right">
                        <Svg3 />
                    </div>

                    <Flex data-aos="fade-left">
                        <Flex w="100%" gap="10%" justifyContent="center">
                            <Image
                                borderRadius='full'
                                boxSize='250px'
                                src={jeyan} 
                                alt='JEYAN Avatar' />
                            <Svg3 />
                        </Flex>
                        <Box>
                            <Text>A highly motivated and ambitious web developer with substantial technical expertise, self-discipline, and the ability to work independently. Skilled in playing a pivotal role in website development to ensure optimal accessibility, user experience, and usability. A quick learner who easily absorbs new ideas and communicates clearly and effectively. Possesses over 200 hours of coding experience and has solved more than 100 DSA problems.</Text>
                        </Box>
                    </Flex>
                </Flex>
            </Box>

            {/* Technical Skills section */}
            <Box id="skills">
                <Heading>
                    Technical
                    <span className="themeText"> Skills</span>
                </Heading>
                <Flex className='skills'>
                    <Flex>
                        <Heading size="lg">Front<span className='themeText'>end</span></Heading>
                        <Box>
                            {
                                skills.filter((el) => el.tag === "frontend").map(skill => <Box
                                    key={skill.id}
                                    className="skill"
                                    data-aos="zoom-in-up">
                                    <Box>
                                        <Image src={skill.icon} alt={`${skill.title} icon`} />
                                    </Box>
                                    <Text>{skill.title}</Text>
                                </Box>)
                            }
                        </Box>
                    </Flex>
                    <Flex>
                        <Heading size="lg">Back<span className='themeText'>end</span></Heading>
                        <Box>
                            {
                                skills.filter((el) => el.tag === "backend").map(skill => <Box
                                    key={skill.id}
                                    className="skill"
                                    data-aos="zoom-in-down">
                                    <Box>
                                        <Image src={skill.icon} alt={`${skill.title} icon`} />
                                    </Box>
                                    <Text>{skill.title}</Text>
                                </Box>)
                            }
                        </Box>
                    </Flex>
                    <Flex>
                        <Heading size="lg">Platforms <span className='themeText'>& Tools</span></Heading>
                        <Box>
                            {
                                skills.filter((el) => el.tag === "platform").map(skill => <Box
                                    key={skill.id} className="skill"
                                    data-aos="zoom-in">
                                    <Box>
                                        <Image src={skill.icon} alt={`${skill.title} icon`} />
                                    </Box>
                                    <Text>{skill.title}</Text>
                                </Box>)
                            }
                        </Box>
                    </Flex>
                </Flex>
            </Box>


            {/* show projects */}
            <Box id="projects">
                <Heading textAlign="center">
                    Featured <span className="themeText">Projects</span>
                </Heading>
                <Box mb={8}>
                    <Heading size="lg" mb={4}>
                        Full Stack <span className="themeText">Projects</span>
                    </Heading>
                    <Slider {...sliderSettings}>
                        {categorizedProjects.fullStack.map((project) => (
                            <ProjectCard key={project.id} {...project} height="550px" />
                        ))}
                    </Slider>
                </Box>
                <Box mb={8}>
                    <Heading size="lg" mb={4}>
                        Frontend <span className="themeText">Projects</span>
                    </Heading>
                    <Slider {...sliderSettings}>
                        {categorizedProjects.frontend.map((project) => (
                            <ProjectCard key={project.id} {...project} height="500px" />
                        ))}
                    </Slider>
                </Box>
                <Box mb={8}>
                    <Heading size="lg" mb={4}>
                        ML <span className="themeText">Projects</span>
                    </Heading>
                    <Slider {...sliderSettings}>
                        {categorizedProjects.ml.map((project) => (
                            <ProjectCard key={project.id} {...project} height="400px" />
                        ))}
                    </Slider>
                </Box>
            </Box>



            {/* Github Statistics */}
            <Box id="githubStats">
                <Heading textAlign="center">Github <span className='themeText'>stats</span></Heading>
                <Center className='github-stats'>
                    <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=jeyachandranj&layout=compact&hide_border=true&theme=radical" alt="Atanu's most used languages" />
                    <Image src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=jeyachandranj&theme=radical" alt="Atanu's github Stats" />
                </Center>

                <Center className='github-stats'>
                    <Image src="https://github-readme-stats.vercel.app/api?username=jeyachandranj&show_icons=true&locale=en&layout=compact&hide_border=true&theme=radical" alt="Atanu's github stats" />
                    <Image src="https://github-readme-streak-stats.herokuapp.com/?user=jeyachandranj&layout=compact&hide_border=true&theme=radical" alt="Atanu's current Streaks" />
                </Center>

                <Center>
                    <GitHubCalendar username="jeyachandranj" color="#4a8af4" children={<ReactTooltip html />} />
                </Center>
            </Box>


            {/* Contact me */}
            <Box id='contactMe'>
                <Heading textAlign="center">Contact <span className='themeText'>Me</span></Heading>
                <Flex flexDirection={["column", "column", "column", "row"]} alignItems="center">

                    <Box>
                        <Svg2 />
                    </Box>

                    <Box className='form-section'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='inputBox'>
                                <input type="text" name="from_name" required />
                                <span>Full Name</span>
                            </div>
                            <div className='inputBox'>
                                <input type="email" name="from_mail" required />
                                <span>Email</span>
                            </div>
                            <div>
                                <textarea placeholder='Message' name="message" />
                            </div>
                            <input type="submit" value="Send Message" />
                        </form>

                        <Flex className='contact-info'>
                            <HStack>
                                <SiGmail color="#e34133" />
                                <Text>j.jeyachandran0722@gmail.com</Text>
                            </HStack>
                            <HStack>
                                <FaPhoneAlt color="#00a14f" />
                                <Text>+91 74188 00609</Text>
                            </HStack>
                        </Flex>

                        <Flex gap={["10px", "20px", "20px", "40px"]}>
                            <Link href='https://wa.me/917418800609' target="_blank">
                                <Tooltip label='jeyachandranj'>
                                    <Box className='social-icons'>
                                        <Box>
                                            <Image w="100%" src="https://brandlogos.net/wp-content/uploads/2018/10/whatsapp-logo.png" alt='Whatsapp brand logo'/>
                                        </Box>
                                    </Box>
                                </Tooltip>
                            </Link>

                            <Link href='https://www.linkedin.com/in/jeyachandran-j-638573259/' target="_blank">
                                <Tooltip label='jeyachandranj'>
                                    <Box className='social-icons'>
                                        <Box>
                                            <Image w="100%" src="https://openvisualfx.com/wp-content/uploads/2019/10/linkedin-icon-logo-png-transparent.png" alt='Linkedin brand logo' />
                                        </Box>
                                    </Box>
                                </Tooltip>
                            </Link>

                            <Link href="https://github.com/jeyachandranj" target="_blank">
                                <Tooltip label='jeyachandranj'>
                                    <Box className='social-icons'>
                                        <Box>
                                            <Image w="100%" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt='Github brand logo' />
                                        </Box>
                                    </Box>
                                </Tooltip>
                            </Link>
                        </Flex >
                    </Box >
                </Flex >
            </Box >

            {/* footer */}
            <Flex id='footer'>
                <Text>Made with by Jeyachandran J </Text>
            </Flex>
        </Box >
    )
}

export default Home