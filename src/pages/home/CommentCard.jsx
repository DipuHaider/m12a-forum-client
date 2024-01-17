const CommentCard = ({ comment, comments, setComments }) => {
    const { _id, comment_post_id, comment_text, comment_author_name,comment_author_email, comment_author_img } = comment;
    return (
        <div className="flex flex-row py-2 rounded w-full">
            {/* <img className="h-full w-full rounded-full object-cover object-center" src={comment_author_img} alt={comment_author_img}/> */}
            
            <tr>
                <td>
                    <p className="text-purple-400">{comment_author_name}: </p>
                </td>
                <td>
                    {comment_text}
                </td>
            </tr>
        </div>
    );
};

export default CommentCard;