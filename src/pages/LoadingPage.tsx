import Loading from '../components/Loading';

const LoadingPage = () => {
  return (
    <div>
      <h1 className='title'>Loading</h1>

      <div className='section-container'>
        <Loading />
      </div>

      <div className='section-container'>
        <Loading
          variant='linear'
          color='red'
          thickness={8}
        />
      </div>
    </div>
  );
};

export default LoadingPage;
