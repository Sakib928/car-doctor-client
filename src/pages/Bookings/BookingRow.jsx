const BookingRow = ({ booking, bookings, setBookings, handleConfirm }) => {
  // console.log(booking);
  const { img, customerName, service, date, _id, status } = booking;
  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete this ?");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("data deleted");
            const remaining = bookings.filter((booking) => {
              booking._id !== id;
            });
            setBookings(remaining);
          }
        });
    }
  };

  return (
    <tr>
      <th></th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{customerName}</div>
          </div>
        </div>
      </td>
      <td>
        {service}
        <br />
      </td>
      <td>{date}</td>
      <th>
        {status === "confirm" ? (
          <span>confirmed</span>
        ) : (
          <button
            onClick={() => handleConfirm(_id)}
            className="btn btn-ghost btn-xs"
          >
            Confirm
          </button>
        )}
      </th>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle btn-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
    </tr>
  );
};

export default BookingRow;
