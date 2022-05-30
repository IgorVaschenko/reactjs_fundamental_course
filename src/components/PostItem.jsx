import React from "react";
import MyButton from './UI/button/MyButton'

const PostItem = (props) => {
    // console.log(props)

    return (

        <div className='post'>
            <div className='post__content'>
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className='post__btns'>
                <MyButton
                    onClick={() => props.remove(props.post)}>
                        Delete
                </MyButton>
            </div>
        </div>

/*before 55.20*/
        // <div className='post'>
        //     <div className='post__content'>
        //         <strong>{props.post.id}. {props.post.title}</strong>
        //         <div>
        //             {props.post.body}
        //         </div>
        //     </div>
        //     <div className='post__btns'>
        //         <button>Delete</button>
        //     </div>
        // </div>

        // <div className='post'>
        //     <div className='post__content'>
        //         <strong>1. Javascript</strong>
        //         <div>
        //             Javascript - programming language
        //         </div>
        //     </div>
        //     <div className='post__btns'>
        //         <button>Delete</button>
        //     </div>
        // </div>
    )
}

export default PostItem