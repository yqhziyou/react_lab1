/* 
  File Name: about.jsk
  Student's Name: Qihang Yang
  Student ID: 301277541
  Date: 2024-09-29
*/
export default function About() {
    return (
        <div>
            <h1>About Me</h1>
            <img src={"./public/photo.webp"} alt="Qihang" style={{width: '150px'}}/>
            <p>Hi, I am Qihang, a software developer with a passion for building efficient solutions...</p>
            <a href={"./public/RESUME.pdf"} target="_blank" rel="noopener noreferrer">Download my Resume</a>
        </div>
    );
}