import List from './list'
import SearchPanel from './search-panel'
import { useEffect, useState } from 'react'
import { cleanObj } from '../../utils/index.js'
import * as qs from 'qs'
const api = process.env.REACT_APP_URL
const ProjectListScreen = () => {
  const [users, setUsers] = useState([])
  const [param, setParam] = useState({
    name: '',
    personId: '',
  })
  console.log(111)
  const [list, setList] = useState([])
  useEffect(() => {
    fetch(`${api}/projects?${qs.stringify(cleanObj(param))}`).then(
      async (res) => {
        if (res.ok) {
          setList(await res.json())
        }
      }
    )
  }, [param])
  useEffect(() => {
    fetch(`${api}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json())
      }
    })
  }, [])
  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  )
}

export default ProjectListScreen
