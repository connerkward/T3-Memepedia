import MemeCard from '../components/MemeCard'
import MemeTree from '../components/MemeTree'
import Tags from '../components/Tags'
// import the image to use here..
import img1 from '../resources/1_JzjHe3oYacjlJITIht-DQw.png'
import img2 from '../resources/Best-Spider-Man-Memes.png.webp'


const MemePage = () => {
    return (
        <div>
            <h1>MemePage</h1>
            <MemeCard image={img2} creator={"Amy"}/>
            <MemeTree/>
            <Tags/>
        </div>
            
    ) 
};

export default MemePage;