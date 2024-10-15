import Table from 'react-bootstrap/Table';

export default function ListaViloes() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th># TOP</th>
          <th>Herói</th>
          <th>Inimigo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Batman</td>
          <td>Coringa</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Flash</td>
          <td>Flash Reverso</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Superman</td>
          <td>Apocalypse</td>
        </tr>
      </tbody>
    </Table>
  );
}
