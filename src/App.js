import { BrowserRouter, Route, Routes, Link, Redirect, Navigate } from 'react-router-dom'
import Navbar from './components/UI/navbar/Navbar';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Posts from './pages/Posts';

function App() {
      return (
            <BrowserRouter>

                  <Navbar/>

                  {/* <div className='navbar'>
                        <div className='navbar__links'>
                              <Link to='/about'>О сайте</Link>
                              <Link to='/posts'>Посты</Link>
                        </div>
                  </div> */}


                  <Routes>
                        <Route path="/about" element={<About />} />
                        <Route path="/posts" element={<Posts />} />
                        {/* <Route path="*" element={<NotFound />} /> */}
                        <Route path="*" element={<Navigate replace to='/about' />} />
                  </Routes>
            </BrowserRouter>
      )
}





/********************
 ➝ Кастомный хук useFetching(). Обработка ошибок
 ➝ Постраничный вывод. Пагинация (pagination)
 ➝ Обьяснение механизма изменения состояния
 *******************/

// import React, { useEffect, useMemo, useRef, useState } from 'react';
// import './styles/App.css';
// import PostList from './components/PostList';
// import PostForm from './components/PostForm';
// import PostFilter from './components/PostFilter';
// import MyModal from './components/UI/myModal/MyModal';
// import MyButton from './components/UI/button/MyButton';
// import { usePosts } from './hooks/usePosts';
// import PostService from './API/PostService';
// import Loader from './components/UI/Loader/Loader';
// import { useFetching } from './hooks/useFetching';
// import { getPageCount, getPagesArray } from './utils/pages';
// import Pagination from './components/UI/paginator/Pagination';


/***Чистая с рефакторингом и вынесением в компоненты (Pagination)****/

// function App() {
//       const [posts, setPosts] = useState([])
      
      //       const [filter, setFilter] = useState({ sort: '', query: '' })
      //       const [modal, setModal] = useState(false)
//       const [totalCount, setTotalCount] = useState(0) 
//       const [limit, setLimit] = useState(10) 
//       const [page, setPage] = useState(1)
//       const [totalPages, setTotalPages] = useState(0) 
//       const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
           
//       const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => { // решение проблемы перехода на страницу без useEffect
//             const response = await PostService.getAll(limit, page)
//             setPosts(response.data)
//             const totalCount = response.headers['x-total-count']
//             setTotalPages(getPageCount(totalCount, limit))
//       })

//       useEffect(() => {
//             fetchPosts(limit, page)
//       }, [page])
      
//       const createPost = (newPost) => {
//             setPosts([...posts, newPost])
//             setModal(false)
//       }
    
//       const removePost = (post) => {
//         setPosts( posts.filter ( p => p.id !== post.id ))
//       }
    
//       const changePage = (page) => {
//             setPage(page)
//             fetchPosts(limit, page)
//       }
      
//       return (
//             <div className='App'>
   
//                   <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
//                         Create Post
//                   </MyButton>               
    
//                   <MyModal visible={modal} setVisible={setModal}>
//                         <PostForm create={createPost} />
//                   </MyModal>
    
//                   <hr style={{ margin: '15px 0' }} />
    
//                   <PostFilter
//                         filter={filter}
//                         setFilter={setFilter}
//                   />

//                   {postError && 
//                         <h1>Произошла ошибка ${postError}</h1>}

//                   {isPostsLoading
//                         ? <div style={{
//                               display: 'flex',
//                               justifyContent: 'center',
//                               marginTop: '50px'
//                         }}>
//                               <Loader />
//                         </div>
//                         : <PostList
//                               remove={removePost}
//                               posts={sortedAndSearchedPosts}
//                               title='Post List 1'
//                         />
//                   }

//                   <Pagination
//                         page={page}
//                         changePage={changePage}
//                         totalPages={totalPages}
//                   />

//             </div>
//       )
// }


// function App() {
//       const [posts, setPosts] = useState([])

//       const [filter, setFilter] = useState({ sort: '', query: '' })
//       const [modal, setModal] = useState(false)
//       const [totalCount, setTotalCount] = useState(0) //Состояние общего количества постов
//       const [limit, setLimit] = useState(10) //Лимит постов
//       const [page, setPage] = useState(1) //номера страниц
//       const [totalPages, setTotalPages] = useState(0) 
//       const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
     
//       let pagesArray = getPagesArray(totalPages)
//       // let pagesArray = []
//       // for( let i = 0; i <totalPages; i++) {
//       //       pagesArray.push(i+1)
//       // }      
//       // console.log([pagesArray])
      
//       const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => { // решение проблемы перехода на страницу без useEffect
//             const response = await PostService.getAll(limit, page)
//             setPosts(response.data)
//             const totalCount = response.headers['x-total-count']
//             setTotalPages(getPageCount(totalCount, limit))
//       })

//       // const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
//       //       const response = await PostService.getAll(limit, page)
//       //       setPosts(response.data)
//       //       const totalCount = response.headers['x-total-count']
//       //       setTotalPages(getPageCount(totalCount, limit))
//       //       // const posts = await PostService.getAll()
//       //       // setPosts(posts)
//       // })

