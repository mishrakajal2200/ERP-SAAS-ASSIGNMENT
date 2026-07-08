import {
  CalendarDays,
  Clock,
  Users,
} from "lucide-react";

const events = [
  {
    title: "Sprint Planning",
    date: "21 June",
    time: "10:00 AM",
  },
  {
    title: "Marketing Meeting",
    date: "22 June",
    time: "2:30 PM",
  },
  {
    title: "Project Deadline",
    date: "24 June",
    time: "6:00 PM",
  },
  {
    title: "HR Interview",
    date: "26 June",
    time: "11:00 AM",
  },
];

const Calendar = () => {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">
          Calendar
        </h1>

        <p className="text-gray-500 mt-2">
          Manage meetings, deadlines and company events.
        </p>

      </div>

      {/* Calendar Placeholder */}

      <div className="bg-white rounded-xl shadow p-10">

        <div className="flex flex-col items-center justify-center">

          <CalendarDays
            size={70}
            className="text-blue-600"
          />

          <h2 className="text-2xl font-bold mt-4">
            Calendar View
          </h2>

          <p className="text-gray-500 mt-2">
            React Big Calendar will be integrated here.
          </p>

        </div>

      </div>

      {/* Upcoming Events */}

      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="text-2xl font-bold mb-6">
          Upcoming Events
        </h2>

        <div className="space-y-5">

          {events.map((event, index) => (

            <div
              key={index}
              className="flex items-center justify-between border-b pb-4"
            >

              <div>

                <h3 className="font-semibold">
                  {event.title}
                </h3>

                <div className="flex items-center gap-2 text-gray-500 mt-2">

                  <CalendarDays size={18} />

                  {event.date}

                </div>

              </div>

              <div className="flex items-center gap-2 text-blue-600">

                <Clock size={18} />

                {event.time}

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Team Availability */}

      <div className="bg-white rounded-xl shadow p-6">

        <div className="flex items-center gap-3 mb-6">

          <Users />

          <h2 className="text-2xl font-bold">
            Team Availability
          </h2>

        </div>

        <div className="grid md:grid-cols-4 gap-5">

          <div className="border rounded-xl p-5">

            <h3 className="font-semibold">
              Developers
            </h3>

            <p className="text-green-600 mt-2">
              14 Available
            </p>

          </div>

          <div className="border rounded-xl p-5">

            <h3 className="font-semibold">
              HR
            </h3>

            <p className="text-green-600 mt-2">
              5 Available
            </p>

          </div>

          <div className="border rounded-xl p-5">

            <h3 className="font-semibold">
              Marketing
            </h3>

            <p className="text-orange-500 mt-2">
              2 On Leave
            </p>

          </div>

          <div className="border rounded-xl p-5">

            <h3 className="font-semibold">
              Sales
            </h3>

            <p className="text-green-600 mt-2">
              10 Available
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Calendar;