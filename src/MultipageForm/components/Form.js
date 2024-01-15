import FormInputs from "./FormInputs";
import useFormContext from "../context/useFormContext";

const Form = () => {
  const {
    page,
    setPage,
    data,
    title,
    canSubmit,
    disablePrev,
    disableNext,
    prevHide,
    nextHide,
    submitHide,
  } = useFormContext();

  const handlePrev = () => setPage((prev) => prev - 1);

  const handleNext = () => setPage((prev) => prev + 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(data));
    sessionStorage.setItem('data',JSON.stringify(data))
  };

  


  const content = (
    <form className="container bg-light rounded m-5" onSubmit={handleSubmit}>
      <header className="text-center ">
        <h2 className="text-primary p-3">{title[page]}</h2>

        <FormInputs />
        <div className="m-2 text-center p-3">
          <button
            type="button"
            className={`btn btn-info m-1 ${prevHide}`}
            onClick={handlePrev}
            disabled={disablePrev}
          >
            Prev
          </button>

          <button
            type="button"
            className={`btn btn-info m-1 ${nextHide}`}
            onClick={handleNext}
            disabled={disableNext}
          >
            Next
          </button>

          <button
            type="submit"
            className={`btn btn-success m-1 ${submitHide}`}
            disabled={!canSubmit}
          >
            Submit
          </button>
        </div>
      </header>
    </form>
  );

  return content;
};
export default Form;
