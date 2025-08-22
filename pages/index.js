import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

export default function Home() {

    const featuredEvents = getFeaturedEvents();

    const env = process.env.NODE_ENV;
    const apiKey = process.env.apiKey;


    return (
        <div>
            <EventList items={featuredEvents} />
            <p>{env}</p>
            <p>{apiKey}</p>
        </div>
    )
}