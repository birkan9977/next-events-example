import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

export default function Home() {

    const featuredEvents = getFeaturedEvents();

    return (
        <div>
            <h1>Homepage</h1>
            <EventList items={featuredEvents} />
        </div>
    )
}