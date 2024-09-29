/* 
  File Name: project.jsk
  Student's Name: Qihang Yang
  Student ID: 301277541
  Date: 2024-09-29
*/
export default function Project() {
    return (
        <div>
            <h1>My Projects</h1>
            <div className="project">
                <h3>Project 1</h3>
                <img src={"./GitHub-logo.png"} alt="Project 1" style={{ width: "55px" }}/>
                <p>first project</p>
            </div>
            <div className="project">
                <h3>Project 2</h3>
                <img src={"./GitHub-logo.png"} alt="Project 2" style={{ width: "55px" }} />
                <p>second project</p>
            </div>
            <div className="project">
                <h3>Project 3</h3>
                <img src={"./GitHub-logo.png"} alt="Project 3" style={{ width: "55px" }}/>
                <p>third project</p>
            </div>
        </div>
    );
}