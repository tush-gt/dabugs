// import "./styles.css"
import "./team.css"

function Developer()
{
    return <div className="team-body-dev">
    <div className="team-header-dev">
        <h1>Meet Our Developers</h1>
        <p>A team of passionate developers from Don Bosco Institute of Technology committed to creating sustainable solutions.</p>
    </div>
    
    <div className="team-container">
        <div className="team-card">
            <div className="team-card-inner">
                <div className="team-photo">
                    <img src="./apurva.jpg" alt="Developer 1"/>
                </div>
                <div className="team-info">
                    <h2>Apurva Kohad</h2>
                    <h3>Frontend Developer</h3>
                    <p>Computer Engineering, DBIT</p>
                    <div className="team-skills">
                        <span>HTML/CSS</span>
                        <span>JavaScript</span>
                        <span>React</span>
                    </div>
                    <p className="team-bio">Passionate about creating intuitive user interfaces that make sustainability accessible to everyone. Specializes in responsive design and interactive web applications.</p>
                    <div className="team-social">
                        <a href="#https://github.com/apurva181212" className="social-icon">GitHub</a>
                        <a href="#https://www.linkedin.com/in/apurva-kohad-ab8428314/" className="social-icon">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="team-card">
            <div className="team-card-inner">
                <div className="team-photo">
                    <img src="./photo/WhatsApp Image 2025-03-01 at 19.46.52_5228cbdf.jpg" alt="Developer 2"/>
                </div>
                <div className="team-info">
                    <h2>Ankita Gadre </h2>
                    <h3>Backend Developer</h3>
                    <p>Computer Engineer, DBIT</p>
                    <div className="team-skills">
                        <span>Firebase</span>
                        <span>Node.js</span>
                        <span>MongoDB</span>
                    </div>
                    <p className="team-bio">Dedicated to building robust backend systems for carbon footprint tracking and analysis. Focuses on data optimization and efficient algorithms for environmental impact assessment.</p>
                    <div className="team-social">
                        <a href="#https://github.com/Ankita53744" className="social-icon">GitHub</a>
                        <a href="#https://www.linkedin.com/in/ankita-gadre-688508331/" className="social-icon">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="team-card">
            <div className="team-card-inner">
                <div className="team-photo" id="tush">
                    <img src="./photo/WhatsApp Image 2025-03-01 at 21.17.23_d54c4973.jpg" alt="Tushita Patil"/>
                </div>
                <div className="team-info">
                    <h2>Tushita Patil</h2>
                    <h3>Full Stack Developer</h3>
                    <p>Computer Engineer, DBIT</p>
                    <div className="team-skills">
                        <span>HTML/CSS</span>
                        <span>JSON</span>
                        <span>React</span>
                    </div>
                    <p className="team-bio">Versatile developer working across the entire tech stack. Interested in developing comprehensive solutions for environmental sustainability and creating scalable applications.</p>
                    <div className="team-social">
                        <a href="https://github.com/tush-gt" className="social-icon" target="_blank">GitHub</a>
                        <a href="https://www.linkedin.com/in/tushita-prashant-patil-3360a6325" className="social-icon" target="_blank">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="team-card">
            <div className="team-card-inner">
                <div className="team-photo">
                    <img src="./photo/WhatsApp Image 2025-03-01 at 20.00.18_f4695515.jpg" alt="Developer 4"/>
                </div>
                <div className="team-info">
                    <h2>Ansh Gharat</h2>
                    <h3>UI/UX Designer</h3>
                    <p>Computer Engineer, DBIT</p>
                    <div className="team-skills">
                        <span>html</span>
                        <span>Node.js</span>
                        <span>CSS</span>
                    </div>
                    <p className="team-bio">Creating beautiful and functional interfaces that communicate complex environmental data clearly. Focuses on user research and accessibility to make sustainability information available to all.</p>
                    <div className="team-social">
                        <a href="#https://github.com/Ansh011204" className="social-icon">GitHub</a>
                        <a href="#https://www.linkedin.com/in/ansh-gharat-3b834734b/" className="social-icon">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="team-mission">
        <h2>Our Mission</h2>
        <p>As students at Don Bosco Institute of Technology, we're dedicated to building technology that promotes environmental awareness and sustainability. The CarbonZero project was created as part of our commitment to using our technical skills to address real-world challenges.</p>
        <p>Our team brings together diverse skills in web development, data analysis, and design to create a platform that helps individuals and organizations understand and reduce their carbon footprint.</p>
    </div>
    
    <footer className="dev-footer">
        <p>&copy; 2025 CarbonZero. All rights reserved.</p>
        <p>Developed by DBIT Students</p>
    </footer>
    </div>
}

export default Developer;