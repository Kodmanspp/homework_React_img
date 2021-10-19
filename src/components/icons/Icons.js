import HeartIcon from "./Heart"
import LikeIcon from "./Like"
const Icons = () => {
    return (
        <div className="icon">
            <button>
                <HeartIcon />
            </button>
            <button>
                <LikeIcon />
            </button>
        </div>
    )
}
export default Icons;