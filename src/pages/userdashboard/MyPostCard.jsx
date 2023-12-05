const MyPostCard = ({ post, posts, setPosts }) => {

    const { author_image, author_name, author_email, post_title, post_tag, post_desc, upvote, downvote } = post;

    return (
        <>
            <tr className="bg-white border-4 border-gray-200 text-center">
                <td>
                    <span className="text-center ml-2 font-semibold">{post_title}</span>
                </td>
                <td className="px-16 py-2">samsung</td>
                <td className="px-16 py-2">
                    <span><button>comment</button></span>
                </td>
                <td className="px-16 py-2">
                    <span><button>Delete</button></span>
                </td>
            </tr>
        </>
    );
};

export default MyPostCard;