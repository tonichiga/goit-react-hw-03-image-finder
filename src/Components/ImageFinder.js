import InputForm from './InputForm/';

const ImageFinderForm = ({ submit, getValue, setValue }) => {
  return (
    <InputForm onSubmit={submit} getValue={getValue} setValue={setValue} />
  );
};

export default ImageFinderForm;
