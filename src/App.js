import React, { useMemo, useRef, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';






/*********************
➝ Поиск. Фильтрация.
➝ useMemo. Мемоизация. Кеширование
 ********************/

// import MySelect from './components/UI/select/MySelect';
// import MyInput from './components/UI/input/MyInput';

// /*****Чистый результат функции под этой, проверка на длину PostList Вынесена в компонент******/
// function App() {
//   const [posts, setPosts] = useState([
//     { id: 1, title: 'Javascript', body: 'Description 4' },
//     { id: 2, title: 'Java', body: 'Description 3' },
//     { id: 3, title: 'Ruby', body: 'Description 2' },
//     { id: 4, title: 'Python', body: 'Description 1' },
//   ])

//   const [filter, setFilter] = useState({sort: '', query: ''})

//   const sortedPosts = useMemo(() => {
//     if (filter.sort) {
//       return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
//     }

//     return posts;
//   }, [filter.sort, posts])

//   const sortedAndSearchedPosts = useMemo( () => {
//     return sortedPosts.filter( post => post.title.toLowerCase().includes(filter.query))
//   }, [filter.query, sortedPosts])

//   const createPost = (newPost) => {
//     setPosts([...posts, newPost])
//   }

//   const removePost = (post) => {
//     setPosts( posts.filter ( p => p.id !== post.id ))
//   }

  
//   return (
//     <div className='App'>
//       <PostForm create={createPost}/> 

//       <hr style={{margin: '15px 0'}}/>

//       <PostFilter
//         filter={filter}
//         setFilter={setFilter}
//       />

//      <PostList
//             remove={removePost}
//             posts={sortedAndSearchedPosts}
//             title='Post List 1'
//         />
//     </div>
//   )
// }


// function App() {
//   const [posts, setPosts] = useState([
//     { id: 1, title: 'Javascript', body: 'Description 4' },
//     { id: 2, title: 'Java', body: 'Description 3' },
//     { id: 3, title: 'Ruby', body: 'Description 2' },
//     { id: 4, title: 'Python', body: 'Description 1' },
//   ])
   
//   // const [selectedSort, setSelectedSort] = useState('')
//   // const[searchQuery, setSearchQuery] = useState('')

//   const [filter, setFilter] = useState({sort: '', query: ''})

//   // function getSortedPosts() {
//   //   console.log('Otrabotala function SortPost!!')
//   //   if (selectedSort) {
//   //     return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
//   //   }

//   //   return posts;
//   // }

//   const sortedPosts = useMemo(() => {
//     // console.log('Otrabotala function SortPost!!')
//     if (filter.sort) {
//       return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
//     }

//     return posts;
//   }, [filter.sort, posts])

//   const sortedAndSearchedPosts = useMemo( () => {
//     return sortedPosts.filter( post => post.title.toLowerCase().includes(filter.query))
//   }, [filter.query, sortedPosts])

//   // const sortedPosts = useMemo(() => {
//   //   // console.log('Otrabotala function SortPost!!')
//   //   if (selectedSort) {
//   //     return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
//   //   }

//   //   return posts;
//   // }, [selectedSort, posts])

//   // const sortedAndSearchedPosts = useMemo( () => {
//   //   return sortedPosts.filter( post => post.title.toLowerCase().includes(searchQuery))
//   // }, [searchQuery, sortedPosts])

//   const createPost = (newPost) => {
//     setPosts([...posts, newPost])
//   }

//   //Получаем пост из дочернего компонента
//   const removePost = (post) => {
//     setPosts( posts.filter ( p => p.id !== post.id ))
//   }

//   // const sortPosts = (sort) => {
//   //   setSelectedSort(sort)
//   // }
  
//   return (
//     <div className='App'>
//       <PostForm create={createPost}/> 

//       <hr style={{margin: '15px 0'}}/>

//       <PostFilter
//         filter={filter}
//         setFilter={setFilter}
//       />

//       {/* <div>
//         <MyInput
//           value={searchQuery}
//           onChange={e => setSearchQuery(e.target.value)}
//           placeholder='Search'
//         />

//         <MySelect
//           value={selectedSort}
//           onChange={sortPosts}
//           defaultValue='Сортировка по'
//           options={[
//             { value: 'title', name: 'По названию' },
//             { value: 'body', name: 'По описанию' }
//           ]}

//         />
//       </div> */}

//       {/* {posts.length !== 0 */}
//       { sortedAndSearchedPosts.length !== 0
//         ? <PostList
//             remove={removePost}
//             posts={sortedAndSearchedPosts}
//             title='Post List 1'
//         />
//         : <h1 style={{ textAlign: 'center' }}>
//             Posts not found
//         </h1>
//       }
//     </div>
//   )
// }


/*************➝ Сортировка. Выпадающий список*****************/

// function App() {
//   const [posts, setPosts] = useState([
//     { id: 1, title: 'Javascript', body: 'Description 4' },
//     { id: 2, title: 'Java', body: 'Description 3' },
//     { id: 3, title: 'Ruby', body: 'Description 2' },
//     { id: 4, title: 'Python', body: 'Description 1' },
//   ])
   
//   const [selectedSort, setSelectedSort] = useState('')

//   const createPost = (newPost) => {
//     setPosts([...posts, newPost])
//   }

//   //Получаем пост из дочернего компонента
//   const removePost = (post) => {
//     setPosts( posts.filter ( p => p.id !== post.id ))
//   }

//   const sortPosts = (sort) => {
//     setSelectedSort(sort)
//     setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
//   }
  
//   return (
//     <div className='App'>
//       <PostForm create={createPost}/> 

//       <hr style={{margin: '15px 0'}}/>

//       <div>
//         <MySelect
//           value={selectedSort}
//           onChange={sortPosts}
//           defaultValue='Сортировка по'
//           options={[
//             {value: 'title', name: 'По названию'},
//             {value: 'body', name: 'По описанию'}
//           ]}

//         />

//         {/* <select>
//           <option value='value1'>По названию</option>
//           <option value='value2'>По описанию</option>
//         </select> */}
//       </div>

//       {posts.length !== 0
//         ? <PostList
//             remove={removePost}
//             posts={posts}
//             title='Post List 1'
//         />
//         : <h1 style={{ textAlign: 'center' }}>
//             Posts not found
//         </h1>
//       }
//     </div>
//   )
// }


/**************
➝ Обмен данными между компонентами. От родителя к ребенку. От ребенка к родителю.
➝ Отрисовка по условию
 **************/

// function App() {
//   const [posts, setPosts] = useState([
//     { id: 1, title: 'Javascript', body: 'Description' },
//     { id: 2, title: 'Java', body: 'Description' },
//     { id: 3, title: 'Ruby', body: 'Description' },
//     { id: 4, title: 'Python', body: 'Description' },
//   ])
   
//   const createPost = (newPost) => {
//     setPosts([...posts, newPost])
//   }

//   //Получаем пост из дочернего компонента
//   const removePost = (post) => {
//     setPosts( posts.filter ( p => p.id !== post.id ))
//   }
  
//   return (
//     <div className='App'>
//       <PostForm create={createPost}/> 
//       {/* <PostList remove={removePost} posts={posts} title='Post List 1' /> */}

//       {/* Условная отрисовка */}
//       {posts.length !== 0
//         ? <PostList
//             remove={removePost}
//             posts={posts}
//             title='Post List 1'
//         />
//         : <h1 style={{ textAlign: 'center' }}>
//             Posts not found
//         </h1>
//       }
//     </div>
//   )
// }


/***********
 ➝ Форма создания поста. Управляемые и неуправляемые компоненты
 ➝ Создание UI библиотеки. Первые компоненты. CSS модули. Пропс children
 ➝ Предотвращаем обновление страницы при submit формы
 ➝ хук useRef. Доступ к DOM элементу. Неуправляемый компонент
 ➝ React Devtools. Инструменты разработчика React
 ***********/

// import MyButton from './components/UI/button/MyButton';
// import MyInput from './components/UI/input/MyInput';

/*Функция ---> конечный результат предыдущей App, НО используем 1 useState и передаем объект в него*/

// function App() {
//   const [posts, setPosts] = useState([
//     { id: 1, title: 'Javascript', body: 'Description' },
//     { id: 2, title: 'Java', body: 'Description' },
//     { id: 3, title: 'Ruby', body: 'Description' },
//     { id: 4, title: 'Python', body: 'Description' },
//   ])

//   const [post, setPost] = useState({title: '', body: '',});


//   const addNewPost = (event) => {
//     event.preventDefault();

//     setPosts([...posts, {...post, id: Date.now()}])
//     setPost({title: '', body: '',})//обнуление состояния после добавления нового поста

//   }

//   return (
//     <div className='App'>
//       <form>
//         <MyInput
//           onChange={e => setPost({...post, title: e.target.value})}
//           value={post.title}
//           type='text'
//           placeholder='Post name'
//         />

//         <MyInput
//           onChange={e => setPost({...post, body: e.target.value})}
//           value={post.body}
//           type='text'
//           placeholder='Post description'
//         />

//         <MyButton onClick={addNewPost}>Add post</MyButton>
//       </form>
//       <PostList posts={posts} title='Post List 1' />
//     </div>
//   )
// }

// function App() {
//   const [posts, setPosts] = useState([
//     { id: 1, title: 'Javascript', body: 'Description' },
//     { id: 2, title: 'Java', body: 'Description' },
//     { id: 3, title: 'Ruby', body: 'Description' },
//     { id: 4, title: 'Python', body: 'Description' },
//   ])

//   const [title, setTitle] = useState('');
//   // const bodyInputRef = useRef();
//   const [body, setBody] = useState('');

//   const addNewPost = (event) => {
//     event.preventDefault();
//     // console.log(title)
//     // console.log(bodyInputRef.current.value)
//     // console.log(body)

//     const newPost = {
//       id: Date.now(),
//       title,
//       body,
//     }

//     console.log(newPost)

//     setPosts([...posts, newPost])
//     setTitle('')//обнуление состояния после добавления нового поста
//     setBody('')
//   }

//   return (
//     <div className='App'>
//       <form>
//         {/*Управляемый компонент*/}
//         <MyInput
//           onChange={e => setTitle(e.target.value)}
//           value={title}
//           type='text'
//           placeholder='Post name'
//         />

//         <MyInput
//           onChange={e => setBody(e.target.value)}
//           value={body}
//           type='text'
//           placeholder='Post description'
//         />





//         {/*НЕправляемый компонент*/}

//         {/* <input ref={bodyInputRef} type='text'/> */}
//         {/* <MyInput
//           ref={bodyInputRef}
//           type='text'
//           placeholder='Post description'
//         /> */}

//         <MyButton onClick={addNewPost}>Add post</MyButton>
//       </form>
//       <PostList posts={posts} title='Post List 1' />
//     </div>
//   )
// }



/**********
 ➝ Что такое хуки? useState, useEffect
 ➝ Стили. CSS. Классы
 ➝ Props. Аргументы компонента. 
 ➝ Работы со списками. Преобразование массива объектов в массив React элементов
 *********/

 
// import PostItem from './components/PostItem';
// import PostList from './components/PostList';

// function App() {
//   const [posts, usePosts] = useState([
//     {id:1, title: 'Javascript', body: 'Description'},
//     {id:2, title: 'Java', body: 'Description'},
//     {id:3, title: 'Ruby', body: 'Description'},
//     {id:4, title: 'Python', body: 'Description'},
//   ])

//   const [posts2, usePosts2] = useState([
//     {id:1, title: 'React', body: 'Description'},
//     {id:2, title: 'Angular', body: 'Description'},
//     {id:3, title: 'Vue', body: 'Description'},
//     {id:4, title: 'Lodash', body: 'Description'},
//   ])
  
//   return(
//     <div className='App'>

//       <PostList posts={posts} title='Post List 1'/>
//       <PostList posts={posts2} title='Post List 2'/>

//       {/* <h1 style={{ textAlign: 'center' }}>
//         Post list
//       </h1>
//       {posts.map(post =>
//         <PostItem post={post} key={post.id} />
//       )} */}

//       {/* <PostItem post={{id:1, title: 'Javascript', body: 'Description'}}/>
//       <PostItem post={{id:2, title: 'Java', body: 'Description'}}/>
//       <PostItem post={{id:3, title: 'Ruby', body: 'Description'}}/>
//       <PostItem post={{id:4, title: 'Python', body: 'Description'}}/>
//       <PostItem post={{id:5, title: 'C#', body: 'Description'}}/> */}

//       {/* <PostItem value={222} item={{title: 0}} number={1}/> можно прокидывать через пропсы любые данные */}
//     </div>
//   )
// }



/*********
 * Работа хука useState, классовые и функциональные комроненты Компонент App. 
      ➝ Работа с состоянием. UseState
      ➝ Управляемый инпут
      ➝ Первый функциональный компонент
      ➝ Первый классовый компонент
*********/

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
