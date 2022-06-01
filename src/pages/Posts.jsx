import React, { useEffect, useMemo, useRef, useState } from 'react';
import '../styles/App.css';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/myModal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount, getPagesArray } from '../utils/pages';
import Pagination from '../components/UI/paginator/Pagination';
import { useObserver } from '../hooks/useObserver';
import MySelect from '../components/UI/select/MySelect';


function Posts() {
      const [posts, setPosts] = useState([])

      const [filter, setFilter] = useState({ sort: '', query: '' })
      const [modal, setModal] = useState(false)
      const [totalCount, setTotalCount] = useState(0) 
      const [limit, setLimit] = useState(10) 
      const [page, setPage] = useState(1)
      const [totalPages, setTotalPages] = useState(0) 
      const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
      const lastElement = useRef();
      const observer = useRef();
      // console.log(lastElement)
           
      const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => { // решение проблемы перехода на страницу без useEffect
            const response = await PostService.getAll(limit, page)
            setPosts([...posts, ...response.data])
            const totalCount = response.headers['x-total-count']
            setTotalPages(getPageCount(totalCount, limit))
      })

      useObserver(lastElement, page < totalPages, isPostsLoading, () => {
            setPage(page + 1 )
      })

      // тотже хук, что выше, но вынесли в hooks
      // useEffect(() => {
      //       if(isPostsLoading) return;
      //       if(observer.current) observer.current.disconnect();

      //       var callback = function( entries, observer ) {
      //             if(entries[0].isIntersecting && page < totalPages) {
      //                   // console.log('DIV IN CURRENT ZONE')
      //                   setPage(page + 1)
      //                   console.log(page)
      //             }
      //       }
      //       observer.current = new IntersectionObserver(callback)
      //       observer.current.observe(lastElement.current)
      // }, [isPostsLoading])

      useEffect(() => {
            fetchPosts(limit, page)
      }, [page, limit])
      
      // useEffect(() => {
      //       fetchPosts(limit, page)
      // }, [page])
      
      const createPost = (newPost) => {
            setPosts([...posts, newPost])
            setModal(false)
      }
    
      const removePost = (post) => {
        setPosts( posts.filter ( p => p.id !== post.id ))
      }
    
      const changePage = (page) => {
            setPage(page)
            // fetchPosts(limit, page)
      }
      
      return (
            <div className='App'>
   
                  <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
                        Create Post
                  </MyButton>               
    
                  <MyModal visible={modal} setVisible={setModal}>
                        <PostForm create={createPost} />
                  </MyModal>
    
                  <hr style={{ margin: '15px 0' }} />
    
                  <PostFilter
                        filter={filter}
                        setFilter={setFilter}
                  />

                  <MySelect
                        value={limit}
                        onChange={value => setLimit(value)}
                        defaultValue='Amount of elements on the page'
                        options={[
                              {value: 5, name: '5'},
                              {value: 10, name: '10'},
                              {value: 25, name: '25'},
                              {value: -1, name: 'Show all'},
                        ]}
                  />

                  {postError &&
                        <h1>Произошла ошибка ${postError}</h1>}

                  <PostList
                        remove={removePost}
                        posts={sortedAndSearchedPosts}
                        title='Post List 1'
                  />

                  <div ref={lastElement} style={{height:20, background: 'red'}}/>

                  {isPostsLoading &&
                        <div style={{
                              display: 'flex',
                              justifyContent: 'center',
                              marginTop: '50px'
                        }}>
                              <Loader />
                        </div>
                  }      
                  

                  <Pagination
                        page={page}
                        changePage={changePage}
                        totalPages={totalPages}
                  />

            </div>
      )
}



/*******До Бесконечная лента 2.47*********/
// function Posts() {
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

export default Posts