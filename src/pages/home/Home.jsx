import { useLoaderData } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Announcement from "./Announcement";
import AnnouncementCard from "./AnnouncementCard";
import Banner from "./Banner";
import Post from "./Post";
import PostCard from "./PostCard";

const Home = () => {

    /*  for pagination */
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    let {count} = useLoaderData();
    // console.log(count)
    const [countLoaded, setCountLoaded] = useState(count); 
    console.log("countloaded", countLoaded)

    const numberOfPages = Math.ceil(countLoaded/itemsPerPage);
    // const pages = [];
    // for (let i=0; i < numberOfPages; i++){
    //     pages.push(i);
    // }
    // console.log(pages)
    const pages = [...Array(numberOfPages).keys()];
    // console.log(pages)

    const [posts, setPosts] = useState([]);
    
    const [allPosts, setAllPosts] = useState([]);
    
    const [announcements, setAnnouncements] = useState([]);

    const allTags = Array.from(new Set(allPosts.map((allPost) => allPost.post_tag)));

    //   for tabbed content
    const [activeTab, setActiveTab] = useState("all"); // Set the default tab
    // const filteredPosts = posts.filter(
    //     (post) => post.post_tag === activeTab
    // );
    // const post_tags = Array.from(new Set(posts.map((post) => post.post_tag)));
    

    useEffect(() => {
        
        fetch(`https://m12a-forum-server.vercel.app/post?page=${currentPage}&size=${itemsPerPage}`)
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
            })
            .catch((error) => {
                console.error("Error fetching post data:", error);
            });
    }, [currentPage, itemsPerPage]);

    useEffect(() => {
        
        fetch("https://m12a-forum-server.vercel.app/announcement")
            .then((response) => response.json())
            .then((data) => {
                setAnnouncements(data);
            })
            .catch((error) => {
                console.error("Error fetching announcement data:", error);
            });
    }, []);

    useEffect(() => {
        
        fetch("https://m12a-forum-server.vercel.app/allposts")
            .then((response) => response.json())
            .then((data) => {
                setAllPosts(data);
            })
            .catch((error) => {
                console.error("Error fetching All Post data:", error);
            });
    }, []);

    const handleItemsPerPage = e =>{
        const val = parseInt(e.target.value);
        console.log(val)
        setItemsPerPage(val);
        setCurrentPage(0);
    }

    const handlePreviousPage = () => {
        if(currentPage > 0){
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if(currentPage < pages.length){
            setCurrentPage(currentPage + 1);
        }
    }

    const handleSearchByTag = (post_tag) => {
        const searchField = document.getElementById(post_tag);
        const searchText = searchField.value;
        console.log(searchText);
        loadByTag(searchText);
        setActiveTab(searchText);
    };

    const loadByTag = async (searchText) => {
        const res = await fetch(`https://m12a-forum-server.vercel.app/post?post_tag=${searchText}&page=${currentPage}&size=${itemsPerPage}`);
        const data = await res.json();
        console.log(data)
        setPosts(data);
        console.log(searchText)
        if (searchText != 'all'){
            setCurrentPage(0);
            setCountLoaded(data.length);
        } else {
            setCountLoaded(count);
        }
    }

    return (
        <div>
            <Banner></Banner>
            <div className="max-w-6xl mx-auto my-2">
                <Post></Post>
                {/* tabbed content */}
                <div className="max-w-6xl mx-auto my-10" data-aos="fade-up"data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out">
                    <div className="flex justify-center items-center text-center space-x-2">
                        <button
                                key="all"
                                value="all"
                                id="all"
                                className={`btn ${
                                activeTab === "all" ? "btn-active bg-theme-primary text-white border-blue-500 hover:border-blue-500  hover:bg-blue-200 hover:text-theme-primary" : "text-base bg-white border-theme-primary hover:bg-blue-200 text-theme-primary hover:text-theme-primary rounded shadow hover:shadow-sm py-2 px-4 border border-none hover:border-blue-500"
                                }`}
                                onClick={() => handleSearchByTag('all')}
                            >
                                All
                        </button>
                        {allTags.map((post_tag) => (
                            <button
                                key={post_tag}
                                value={post_tag}
                                id={post_tag}
                                className={`btn ${
                                activeTab === post_tag ? "btn-active bg-theme-primary text-white border-blue-500 hover:border-blue-500  hover:bg-blue-200 hover:text-theme-primary" : "text-base bg-white border-theme-primary hover:bg-blue-200 text-theme-primary hover:text-theme-primary rounded shadow hover:shadow-sm py-2 px-4 border border-none hover:border-blue-500"
                                }`}
                                onClick={() => handleSearchByTag(post_tag)}
                            >
                                {post_tag}
                            </button>
                        ))}

                        {/* {post_tags.map((post_tag) => (
                        <button
                            key={post_tag}
                            className={`btn ${
                            activeTab === post_tag ? "btn-active bg-theme-primary text-white border-blue-500 hover:border-blue-500  hover:bg-blue-200 hover:text-theme-primary" : "text-base bg-white border-theme-primary hover:bg-blue-200 text-theme-primary hover:text-theme-primary rounded shadow hover:shadow-sm py-2 px-4 border border-none hover:border-blue-500"
                            }`}
                            onClick={() => setActiveTab(post_tag)}
                        >
                            {post_tag}
                        </button>
                        ))} */}
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-3'>
                    {posts.length === 0 ? (
                        <div className="alert alert-error mt-4">
                            No Posts found.
                        </div>
                        ) : (
                        posts?.map((post) => (
                            <PostCard
                                key={post._id}
                                post={post}
                                posts={posts}
                                setPosts={setPosts}
                            ></PostCard>
                        ))
                    )}
                    {/* {
                        posts?.map((post) => (
                        <PostCard
                            key={post._id}
                            post={post}
                            posts={posts}
                            setPosts={setPosts}
                        ></PostCard>
                        ))
                    } */}
                    <div className="max-w-6xl mx-auto my-10" data-aos="fade-up"data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out">
                        <div className="flex justify-center items-center text-center space-x-2">
                            <button onClick={handlePreviousPage} className='text-base bg-white border-theme-primary hover:bg-blue-200 text-theme-primary hover:text-theme-primary rounded shadow hover:shadow-sm py-2 px-4 border border-none hover:border-blue-500'>Prev</button>
                        {
                            pages.map(page => <button onClick={() => setCurrentPage(page)}  key={page} className={`btn ${
                                currentPage === page ? "btn-active bg-theme-primary text-white border-blue-500 hover:border-blue-500  hover:bg-blue-200 hover:text-theme-primary" : "text-base bg-white border-theme-primary hover:bg-blue-200 text-theme-primary hover:text-theme-primary rounded shadow hover:shadow-sm py-2 px-4 border border-none hover:border-blue-500"
                                }`}>{page}</button>)
                        }
                            <button onClick={handleNextPage} className='text-base bg-white border-theme-primary hover:bg-blue-200 text-theme-primary hover:text-theme-primary rounded shadow hover:shadow-sm py-2 px-4 border border-none hover:border-blue-500'>Next</button>
                            <select value={itemsPerPage} onChange={handleItemsPerPage} name="" id="" className='bg-blue-300 py-2 px-4 rounded shadow'>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto my-4">
                <Announcement></Announcement>
                <div className='grid grid-cols-4 gap-3'>
                    {announcements.length === 0 ? (
                        <div className="alert alert-error mt-4">
                            No Announcements found.
                        </div>
                        ) : (
                        announcements?.map(announcement => <AnnouncementCard
                            key={announcement._id}
                            announcement={announcement}
                            announcements={announcements}
                            setAnnouncements={setAnnouncements}
                        ></AnnouncementCard>)
                    )}
                    {/* {
                        announcements?.map(announcement => <AnnouncementCard
                            key={announcement._id}
                            announcement={announcement}
                            announcements={announcements}
                            setAnnouncements={setAnnouncements}
                        ></AnnouncementCard>)
                    } */}
                </div>
            </div>
            
            
        </div>
    );
};



export default Home;


