import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/home/Home";
import Login from "../auth/Login/Login";
import Register from "../auth/Register/Register";
// import UserDashboard from "../layouts/UserDashboard";
// import AdminDashboard from "../layouts/AdminDashboard";
import Membership from "../pages/membership/Membership";
import UserDashboard from "../layouts/UserDashboard";
import MyProfile from "../pages/userdashboard/MyProfile";
import AdminDashboard from "../layouts/AdminDashboard";
import AdminProfile from "../pages/admindashboard/AdminProfile";
import MyPosts from "../pages/userdashboard/MyPosts";
import AddPosts from "../pages/userdashboard/AddPosts";
import ManageUsers from "../pages/admindashboard/ManageUsers";
import ReportedComments from "../pages/admindashboard/ReportedComments";
import MakeAnnouncement from "../pages/admindashboard/MakeAnnouncement";
import SinglePost from "../pages/home/SinglePost";
// import MyProfile from "../pages/userdashboard/MyProfile";
// import CreateAssignment from "../pages/assignment/CreateAssignment";
// import UpdateAssignment from "../pages/assignment/UpdateAssignment";
// import DetailAssignment from "../pages/assignment/DetailAssignment";
// import PrivateRoutes from "./PrivateRoutes";
// import MyAssignment from "../pages/assignment/MyAssignment";
// import SubmittedAssignment from "../pages/assignment/SubmittedAssignment";
// import AllAssignment from "../pages/assignment/AllAssignment";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://m12a-forum-server.vercel.app/post'),
            },
            {
                path: '/membership',
                element: <Membership></Membership>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: "post/:id",
                element: <SinglePost></SinglePost>,
                loader: ({params}) => fetch(`https://m12a-forum-server.vercel.app/post/${params.id}`),
            },
            // {
            //     path: '/userdashboard',
            //     element: <UserDashboard></UserDashboard>,
            // },
            // {
            //     path: '/admindashboard',
            //     element: <AdminDashboard></AdminDashboard>,
            // },
            // {
            //     path: '/allassignment',
            //     element: <AllAssignment></AllAssignment>,
            //     loader: () => fetch('https://m11a-group-study-server.vercel.app/assignment')
            // },
            // {
            //     path: "createassignment",
            //     element: <PrivateRoutes><CreateAssignment></CreateAssignment></PrivateRoutes>,
            // },
            // {
            //     path: "updateassignment/:id",
            //     element: <PrivateRoutes><UpdateAssignment></UpdateAssignment></PrivateRoutes>,
            //     loader: ({params}) => fetch(`https://m11a-group-study-server.vercel.app/assignment/${params.id}`)
            // },
            // {
            //     path: "updatetaken/:id",
            //     // element: <PrivateRoutes><UpdateAssignment></UpdateAssignment></PrivateRoutes>,
            //     loader: ({params}) => fetch(`https://m11a-group-study-server.vercel.app/taken/${params.id}`)
            // },
            // {
            //     path: "assignment/:id",
            //     element: <PrivateRoutes><DetailAssignment></DetailAssignment></PrivateRoutes>,
            //     loader: ({params}) => fetch(`https://m11a-group-study-server.vercel.app/assignment/${params.id}`)
            // },
            // {
            //     path: '/myassignment',
            //     element: <PrivateRoutes><MyAssignment></MyAssignment></PrivateRoutes>,
            //     loader: () => fetch('https://m11a-group-study-server.vercel.app/assignment'),
            // },
            // {
            //     path: '/submittedassignment',
            //     element: <PrivateRoutes><SubmittedAssignment></SubmittedAssignment></PrivateRoutes>,
            //     loader: () => fetch('https://m11a-group-study-server.vercel.app/taken'),
            // },
        ]
    },
    {
        path: 'userdashboard',
        element: <UserDashboard></UserDashboard>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: 'myprofile',
                element: <MyProfile></MyProfile>,
            },
            {
                path: 'myposts',
                element: <MyPosts></MyPosts>,
                loader: () => fetch('https://m12a-forum-server.vercel.app/post'),
            },
            {
                path: 'addposts',
                element: <AddPosts></AddPosts>,
            },
        ]
    },
    {
        path: 'admindashboard',
        element: <AdminDashboard></AdminDashboard>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: 'adminprofile',
                element: <AdminProfile></AdminProfile>,
            },
            {
                path: 'manageusers',
                element: <ManageUsers></ManageUsers>,
            },
            {
                path: 'reportedcomments',
                element: <ReportedComments></ReportedComments>,
            },
            {
                path: 'makeannouncements',
                element: <MakeAnnouncement></MakeAnnouncement>,
            },
        ]
    },
]);

export default router;