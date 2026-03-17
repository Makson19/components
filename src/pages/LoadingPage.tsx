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
          color='black'
          size={16}
          thickness={2}
        />
      </div>

      <div className='section-container'>
        <Loading
          variant='linear'
          color='pink'
          thickness={8}
        />
      </div>
    </div>
  );
};

export default LoadingPage;
