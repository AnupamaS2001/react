import { Link } from "react-router-dom";
function Dashbord({ data, value, handleButtonClick }) {
  return (
    <>
      <h2>dashboard</h2>

      <button onClick={handleButtonClick}>Add value</button>
      <table border={1}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to="/">back to home</Link>
    </>
  );
}
export default Dashbord;
