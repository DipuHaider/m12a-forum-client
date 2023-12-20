import Swal from 'sweetalert2'

const MakeAnnouncement = () => {

    const handleAddAnnouncement = event => {
        event.preventDefault();

        const form = event.target;

        const author_image = form.author_image.value;
        const author_name = form.author_name.value;
        const announcement_title = form.announcement_title.value;
        const announcement_desc = form.announcement_desc.value;
        const announcement_time = new Date();

        const newAnnouncement = { author_image, author_name, announcement_title, announcement_desc, announcement_time }

        console.log(newAnnouncement);

        // send data to the server
        fetch('https://m12a-forum-server.vercel.app/announcement', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAnnouncement)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Announcement Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                      form.reset();
                }
            })
    }

    return (
        <>
            <div className="bg-red-50 flex-grow py-12 px-10">
                <h2 className="text-xl font-bold text-slate-900">Add Announcements</h2>
                <div>
                    <form onSubmit={handleAddAnnouncement} className="mt-8">
                        {/* form row */}
                        <div className="md:flex mb-2">
                            <div className="form-control md:w-1/2 ml-4">
                                <span className='py-4'>Author Image</span>
                                <label className="input-group">
                                    <input type="text" name="author_image" placeholder="Author Image URL" className="input input-bordered w-full" required/>
                                </label>
                            </div>
                        </div>
                        {/* form row */}
                        <div className="md:flex mb-2">
                            <div className="form-control md:w-1/2 ml-4">
                                <span className='py-4'>Author Name</span>
                                <label className="input-group">
                                    <input type="text" name="author_name" placeholder="Author name" className="input input-bordered w-full" required/>
                                </label>
                            </div>
                        </div>
                        {/* form row */}
                        <div className="md:flex mb-2">
                            <div className="form-control md:w-1/2 ml-4">
                                <span className='py-4'>Announcement Title</span>
                                <label className="input-group">
                                    <input type="text" name="announcement_title" placeholder="Announcement Title" className="input input-bordered w-full" required/>
                                </label>
                            </div>
                        </div>
                        {/* form row */}
                        <div className="md:flex mb-2">
                            <div className="form-control md:w-1/2 ml-4">
                                <span className='py-4'>Announcement Description</span>
                                <label className="input-group">
                                <textarea name="announcement_desc" rows="3" className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-base placeholder:text-gray-400  sm:text-sm sm:leading-6" placeholder="Announcement Description" required></textarea>
                                </label>
                            </div>
                        </div>
                        
                        <div className="md:flex md:w-1/2 my-8">
                            <input type="submit" value="Add Announcement" className="btn btn-block bg-rose-600 text-white hover:bg-white hover:text-rose-600 hover:border-rose-600" />
                        </div>
                    </form>
                </div>
            </div>
            
        </>
    );
};

export default MakeAnnouncement;