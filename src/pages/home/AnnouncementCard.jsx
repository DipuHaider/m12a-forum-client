const AnnouncementCard = () => {
    return (
        <article className="container bg-white shadow-2xl rounded-2xl p-5">
            <h1 className="font-bold text-yellow-500">Mon blog en ligne</h1>
            <p className="font-light text-gray-500 hover:text-slate-900">Aujoud'hui dans mon blog nous allons parler de fruits et légumes.....</p>
            <h6 className="text-sm text-gray-300 mb-5">Publiée le 08/10/2022</h6>
            <a href="#" className="rounded-lg py-2 px-4 text-center text-white bg-yellow-400 hover:bg-yellow-500">En savoir plus</a>
        </article>
    );
};

export default AnnouncementCard;