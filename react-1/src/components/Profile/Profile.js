import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/Profileinfo";

function Profile(props) {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.state.posts} />
        </div>

    )
}
 export default Profile;
