import Spinner from 'react-bootstrap/Spinner';

function TripleSpinner() {
  return (
    <div>
      <Spinner animation="grow" role="status" variant='danger' />
      <Spinner animation='grow' role='status' size='sm' variant='light' />
      <Spinner animation='grow' role='status' variant='warning' />
      <Spinner animation='grow' role='status' size='sm' variant='light' />
      <Spinner animation='grow' role='status' variant='info' />
    </div>
  );
}

export default TripleSpinner;