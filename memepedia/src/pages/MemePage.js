import MemeCard from '../components/MemeCard'

// import the image to use here..
import img1 from '../resources/1_JzjHe3oYacjlJITIht-DQw.png'
import img2 from '../resources/Best-Spider-Man-Memes.png.webp'


const MemePage = () => {
    return (
        <div>
            <h1>MemePage</h1>
            <MemeCard image={img2} creator={"Amy"}/>
        </div>
    ) 
};

export default MemePage;