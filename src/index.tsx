import ReactDOM from 'react-dom'
import App from './App'
// import reportWebVitals from './reportWebVitals'
import { loadDevTools } from 'jira-dev-tool'
import 'antd/dist/antd.less'

loadDevTools(() => ReactDOM.render(<App />, document.getElementById('root')))
// reportWebVitals()
