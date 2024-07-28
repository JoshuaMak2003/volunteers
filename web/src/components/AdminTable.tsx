
const AdminTable = ({event}:any) => {
    return (
        <table className="striped-table min-w-full border-4">
        <thead className="border-4">
            <tr className="">
                <th>Event Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Tag</th>
                <th colSpan={2} className="text-center">
                Actions
                </th>
            </tr>
        </thead>
        
        <tbody>
          {event.length > 0 ? (
            event.map((event:any) => (
              <tr key={event.id}>
                {/*<td>{i + 1}</td>*/}
                <td>{event.title}</td>
                <td>{event.date}</td>
                <td>{event.time}</td>
                <td>{event.tag} </td>
                <div className="flex flex-row justify-between w-[80%]">
                <td className="flex-1 flex justify-center">
                  <button
                    //onClick={() => handleEdit(event.id)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="flex-1 flex justify-center">
                  <button
                    //onClick={() => handleDelete(employee.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
                </div>
              </tr>
            ))
          ) : (
            <tr>
                {!event ? <td colSpan={7}>No Employees</td> : <td colSpan={7}>Employees Loading . . .</td>}
            </tr>
          )}
        </tbody>
      </table>
    )
}

export default AdminTable;