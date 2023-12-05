import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import Announcement from "./Announcement";
import AnnouncementCard from "./AnnouncementCard";
import Banner from "./Banner";
import Post from "./Post";
import PostCard from "./PostCard";

const Home = () => {

    const loadedPosts = useLoaderData();
    const [posts, setPosts] = useState(loadedPosts);

    return (
        <div>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto my-4">
                <Post></Post>
                <div className='grid grid-cols-1 gap-3'>
                    {
                        posts?.map((post) => (
                        <PostCard
                            key={post._id}
                            post={post}
                            posts={posts}
                            setPosts={setPosts}
                        ></PostCard>
                        ))
                    }
                </div>
            </div>
            <div className="max-w-6xl mx-auto my-4">
                <Announcement></Announcement>
                <div className='grid grid-cols-4 gap-3'>
                    <AnnouncementCard></AnnouncementCard>
                    <AnnouncementCard></AnnouncementCard>
                    <AnnouncementCard></AnnouncementCard>
                    <AnnouncementCard></AnnouncementCard>
                    <AnnouncementCard></AnnouncementCard>
                    {/* {
                        brands?.map(brand => <BrandCard
                            key={brand._id}
                            brand={brand}
                            brands={brands}
                            setBrands={setBrands}
                        ></BrandCard>)
                    } */}
                </div>
            </div>
            
            
        </div>
    );
};

export default Home;