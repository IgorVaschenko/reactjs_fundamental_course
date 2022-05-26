import React, {useState} from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: '',});

    const addNewPost = (event) => {
        event.preventDefault();
        
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: '',})//обнуление состояния после добавления нового поста
        
    }

    return (
        <form>
            <MyInput
                onChange={e => setPost({ ...post, title: e.target.value })}
                value={post.title}
                type='text'
                placeholder='Post name'
            />

            <MyInput
                onChange={e => setPost({ ...post, body: e.target.value })}
                value={post.body}
                type='text'
                placeholder='Post description'
            />

            <MyButton onClick={addNewPost}>Add post</MyButton>
        </form>
    );
}
 
export default PostForm;