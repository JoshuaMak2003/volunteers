type Event = {
    event_title: string;
    description: string;
    tasks: string;
    notes: string;
    contact: string;
    tag: string[];
    start_date_time: Date;
    end_date_time: Date;
    location: string;
    image: string;
    host: string;
}

interface EventProps {
    event: Event;
}

export default function EventDetails({event}: EventProps) {
    const startDate = new Date(event.start_date_time);
    const endDate = new Date(event.end_date_time);

    return (
        <div className="flex flex-col items-center fixed left-[15%] top-[10%] w-[85%] h-[90%] px-5 pt-5 bg-[#F7F7FB] overflow-scroll scrollbar-none"> {/* event-container */}
            <img src={event.image} className=" w-[95%] h-[45vh] rounded-3xl" />
        </div>
    )
}