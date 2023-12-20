const AnnouncementCard = ({ announcement, announcements, setAnnouncements }) => {

    const { _id, author_image, author_name, announcement_title, announcement_desc, announcement_time } = announcement;

    return (
        <article className="container flex flex-col bg-white shadow-lg rounded-2xl p-5">
            <div class="flex-1">
                <div className="flex items-center py-3 space-x-2">
                    <img src={author_image} alt={author_image} className="h-8 w-8 rounded-full" />
                    <h6>{author_name}</h6>
                </div>
                <h1 className="font-bold text-rose-500 py-1">{announcement_title}</h1>
                <p className="font-light text-gray-500 hover:text-slate-900 py-2">{announcement_desc}</p>
            </div>
            {/* <h6 className="text-sm text-gray-300 mb-5">{announcement_time}</h6> */}
            <h3 className="rounded-lg py-2 font-light text-xs text-rose-400 space-y-2 ">Announced: {announcement_time}</h3>
        </article>
    );
};

export default AnnouncementCard;