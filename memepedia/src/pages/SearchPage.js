import Card from '../components/Card'
import SearchBar from '../components/SearchBar'

import img1 from '../resources/1_JzjHe3oYacjlJITIht-DQw.png'
import img2 from '../resources/Best-Spider-Man-Memes.png.webp'
// feel free to help me add images down here.. :)

const SearchPage = () => {
    return (
        <div>
            <h1>SearchPage</h1>

            <SearchBar />
            
            <label>Trending!</label>
            <div className="cardRow">
                <Card image={img1} />
                <Card image={img2} />
                <Card />
                <Card />
                <Card />
            </div>
            <label>Most Popular!</label>
            <div className="cardRow">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

            <label>Newest Memes!</label>
            <div className="cardRow">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>


        </div>
    ) 
};

export default SearchPage;