import Announcement from "./Announcement";
import AnnouncementCard from "./AnnouncementCard";
import Banner from "./Banner";
import Post from "./Post";
import PostCard from "./PostCard";
// import Faq from "./Faq";
// import Feature from "./Feature";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto my-4">
                <Post></Post>
                <div className='grid grid-cols-1 gap-3'>
                    <PostCard></PostCard>
                    <PostCard></PostCard>
                    <PostCard></PostCard>
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