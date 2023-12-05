import { NavLink } from "react-router-dom";

const PostCard = ({ post, posts, setPosts }) => {

    // const post = useLoaderData();
    const { _id, author_image, author_name, author_email, post_title, post_tag, post_desc, upvote, downvote } = post;

    return (
        <>
            <NavLink to={`post/${_id}`}>
                <div className="card card-side bg-base-100">
                    <div className='flex flex-1 items-center justify-center'> 
                        <div className="rounded-xl border p-5 shadow-md w-11/12 bg-white">
                        <div className="flex w-full items-center justify-between border-b pb-3">
                        <div className="flex items-center space-x-3">
                            <img src={author_image} alt={author_image} className="h-8 w-8 rounded-full" />
                            <div className="space-y-1">
                                <div className="text-lg font-bold text-slate-700">{author_name}</div> 
                                <h4 className="text-sm font-bold text-slate-500">{author_email}</h4> 
                            </div>
                            
                        </div>
                        <div className="flex items-center space-x-8">
                            <button className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold text-theme-primary">{post_tag}</button>
                            {/* <div className="text-xs text-neutral-500">2 hours ago</div> */}
                        </div>
                        </div>

                        <div className="mt-4 mb-6">
                        <div className="mb-3 text-xl font-bold text-theme-primary">{post_title}</div>
                        <div className="text-sm text-neutral-600">{post_desc}</div>
                        </div>

                        <div>
                        <div className="flex items-center justify-between text-slate-500">
                            <div className="flex space-x-4 md:space-x-8">
                            <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-1.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                </svg>
                                <span>{upvote}</span>
                            </div>
                            <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-1.5 h-5 w-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                </svg>
                                <span>{downvote}</span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </NavLink>
        </>
            
    );
};

export default PostCard;