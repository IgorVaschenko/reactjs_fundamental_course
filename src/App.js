import React, { useState } from 'react';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import './styles/App.css';

function App() {
  const [posts, usePosts] = useState([
    {id:1, title: 'Javascript', body: 'Description'},
    {id:2, title: 'Java', body: 'Description'},
    {id:3, title: 'Ruby', body: 'Description'},
    {id:4, title: 'Python', body: 'Description'},
  ])

  const [posts2, usePosts2] = useState([
    {id:1, title: 'React', body: 'Description'},
    {id:2, title: 'Angular', body: 'Description'},
    {id:3, title: 'Vue', body: 'Description'},
    {id:4, title: 'Lodash', body: 'Description'},
  ])
  
  return(
    <div className='App'>

      <PostList posts={posts} title={'Post List 1'}/>
      <PostList posts={posts2} title={'Post List 2'}/>

      {/* <h1 style={{ textAlign: 'center' }}>
        Post list
      </h1>
      {posts.map(post =>
        <PostItem post={post} key={post.id} />
      )} */}

      {/* <PostItem post={{id:1, title: 'Javascript', body: 'Description'}}/>
      <PostItem post={{id:2, title: 'Java', body: 'Description'}}/>
      <PostItem post={{id:3, title: 'Ruby', body: 'Description'}}/>
      <PostItem post={{id:4, title: 'Python', body: 'Description'}}/>
      <PostItem post={{id:5, title: 'C#', body: 'Description'}}/> */}

      {/* <PostItem value={222} item={{title: 0}} number={1}/> можно прокидывать через пропсы любые данные */}
    </div>
  )
}




/****Работа хука useState, классовые и функциональные комроненты****/

// import ClassCounter from './components/ClassCounter';
// import Counter from './components/Counter';

// function App() {
//   // const [count, setCount] = useState(0)
//   // const [value, setValue] = useState('TEXT IN INPUT')

//   /*  before 25.29
//   function increment() {
//     setCount(count+1);
//     console.log(count)
//   }
  
//   function decrement() {
//     setCount(count-1);
//     console.log(count)
//   }
//   */

//   /* before 20.19
//   let likes = 0;

//   function increment() {
//     likes+=1;
//     console.log(likes)
//   }

//   function decrement() {
//     likes-=1;
//     console.log(likes)
//   }
//   */
//   return (
//     <div className="App">

//       {/* before 20.19
//        <h1>{likes}</h1>
//       <button onClick={ increment }>Increment</button>
//       <button onClick={ decrement }>Decrement</button> */}

//       {/* before 25.29
//        <h1>{count}</h1>
//        <h1>{value}</h1>
//       <input
//         type='text'
//         value={value}
//         onChange = { event => setValue(event.target.value) }
//       />
//       <button onClick={ increment }>Increment</button>
//       <button onClick={ decrement }>Decrement</button>*/}

//       <Counter/>
//       <ClassCounter/>
      
//     </div>
//   );
// }

export default App;
