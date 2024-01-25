import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { formatDate } from "../../utilities/localstorage";
import { useContext } from "react";
import Swal from 'sweetalert2';
import { AuthContext } from "../../providers/AuthProvider";
import CommentCard from "./CommentCard";
import {
    FacebookShareButton,
    InstapaperShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    FacebookIcon,
    InstapaperIcon,
    LinkedinIcon,
    TwitterIcon,
    WhatsappIcon,
  } from 'react-share';
  

const SinglePost = () => {

    const { user } = useContext(AuthContext);
    const post = useLoaderData();
    const { _id, author_image, author_name, author_email, post_title, post_tag, post_desc, upvote, downvote, post_time } = post;
    const [currentUpVote, setCurrentUpVote] = useState(upvote);
    const [currentDownVote, setCurrentDownVote] = useState(downvote);
    const [comments, setComments] = useState([]);
    const filteredComments = comments.filter(
        (comment) => comment.comment_post_id === _id
    );
    console.log(filteredComments)
    const shareUrl = `https://profound-liger-f9751d.netlify.app/post/${_id}`;
    
    const handleUpVote = () => {
        // const updatedUpVote = upvote + 1;
        const updatedUpVote = currentUpVote + 1;

        const updatedVotes = { upvote: updatedUpVote };

        fetch(`https://m12a-forum-server.vercel.app/post/upvote/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify( updatedVotes )
        })
            .then(res => res.json())
            .then(data => {
                console.log("res.json data ", data);
                if (data.modifiedCount > 0) {
                    // If the upvote is successfully updated on the server, show a success message
                    Swal.fire({
                        title: 'Success!',
                        text: 'Upvoted Successfully, Also Buttons are disabled',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    // Update the local state with the new upvote count
                    setCurrentUpVote(updatedUpVote);
                    // Disable the button by adding a 'Disable' class
                    const upVoteButton = document.getElementById('handleUpVote');
                    upVoteButton.classList.add('btn-disabled');
                    const downVoteButton = document.getElementById('handleDownVote');
                    downVoteButton.classList.add('btn-disabled');
                } else {

                    Swal.fire({
                        title: 'Sorry!',
                        text: 'Already Voted, Also Buttons are disabled',
                        icon: 'warning',
                        confirmButtonText: 'Exit'
                    })
                }
            });
    }

    const handleDownVote = () => {
        // const updatedDownVote = downvote + 1;
        const updatedDownVote = currentDownVote + 1;

        const updatedVotes = { downvote: updatedDownVote };

        fetch(`https://m12a-forum-server.vercel.app/post/downvote/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify( updatedVotes )
        })
            .then(res => res.json())
            .then(data => {
                console.log("res.json data ", data);
                if (data.modifiedCount > 0) {
                    // If the downvote is successfully updated on the server, show a success message
                    Swal.fire({
                        title: 'Success!',
                        text: 'Downvoted Successfully, Also Buttons are disabled',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    // Update the local state with the new downvote count
                    setCurrentDownVote(updatedDownVote);

                    // Disable the button by adding a 'Disable' class
                    const upVoteButton = document.getElementById('handleUpVote');
                    upVoteButton.classList.add('btn-disabled');
                    const downVoteButton = document.getElementById('handleDownVote');
                    downVoteButton.classList.add('btn-disabled');
                } else {
                    
                    Swal.fire({
                        title: 'Sorry!',
                        text: 'Already Voted, Also Buttons are disabled',
                        icon: 'warning',
                        confirmButtonText: 'Exit'
                    })
                }
            });
    }

    const handleCommentInput = () => {
        const commentInput = document.getElementById('commentInput');
        commentInput.classList.remove('hidden');
        const commentSubmitButton = document.getElementById('commentSubmitButton');
        commentSubmitButton.classList.remove('hidden');
    }

    const handleComment = event => {
        event.preventDefault();

        const form = event.target;

        const comment_post_id = _id;
        const comment_text = form.comment_text.value;
        const comment_author_name = user.displayName;
        const comment_author_email = user.email;
        const comment_author_img = user.photo_URL;
        const comment_feedback = '';
        const comment_report = '';


        const newComment = { comment_post_id, comment_text, comment_author_name, comment_author_email, comment_author_img, comment_feedback, comment_report }

        console.log(newComment);

        // send data to the server
        fetch('https://m12a-forum-server.vercel.app/comment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newComment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'You commented successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                        })
                form.reset();
                }
            })

        const commentInput = document.getElementById('commentInput');
        commentInput.classList.add('hidden');
        const commentSubmitButton = document.getElementById('commentSubmitButton');
        commentSubmitButton.classList.add('hidden');
        const commentButton = document.getElementById('commentButton');
        commentButton.classList.add('btn-disabled');
        commentButton.innerText = 'Commented';

    }

    useEffect(() => {
        
        fetch("https://m12a-forum-server.vercel.app/comment")
            .then((response) => response.json())
            .then((data) => {
                setComments(data);
            })
            .catch((error) => {
                console.error("Error fetching comment data:", error);
            });
    }, []);

    return (
        
        <div className="max-w-6xl mx-auto my-4 min-h-[500px]">
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
                                <div className="text-xs text-neutral-500">Posted on: {post_time}</div>
                                <button className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold text-theme-primary">{post_tag}</button>
                                {/* <div className="text-xs text-neutral-500">2 hours ago</div> */}
                                
                            </div>
                        </div>

                        <div className="mt-4 mb-6">
                            <div className="mb-3 text-xl font-bold text-theme-primary">{post_title}</div>
                            <div className="text-sm text-neutral-600">{post_desc}</div>
                        </div>

                        <div>
                        <div className="flex flex-col items-start justify-between text-slate-500">
                            <div className="flex space-x-4 md:space-x-8">
                                <button id="handleUpVote" onClick={handleUpVote} className="flex cursor-pointer items-center transition hover:text-slate-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-1.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                    </svg>
                                    <span>{currentUpVote}</span>
                                </button>
                                <button id="handleDownVote" onClick={handleDownVote} className="flex cursor-pointer items-center transition hover:text-slate-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-1.5 h-5 w-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                    </svg>
                                    <span>{currentDownVote}</span>
                                </button>
                                <div className="flex cursor-pointer items-center transition hover:text-slate-600 space-x-2">
                                    <button id="commentButton" onClick={handleCommentInput} className="rounded-2xl border bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-500" >Comment</button>
                                    <form onSubmit={handleComment} className="flex w-full space-x-2">
                                        <input
                                            id="commentInput"
                                            name="comment_text"
                                            type="text"
                                            placeholder="Comments here"
                                            className="input input-bordered input-sm w-full sm:w-96 border-purple-500 border-2 hidden"
                                        />
                                        <input
                                            type="submit"
                                            value="Add Comment"
                                            id="commentSubmitButton"
                                            className="rounded-lg bg-transparent px-1 py-1 text-sm font-normal border-purple-500 border-2 text-purple-500 hover:bg-purple-600 hover:text-white hidden"
                                        />
                                    </form>
                                </div>
                                <div className="flex cursor-pointer transition hover:text-slate-600 space-x-2">
                                    {/* <button className="rounded-2xl border bg-blue-100 px-3 py-1 text-sm font-semibold text-theme-primary" >Share</button> */}
                                        <FacebookShareButton
                                            url={shareUrl}
                                            quote={'Title or jo bhi aapko likhna ho'}
                                            hashtag={'#portfolio...'}
                                            >
                                            <FacebookIcon size={32} round={true} />
                                        </FacebookShareButton>

                                        <InstapaperShareButton
                                            url={shareUrl}
                                            quote={'Title or jo bhi aapko likhna ho'}
                                            hashtag={'#portfolio...'}
                                            >
                                            <InstapaperIcon size={32} round={true} />
                                        </InstapaperShareButton>
                                        <LinkedinShareButton
                                            url={shareUrl}
                                            quote={'Title or jo bhi aapko likhna ho'}
                                            hashtag={'#portfolio...'}
                                            >
                                            <LinkedinIcon size={32} round={true} />
                                        </LinkedinShareButton>
                                        <TwitterShareButton
                                            url={shareUrl}
                                            quote={'Title or jo bhi aapko likhna ho'}
                                            hashtag={'#portfolio...'}
                                            >
                                            <TwitterIcon size={32} round={true} />
                                        </TwitterShareButton>
                                        <WhatsappShareButton
                                            url={shareUrl}
                                            quote={'Title or jo bhi aapko likhna ho'}
                                            hashtag={'#portfolio...'}
                                            >
                                            <WhatsappIcon size={32} round={true} />
                                        </WhatsappShareButton>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 justify-start items-start text-left space-x-4 md:space-x-8 border border-1 border-purple-200 my-4 p-4 rounded-lg">
                                <div className="mx-4">
                                    <h4>All Comments: </h4>
                                </div>
                                {filteredComments.length === 0 ? (
                                    <div className="mx-4">
                                        <p className="text-purple-400">No Comments Yet.</p>
                                    </div>
                                    ) : (
                                        filteredComments?.map((comment) => (
                                        <CommentCard
                                            key={comment._id}
                                            comment={comment}
                                            comments={comments}
                                            setComments={setComments}
                                        ></CommentCard>
                                    ))
                                )}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default SinglePost;