type Student = { id: string; name: string; age: number };

const students: Student[] = [
  { id: "J4-220000", name: "田中", age: 19 },
  { id: "J5-220001", name: "鈴木", age: 18 },
  { id: "J6-230001", name: "佐藤", age: 20 },
];

export default function App() {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>名前</th>
          <th>年齢</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
