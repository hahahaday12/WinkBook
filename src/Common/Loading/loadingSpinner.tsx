import { PropagateLoader } from 'react-spinners';
import './loadingSpinner.scss';

const LoadingSpin = () => {
  return (
    <div className="LoadingContainer">
      <div className="LoadingCenter">
        <h3>페이지 로딩중..!</h3>
        <div className="LoadingBox">
          <PropagateLoader />
        </div>
      </div>
    </div>
  );
};
export default LoadingSpin;
