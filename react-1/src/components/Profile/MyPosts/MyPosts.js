import s from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts(props) {
    let postsElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}

            </div>
        </div>
    )
}

export default MyPosts;
