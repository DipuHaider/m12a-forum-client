import { useLoaderData } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Announcement from "./Announcement";
import AnnouncementCard from "./AnnouncementCard";
import Banner from "./Banner";
import Post from "./Post";
import PostCard from "./PostCard";

const Home = () => {

    const loadedPosts = useLoaderData();
    const [posts, setPosts] = useState(loadedPosts);
    const [announcements, setAnnouncements] = useState([]);

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
            <div className="max-w-6xl mx-auto my-4">
                <Post></Post>
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