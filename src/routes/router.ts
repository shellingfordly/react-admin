import Home from '@/pages/home/Home'
import About from '@/pages/about/About'
import Form from '@/pages/form/Form'
import Table from '@/pages/table/Table'
import GroupTable from '@/pages/table/GroupTable'
import NestTable from '@/pages/table/NestTable'
import Chart from '@/pages/chart/Chart'
import BarChart from '@/pages/chart/BarChart'
import ScatterChart from '@/pages/chart/ScatterChart'
import PieChart from '@/pages/chart/PieChart'
import LineChart from '@/pages/chart/LineChart'
import DiyForm from '@/pages/form/diy-form/DiyForm'

export interface RoutesItem {
  path: string
  name: string
  component: any
  meta: {
    title: string
    icon: string
  }
  children?: RoutesItem[]
}

export const routesModdul: RoutesItem[] = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
      icon: 'home'
    },
  },
  {
    path: '/form',
    name: 'Form',
    component: Form,
    meta: {
      title: '表单',
      icon: 'form'
    },
    children: [
      {
        path: '/form/diy',
        name: 'DiyForm',
        component: DiyForm,
        meta: {
          title: '自定义表单',
          icon: 'form'
        },
      },
      {
        path: '/form/data',
        name: 'DataForm',
        component: Form,
        meta: {
          title: '普通表单',
          icon: 'form'
        },
      }
    ]
  },
  {
    path: '/chart',
    name: 'Chart',
    component: Chart,
    meta: {
      title: '图表',
      icon: 'chart'
    },
    children: [
      {
        path: '/chart/bar',
        name: 'BarChart',
        component: BarChart,
        meta: {
          title: '柱状图',
          icon: 'chart-bar'
        },
      },
      {
        path: '/chart/line',
        name: 'LineChart',
        component: LineChart,
        meta: {
          title: '折线图',
          icon: 'chart-line'
        },
      },
      {
        path: '/chart/pie',
        name: 'PieChart',
        component: PieChart,
        meta: {
          title: '饼图',
          icon: 'chart-pie'
        },
      },
      {
        path: '/chart/scatter',
        name: 'ScatterChart',
        component: ScatterChart,
        meta: {
          title: '散点图',
          icon: 'chart-scatter'
        },
      }
    ]
  },
  {
    path: '/table',
    name: 'Table',
    component: Table,
    meta: {
      title: '表格',
      icon: 'table'
    },
    children: [
      {
        path: '/table/group',
        name: 'GroupTable',
        component: GroupTable,
        meta: {
          title: '分组表格',
          icon: 'table-group'
        },
      },
      {
        path: '/table/nest',
        name: 'NestTable',
        component: NestTable,
        meta: {
          title: '嵌套表格',
          icon: 'table-nest'
        },
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: '关于我',
      icon: 'about'
    },
  },
]