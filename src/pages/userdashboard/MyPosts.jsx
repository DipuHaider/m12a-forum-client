import { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import MyPostCard from './MyPostCard';

const MyPosts = () => {

    const loadedPosts = useLoaderData();
    const [posts, setPosts] = useState(loadedPosts);

    const { user } = useContext(AuthContext);

    const filteredPosts = posts.filter(
        (post) => post.author_email === user.email
      );

    return (
        <div className="bg-cyan-50 flex-grow py-12 px-10">
            <div className="flex mt-10 justify-center">
                {/* <div>
                    <table className="min-w-full table-auto">
                        <thead className="justify-between">
                        <tr className="bg-cyan-600">
                            
                            <th className="px-16 py-2">
                            <span className="text-cyan-50">Post Title</span>
                            </th>
                            <th className="px-16 py-2">
                            <span className="text-cyan-50">number of Votes</span>
                            </th>
                            <th className="px-16 py-2">
                            <span className="text-cyan-50">Comment</span>
                            </th>
                            <th className="px-16 py-2">
                            <span className="text-cyan-50">Delete</span>
                            </th>

                        </tr>
                        </thead>
                        <tbody className="bg-gray-200">
                        {filteredPosts.map((post) => (
                            <MyPostCard
                                key={post._id}
                                post={post}
                                posts={posts}
                                setPosts={setPosts}
                            ></MyPostCard>
                            ))}
                        </tbody>
                    </table>
                </div> */}
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Author</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Post Title</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Number of Votes</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Comment</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    
                    {filteredPosts.map((post) => (
                            <MyPostCard
                                key={post._id}
                                post={post}
                                posts={posts}
                                setPosts={setPosts}
                            ></MyPostCard>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPosts;