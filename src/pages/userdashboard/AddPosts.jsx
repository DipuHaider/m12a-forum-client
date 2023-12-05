import Swal from 'sweetalert2'

const AddPosts = () => {

    const handleAddPost = event => {
        event.preventDefault();

        const form = event.target;

        const author_image = form.author_image.value;
        const author_name = form.author_name.value;
        const author_email = form.author_email.value;
        const post_title = form.post_title.value;
        const post_tag = form.post_tag.value;
        const post_desc = form.post_desc.value;
        const upvote = 0;
        const downvote = 0;
        const post_time = new Date();

        const newPost = { author_image, author_name, author_email, post_title, post_tag, post_desc, upvote, downvote, post_time }

        console.log(newPost);

        // send data to the server
        fetch('http://localhost:5000/post', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPost)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Post Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                      form.reset();
                }
            })
    }

    return (
        <>
            <div className="bg-cyan-50 flex-grow py-12 px-10">
                <h2 className="text-xl font-bold text-slate-900">Add Posts</h2>
                <div>
                    <form onSubmit={handleAddPost} className="mt-8">
                        {/* form row */}
                        <div className="md:flex mb-2">
                            <div className="form-control md:w-1/2 ml-4">
                                <span className='py-4'>Author Image</span>
                                <label className="input-group">
                                    <input type="text" name="author_image" placeholder="Author Image URL" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/* form row */}
                        <div className="md:flex md:w-1/2 mb-2">
                            <div className="form-control md:w-1/2 ml-4">
                                <span className='py-4'>Author Name</span>
                                <label className="input-group">
                                    <input type="text" name="author_name" placeholder="Author name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <span className='py-4'>Author Email</span>
                                <label className="input-group">
                                    <input type="email" name="author_email" placeholder="Author email" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/* form row */}
                        <div className="md:flex md:w-1/2 mb-2">
                            <div className="form-control md:w-1/2 ml-4">
                                <span className='py-4'>Post Title</span>
                                <label className="input-group">
                                    <input type="text" name="post_title" placeholder="Post Title" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <span className='py-4'>Post Tag</span>
                                <select name="post_tag" className="select select-bordered w-full max-w-xs">
                                    <option>javascript</option>
                                    <option>php</option>
                                    <option>react</option>
                                    <option>nodejs</option>
                                    <option>css</option>
                                    <option>mongodb</option>
                                </select>
                            </div>
                        </div>
                        {/* form row */}
                        <div className="md:flex mb-2">
                            <div className="form-control md:w-1/2 ml-4">
                                <span className='py-4'>Post Description</span>
                                <label className="input-group">
                                <textarea name="post_desc" rows="3" className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-base placeholder:text-gray-400  sm:text-sm sm:leading-6" placeholder="Post Description"></textarea>
                                </label>
                            </div>
                        </div>
                        
                        <div className="md:flex md:w-1/2 my-8">
                            <input type="submit" value="Add Post" className="btn btn-block bg-cyan-600 text-white hover:bg-white hover:text-cyan-600 hover:border-cyan-600" />
                        </div>
                    </form>
                </div>
            </div>
            
        </>
        
    );
};

export default AddPosts;