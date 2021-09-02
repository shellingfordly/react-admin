import SvgIcon from '@/components/icon/SvgIcon'

export default function Home() {
  const projects = [
    {
      name: 'React',
      icon: 'react',
      desc: '用于构建用户界面的 JavaScript 库'
    },
    {
      name: 'Vue',
      icon: 'vue',
      desc: '渐进式 JavaScript 框架'
    },
    {
      name: 'Angular',
      icon: 'angular',
      desc: '现代 Web 开发平台'
    },
    {
      name: 'Html',
      icon: 'html',
      desc: '超文本标记语言'
    },
    {
      name: 'CSS',
      icon: 'css',
      desc: '层叠样式表'
    },
    {
      name: 'JS',
      icon: 'js',
      desc: '一种具有函数优先的轻量级，解释型或即时编译型的编程语言'
    },
  ]

  return (
    <ul className="pro-ul">
      {
        projects.map(p => (
          <li className="pro-li" key={p.name}>
            <div className="icon">
              <SvgIcon name={p.icon} size={24} />
            </div>
            <div className="text">{p.name}</div>
            <div className="desc">{p.desc}</div>
          </li>
        ))
      }
    </ul>
  )
}