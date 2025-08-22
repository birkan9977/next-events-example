import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';
import EventSummary from '../../components/events/event-detail/event-summary';
import EventLogistics from '../../components/events/event-detail/event-logistics';
import EventContent from '../../components/events/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';

export default function Event() {
    const router = useRouter();
    const eventId = router.query.eventId;

    const event = getEventById(eventId);

    if (!event) {
        return (
            <>
                <ErrorAlert>
                    <p>No event found for the given id.</p>
                </ErrorAlert>
            </>
        )
    }

    return (
        <>
            <EventSummary title={event.title} />
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    )
}