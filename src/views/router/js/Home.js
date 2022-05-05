
export default {
    path:"",
    meta: {title: "菜单一"},
    children: [
        {
            path: "/Home",
            component: {
                default:()=>import("../pages/Home")
            }
        }
    ]

}
