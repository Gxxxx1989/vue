import Login from "../pages/Login";

export default {
    path: "/menu2",
    meta: {title: "菜单一"},
    children: [
        {
            path:"/Login",
            component:Login
        }
    ]

}
