import "./ProfileCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function ProfileCard(props) {
    return (
        <div className="profile-card">
            <img src={props.avatar} className="avatar-image" alt={props.name} />
            <h1 className="title" >{props.name}</h1>
            <p className="name" >{props.job}</p>
            <p className="job" >{props.description}</p>
            <div>
                <FontAwesomeIcon icon={faCoffee} pulse/>
            </div>
            <p><button>See profile</button></p>
        </div>
    )
}