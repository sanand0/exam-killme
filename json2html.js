export default function(data) {
  return `<table data-user="root.node@gmail.com">
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
      </tr>
    </thead>
    <tbody>
      ${data.map((row) => `<tr>
        <td>${row.Name}</td>
        <td>${row.Age}</td>
        <td>${row.Gender}</td>
      </tr>`).join("")}
    </tbody>
  </table>`;
}
