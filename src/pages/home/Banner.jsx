import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Banner = () => {

    const [posts, setPosts] = useState([]);
    const post_tags = Array.from(new Set(posts.map((post) => post.post_tag)));

    useEffect(() => {
        
        fetch("https://m12a-forum-server.vercel.app/post")
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
            })
            .catch((error) => {
                console.error("Error fetching post data:", error);
            });
    }, []);

    //Search

    const handleSearch = () => {
        const searchField = document.getElementById('search_field');
        const searchText = searchField.value;
        console.log(searchText);
        loadPost(searchText);
    };
    const loadPost = async (searchText) => {
        const res = await fetch(`https://m12a-forum-server.vercel.app/post?post_tag=${searchText}`);
        const data = await res.json();
        //console.log(data)
        const foundedPosts = data;
        displayPosts(foundedPosts);
    }
    const displayPosts = foundedPosts => {
        // console.log(foundedPosts)
        const resultContainer = document.getElementById('result-container');
        //clear result container before adding new results
        resultContainer.textContent = '';

        foundedPosts.forEach(foundedPost => {
            // console.log(foundedPost)
            const resultCard = document.createElement('div');
            resultCard.classList = `flex flex-row overflow-x-auto`;
            resultCard.innerHTML = `
            <tbody>
                <tr>
                    <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-4 h-4">
                                    <img src="${foundedPost.author_image}" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">${foundedPost.author_name}</div>
                                <div className="text-sm opacity-50">${foundedPost.author_email}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                    ${foundedPost.post_title}
                            <br/>
                        <span className="badge badge-ghost badge-sm">${foundedPost.post_time}</span>
                    </td>
                    <th>;
                        
                        <a href="/post/${foundedPost._id}" class="btn btn-ghost btn-xs">Details</a>
                    </th>
                </tr>
                </tbody>
            </table>
            </div>
            `;
            resultContainer.appendChild(resultCard);
        });
    }

    return (

        <div className="hero min-h-[600px] shadow-theme-primary shadow-inner bg-slate-50" style={{backgroundImage: 'url(https://i.ibb.co/0c89bYH/banner-forum.jpg)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content flex flex-col">
                <div className="max-w-md">
                    <div className="pt-2 relative mx-auto text-gray-600">
                        {/* <input className="border-2 border-blue-500 bg-slate-800 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                        type="search" name="search" placeholder="Search" value={post_tags}></input> */}
                        <select id="search_field" name="search" className="border-2 border-blue-500 bg-slate-800 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" >        
                        {
                            post_tags?.map(post_tag => (
                                <option
                                key={post_tag}
                                value={post_tag}
                                >
                                {post_tag}
                                </option>
                            ))
                            }
                        </select>
                        
                        <button onClick={handleSearch} type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                            <svg fill="#005dc9" className="h-4 w-4" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488.4 488.4" xmlSpace="preserve">
                                <g>
                                    <g>
                                        <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6
                                            s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2
                                            S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7
                                            S381.9,104.65,381.9,203.25z"/>
                                    </g>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
                <div id="result-container" className="grid grid-cols-1 justify-center items-center text-center space-x-2">
                    
                </div>
                {/* <div className="flex justify-center items-center text-center space-x-2">
                    {post_tags.map((post_tag) => (
                    <button
                        key={post_tag}
                        className="text-base bg-white border-theme-primary hover:bg-blue-200 text-theme-primary hover:text-theme-primary rounded shadow hover:shadow-sm py-2 px-4 border border-none hover:border-blue-500">
                        {post_tag}
                    </button>
                    ))}
                </div> */}
            </div>
        </div>
    );
};



export default Banner;

