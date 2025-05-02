import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import "./style.css";

const FormData = () => {
  const { t } = useTranslation();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      text: event.target.text.value,
    };

    console.log("Form data to send:", formData);

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Response from server:", result);

      if (result.success) {
        Swal.fire({
          icon: "success",
          title: t("messageSent"),
          text: t("yourMessageHasBeenSent"),
        });
      } else {
        Swal.fire({
          icon: "error",
          title: t("error"),
          text: result.error,
        });
      }
    } catch (error) {
      console.log("Error during the fetch:", error);
      Swal.fire({
        icon: "error",
        title: t("error"),
        text: t("thereWasAProblem"),
      });
    }
  };

  return (
    <div className='container-fluid shadow-lg p-4 rounded-5'>
      <div className='row'>
        <div className='col-lg-6 text-white bg-dark p-4 rounded-5'>
          <h1 className='text-success fw-bold border-bottom border-success pb-2'>
            {t("contact")}
          </h1>
          <p className='fs-5'>{t("contactText")}</p>
          <p className='fw-semibold text-white bg-success py-2 px-3 rounded mb-2'>
            📞 {t("contactPhone")}
          </p>
          <p className='fw-semibold text-white bg-success py-2 px-3 rounded mb-2'>
            📧 {t("contactEmail")}
          </p>
        </div>

        <div className='col-lg-6 p-4'>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <input
                type='text'
                className='form-control p-3 border border-success rounded-5'
                id='name'
                name='name'
                placeholder={t("contactFormName")}
                required
              />
            </div>
            <div className='mb-3'>
              <input
                type='email'
                className='form-control p-3 border border-success rounded-5'
                id='email'
                name='email'
                placeholder={t("contactFormEmail")}
                required
              />
            </div>
            <div className='mb-3'>
              <textarea
                className='form-control p-3 border border-success rounded-5'
                id='text'
                name='text'
                rows='6'
                placeholder={t("contactFormMessage")}
                required
              />
            </div>

            {/* Botones */}
            <div className='d-flex justify-content-between'>
              <button
                type='submit'
                className='btn btn-outline-success btn-lg w-100 me-2 rounded-5'
              >
                {t("send")}
              </button>
              <button
                type='reset'
                className='btn btn-outline-dark btn-lg w-100 rounded-5'
              >
                {t("reset")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormData;
