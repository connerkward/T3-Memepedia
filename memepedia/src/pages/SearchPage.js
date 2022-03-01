import Card from '../components/Card'
import SearchBar from '../components/SearchBar'

import img1 from '../resources/1_JzjHe3oYacjlJITIht-DQw.png'
import img2 from '../resources/Best-Spider-Man-Memes.png.webp'
// feel free to help me add images down here.. :)
/* SEARCH ====================== */
var imgArr = [];
var randomImg = imgArr[Math.floor(Math.random() * imgArr.length)];

const SearchPage = () => {
    return (
        <div className="searchPage">
            <h1>SearchPage</h1>
            {/* It's okay to delete this heading */}
            <SearchBar />
            <label>Trending!</label>
            <div className="cardRow">
                {}
                <Card image={img1} />
                <Card image={img2} />
                <Card image={img2}/>
                <Card image={img2}/>
                <Card image={img2}/>
            </div>
            <label>Most Popular!</label>
            <div className="cardRow">
                <Card image={img2}/>
                <Card image={img2}/>
                <Card image={img2}/>
                <Card image={img2}/>
                <Card image={img2}/>
            </div>

            <label>Newest Memes!</label>
            <div className="cardRow">
                <Card image={img2}/>
                <Card image={img2}/>
                <Card image={img2}/>
                <Card image={img2}/>
                <Card image={img2}/>
            </div>


        </div>
    ) 
};

export default SearchPage;