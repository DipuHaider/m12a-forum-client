import { useLoaderData } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Announcement from "./Announcement";
import AnnouncementCard from "./AnnouncementCard";
import Banner from "./Banner";
import Post from "./Post";
import PostCard from "./PostCard";
import ReactPaginate from 'react-paginate';

const Home = () => {

    const loadedPosts = useLoaderData();
    const [posts, setPosts] = useState(loadedPosts);
    const [announcements, setAnnouncements] = useState([]);

    const [activeTab, setActiveTab] = useState("CSS"); // Set the default tab

    const filteredPosts = posts.filter(
        (post) => post.post_tag === activeTab
    );
    const post_tags = Array.from(new Set(posts.map((post) => post.post_tag)));

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

    return (
        <div>
            <Banner></Banner>
            <div className="max-w-6xl mx-auto my-2">
                <Post></Post>
                <div className="max-w-6xl mx-auto my-10" data-aos="fade-up"data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out">
                    <div className="flex justify-center items-center text-center space-x-2">
                        {post_tags.map((post_tag) => (
                        <button
                            key={post_tag}
                            className={`btn ${
                            activeTab === post_tag ? "btn-active bg-theme-primary text-white border-blue-500 hover:border-blue-500  hover:bg-blue-200 hover:text-theme-primary" : "text-base bg-white border-theme-primary hover:bg-blue-200 text-theme-primary hover:text-theme-primary rounded shadow hover:shadow-sm py-2 px-4 border border-none hover:border-blue-500"
                            }`}
                            onClick={() => setActiveTab(post_tag)}
                        >
                            {post_tag}
                        </button>
                        ))}
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-3'>
                    {filteredPosts.length === 0 ? (
                        <div className="alert alert-error mt-4">
                            No Posts found.
                        </div>
                        ) : (
                        filteredPosts?.map((post) => (
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


