import { useEffect, useState } from "react";
// import { AuthContext } from "../../provider/AuthProvider";
import BookingRow from "./BookingRow";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Bookings = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxiosSecure();
  // const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const url = `bookings?email=${user?.email}`;
  useEffect(() => {
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setBookings(data);
    //   });
    // console.log(url);
    axiosSecure.get(url).then((res) => {
      setBookings(res.data);
    });
  }, [url, axiosSecure]);
  const handleConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          alert("order confirmed");
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "confirm";
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  };
  return (
    <div>
      <h1>size : {bookings.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Service</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => {
              return (
                <BookingRow
                  key={booking._id}
                  booking={booking}
                  bookings={bookings}
                  setBookings={setBookings}
                  handleConfirm={handleConfirm}
                ></BookingRow>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
