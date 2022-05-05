import Home from "../pages/Home";

export default {
    path: "/",
    meta: {title: "菜单一"},
    children: [
        {
            path:"Home",
            component:Home
        }
    ]

}
