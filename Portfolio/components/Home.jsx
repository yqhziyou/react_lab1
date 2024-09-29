/* 
  File Name: Home.jsk
  Student's Name: Qihang Yang
  Student ID: 301277541
  Date: 2024-09-29
*/
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1>Welcome to My Portfolio</h1>
            <p>Discover my work, skills, and projects!</p>
            <Link to="/about">Learn more about me</Link>
        </div>
    )
}