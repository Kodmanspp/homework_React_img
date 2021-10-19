import './App.css';
import ProfileCard from './components/ProfileCard.js';
import avatar from "./Avatar.jpg"
import bg from "./bg.jpg"
import Icons from './components/icons/Icons.js';
import ImageUpload from './components/icons/imageUpload/ImageUpload';

function App() {
    return (
        <div className="App">
            {/* <img
                src={bg}
                alt="bg"
                className="bg"
            /> */}
            <ImageUpload/>
            <ProfileCard
                avatar={avatar}
                name="kodmanspp"
                job="no job"
                description="hello my name is kodman"
            />
            <Icons/>
        </div>
    );
}

export default App;
