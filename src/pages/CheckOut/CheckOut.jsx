import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  // console.log(service);
  const handleBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const userName = form.name.value;
    const date = form.date.value;
    const booking = {
      customerName: userName,
      email,
      service: title,
      service_id: _id,
      price,
      img,
      date,
    };
    console.log(booking);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("service booked successfully");
        }
      });
  };
  return (
    <div>
      <h1 className="font-bold text-3xl text-center">
        check this out : {title}
      </h1>
      {/*  */}
      <form onSubmit={handleBook} className="form-control">
        <label className="input input-bordered flex items-center gap-2 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="email"
            className="grow"
            name="email"
            placeholder="Email"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            name="name"
            placeholder="Username"
          />
        </label>
        <input
          type="date"
          name="date"
          placeholder="Type here"
          className="input input-bordered input-primary w-full "
        />
        <button
          className="btn btn-block bg-orange-600 text-white mt-4"
          type="submit"
          value="Submit"
        >
          Order now
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
