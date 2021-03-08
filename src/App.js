import './App.css';
import ImageFinderForm from './Components/ImageFinder';
import { axiosAPI } from './API/API';
import ImageView from './Components/ImageView';
import { useState } from 'react';
import s from './App.module.scss';
import Modal from './Components/Modal';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [array, setArray] = useState([]);
  const [value, setValue] = useState('');
  const [showMore, setshowMore] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [page, setPage] = useState(1);
  const [openModal, isOpenModal] = useState(false);
  const [largeImage, setLargeImage] = useState('');

  const handleSubmit = e => {
    setshowMore(false);
    setSearchActive(true);
    axiosAPI(value, page).then(data => {
      setArray(data.hits);
      setshowMore(true);
      setSearchActive(false);

      // По идее этого тут не должно быть, добавление страницы реализовывается в методе handleShowMore
      // Но если тут не добавить, то появляется баг, при котором при вызове showMore в state Добавляется +1 страница, но по факту
      // Странцы не подгружаются. Это и есть костыль о  котором говорил. Как сделать лучше?
      // Попробуй это закомментировать и поймешь.
      setPage(page + 1);
    });

    e.preventDefault();
  };

  const handleShowMore = () => {
    setPage(page + 1);
    setSearchActive(true);

    axiosAPI(value, page).then(data => {
      setArray(prevValue => [...prevValue, ...data.hits]);
      setSearchActive(false);
    });
  };

  const handleOpenModal = e => {
    isOpenModal(true);
    setLargeImage(e.target.name);
  };

  const getValue = e => {
    setValue(e.target.value);
  };

  // Не уверен, что так делается*
  // Закрытие модалки по клику на бекдроп
  const handleClickBackdrop = e => {
    if (e.target.dataset.value === 'modal') {
      isOpenModal(false);
    }
  };

  // Не уверен, что так делается*
  // Закрытие модалки по клику на Esc
  const handlerKeypressCloseModal = e => {
    if (e.code === 'Escape') {
      document.body.classList.remove('isOpen');
      isOpenModal(false);
    }
  };

  // Не уверен
  // Добавление класса на body для добавления overflow: hidden
  if (openModal) {
    document.body.classList.add('isOpen');
  } else {
    document.body.classList.remove('isOpen');
  }

  window.addEventListener('keydown', handlerKeypressCloseModal);

  return (
    <div className="App">
      <ImageFinderForm
        submit={handleSubmit}
        getValue={getValue}
        setValue={value}
      />
      <ImageView array={array} isOpenModal={handleOpenModal} />
      {showMore && (
        <button type="button" className={s.galleryBtn} onClick={handleShowMore}>
          Show more
        </button>
      )}
      {openModal && (
        <Modal
          largeImg={largeImage}
          isOpen={openModal}
          onClick={handleClickBackdrop}
        />
      )}
      {searchActive && <Spinner animation="grow" />}
    </div>
  );
}

export default App;
