import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

export default function Home() {

    const featuredEvents = getFeaturedEvents();

    const env = process.env.NODE_ENV;
    console.log(env);
    const test = process.env.NEXT_PUBLIC_TEST;
    console.log(test);

    return (
        <div>
            <EventList items={featuredEvents} />
            <p>{test}</p>
        </div>
    )
}