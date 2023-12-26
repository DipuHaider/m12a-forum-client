import { FaBullhorn } from "react-icons/fa6";

const Announcement = () => {
    return (

        <div className="max-w-6xl mx-auto my-10" data-aos="fade-up"data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
            <div className="flex justify-center items-center text-center space-x-2">
                <h2 className="text-4xl text-theme-primary font-extralight mb-2">Announcements </h2><FaBullhorn className="text-4xl text-theme-primary"></FaBullhorn>
            </div>
        </div>
    );
};

export default Announcement;