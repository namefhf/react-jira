interface IList {
  id: number
  name: string
  personId: number
  organization: string
  created: number
}
interface IUser {
  id: number
  name: string
}
interface ListProps {
  list: IList[]
  users: IUser[]
}
const List = ({ list, users }: ListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>
              {users.find((user) => user.id === project.personId)?.name ||
                '未知'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default List
