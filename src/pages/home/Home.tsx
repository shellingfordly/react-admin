import Projects from './Projects'
import Countdown from './Countdown'
import Countdown1 from './Countdown1'
import './home.less'

export default function Home() {

  return (
    <div className="home-container">
      <div className="home-top">
        <div className="home-title">
          React-Admin
        </div>
      </div>
      <div className="home-mid">
        <div>
          <Countdown />
          <Countdown1 />

        </div>
        <div className="pro-cont">
          <div className="pro-title">
            <span>项目</span>
            <span className="more">更多</span>
          </div>
          <Projects />
        </div>
      </div>
    </div>
  )
}
