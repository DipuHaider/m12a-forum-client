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
                <div>
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
                </div>
            </div>
        </div>
    );
};

export default MyPosts;