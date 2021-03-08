import s from './ImageView.module.scss';

const ImageView = ({ array, isOpenModal }) => {
  return (
    <ul className={s.galleryList}>
      {array.map(({ webformatURL, id, largeImageURL }, index) => (
        <li className={s.galleryElement} key={index}>
          <img
            onClick={isOpenModal}
            className={s.galleryImg}
            src={webformatURL}
            alt="pictures"
            name={largeImageURL}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageView;
