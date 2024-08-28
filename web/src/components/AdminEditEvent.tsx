import React, { useState } from "react";
import { useEventContext } from "../context/EventContext"; // Import the context

const AdminEditEvent = ({
  setIsEditing,
}: any) => {
  const { events, setEvents, selectedEvent, editEvent } = useEventContext(); // Get context methods and state
  const id = selectedEvent.id;

  const [title, setTitle] = useState(selectedEvent.title);
  const [date, setDate] = useState(selectedEvent.date);
  const [time, setTime] = useState(selectedEvent.time);
  const [tag, setTag] = useState(selectedEvent.tag);

  const handleUpdate = async (e: any) => {
    e.preventDefault();

    const updatedEvent = {
      id,
      title,
      date,
      time,
      tag,
    };

    await editEvent(id, updatedEvent); // Use the context's editEvent method

    setIsEditing(false);
  };

  return (
    <div className="p-[1rem] ml-[auto] mr-[auto]">
      <form onSubmit={handleUpdate}>
        <h1>Admin Edit Event</h1>

        <label htmlFor="eventTitle">Event Title: </label>
        <input
          className="bg-lightGrey rounded-[10px] pl-[5px] pr-[5px] mr-[1em] text-black"
          id="eventTitle"
          type="text"
          name="eventTitle"
          placeholder={title}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="date">Date: </label>
        <input
          className="bg-lightGrey rounded-[10px] pl-[5px] pr-[5px] mr-[1em] text-black"
          id="date"
          type="date"
          name="date"
          placeholder={date}
          value={date}
          required
          onChange={(e) => setDate(e.target.value)}
        />

        <label htmlFor="eventTime">Event Time: </label>
        <input
          className="bg-lightGrey rounded-[10px] pl-[5px] pr-[5px] mr-[1em] text-black"
          id="eventTime"
          type="time"
          name="eventTime"
          placeholder={time}
          value={time}
          required
          onChange={(e) => setTime(e.target.value)}
        />

        <label htmlFor="tag">Event Tag: </label>
        <input
          className="bg-lightGrey rounded-[10px] pl-[1em] pr-[5px] mr-[1em] text-black"
          id="tag"
          type="tag"
          name="tag"
          placeholder={tag}
          value={tag}
          required
          onChange={(e) => setTag(e.target.value)}
        />

        <div style={{ marginTop: "30px" }}>
          <button
            className="bg-primary hover:bg-blueButtonHover mr-[1em]"
            type="submit"
            value="Add"
          >
            Edit
          </button>
          <button
            className="bg-primary hover:bg-blueButtonHover"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminEditEvent;
