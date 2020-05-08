export default [
    {
        title: '首页', // 菜单标题名称
        key: '/admin/home', // 对应的path
        public: true,//该权限开放给所有用户
    },
    {
        title: '商品',
        key: '/admin/products',
        children: [ // 子菜单列表
            {
                title: '分类管理',
                key: '/admin/products/category',
            },
            {
                title: '商品管理',
                key: '/admin/products/product',
            }
        ]
    },

    {
        title: '用户管理',
        key: '/admin/user',
    },
    {
        title: '角色管理',
        key: '/admin/role',

    },

    {
        title: '图形图表',
        key: '/admin/charts',
        children: [
            {
                title: '柱形图',
                key: '/admin/charts/bar',
            },
            {
                title: '折线图',
                key: '/admin/charts/line',
            },
            {
                title: '饼图',
                key: '/admin/charts/pie',
            },
        ]
    }
]