//       // console.log(totalPages)

//       useEffect(() => {
//             fetchPosts(limit, page)
//             // fetchPosts()
//       // }, [page])
//       }, [page])
      
//       const createPost = (newPost) => {
//             setPosts([...posts, newPost])
//             setModal(false)
//       }
    
//       const removePost = (post) => {
//         setPosts( posts.filter ( p => p.id !== post.id ))
//       }
    
//       const changePage = (page) => {
//             setPage(page)
//             // fetchPosts()
//             fetchPosts(limit, page)
//       }
      
//       return (
//             <div className='App'>
   
//                   <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
//                         Create Post
//                   </MyButton>               
    
//                   <MyModal visible={modal} setVisible={setModal}>
//                         <PostForm create={createPost} />
//                   </MyModal>
    
//                   <hr style={{ margin: '15px 0' }} />
    
//                   <PostFilter
//                         filter={filter}
//                         setFilter={setFilter}
//                   />

//                   {postError && 
//                         <h1>Произошла ошибка ${postError}</h1>}

//                   {isPostsLoading
//                         ? <div style={{
//                               display: 'flex',
//                               justifyContent: 'center',
//                               marginTop: '50px'
//                         }}>
//                               <Loader />
//                         </div>
//                         : <PostList
//                               remove={removePost}
//                               posts={sortedAndSearchedPosts}
//                               title='Post List 1'
//                         />
//                   }

//                   <div className='page__wrapper'>
//                         {pagesArray.map(p =>
//                               <span
//                                     onClick={() => changePage(p)}
//                                     key={p}
//                                     className={page === p ? 'page page__current' : 'page'}
//                               >
//                                     {p}
//                               </span>
//                         )}
//                   </div>

//             </div>
//       )
// }


/********************
 ➝ Декомпозиция. Кастомные хуки
 ➝ Работа с сервером. Axios
 ➝ Жизненный цикл компонента. useEffect
 ➝ API. PostService
 ➝ Индикация загрузки данных с сервера
 ➝ Компонент Loader. Анимации
 *******************/

// import axios from 'axios';

// function App() {
//       const [posts, setPosts] = useState([])
    
//       const [filter, setFilter] = useState({sort: '', query: ''})
//       const [modal, setModal] = useState(false)      
//       const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
//       const [isPostsLoading, setIsPostsLoading] = useState(false)

//       useEffect( () => {
//             fetchPosts()
//       }, [])
    
//       const createPost = (newPost) => {
//         setPosts([...posts, newPost])
//         setModal(false)
//       }

//       async function fetchPosts() {
//             setIsPostsLoading(true)

//             setTimeout( async () => {
//                   const posts = await PostService.getAll()
//                   setPosts(posts)
//                   // const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
//                   // setPosts(response.data)
//                   setIsPostsLoading(false)

//             }, 1000)
//       }

    
//       const removePost = (post) => {
//         setPosts( posts.filter ( p => p.id !== post.id ))
//       }
    
      
//       return (
//             <div className='App'>

//                   <button onClick={fetchPosts}>Get Posts</button>
    
//                   <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
//                         Create Post
//                   </MyButton>               
    
//                   <MyModal visible={modal} setVisible={setModal}>
//                         <PostForm create={createPost} />
//                   </MyModal>
    
//                   <hr style={{ margin: '15px 0' }} />
    
//                   <PostFilter
//                         filter={filter}
//                         setFilter={setFilter}
//                   />

//                   {isPostsLoading
//                         ? <div style={{
//                               display: 'flex',
//                               justifyContent: 'center',
//                               marginTop: '50px'
//                         }}>
//                               <Loader />
//                         </div>
//                         : <PostList
//                               remove={removePost}
//                               posts={sortedAndSearchedPosts}
//                               title='Post List 1'
//                         />
//                   }
//             </div>
//       )
//     }



/********************
➝ Модальное окно. Переиспользуемый UI компонент
➝ Анимации. React transition group
 *******************/

// function App() {
//   const [posts, setPosts] = useState([
//     { id: 1, title: 'Javascript', body: 'Description 4' },
//     { id: 2, title: 'Java', body: 'Description 3' },
//     { id: 3, title: 'Ruby', body: 'Description 2' },
//     { id: 4, title: 'Python', body: 'Description 1' },
//   ])

//   const [filter, setFilter] = useState({sort: '', query: ''})

//   const [modal, setModal] = useState(false)

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
//     setModal(false)
//   }

//   const removePost = (post) => {
//     setPosts( posts.filter ( p => p.id !== post.id ))
//   }

  
//   return (
//         <div className='App'>

//               <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
//                     Create Post
//               </MyButton>               

//               <MyModal visible={modal} setVisible={setModal}>
//                     <PostForm create={createPost} />
//               </MyModal>

//               <hr style={{ margin: '15px 0' }} />

//               <PostFilter
//                     filter={filter}
//                     setFilter={setFilter}
//               />

//               <PostList
//                     remove={removePost}
//                     posts={sortedAndSearchedPosts}
//                     title='Post List 1'
//               />
//         </div>
//   )
// }



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
