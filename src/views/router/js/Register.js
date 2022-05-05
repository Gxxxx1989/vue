import Register from "../pages/Register";

export default {
    path: "/menu3",
    meta: {title: "菜单一"},
    children: [
        {
            path:"/Register",
            component:Register
        }
    ]

}
