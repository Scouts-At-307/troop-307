<template>
    <FullCalendar
      :options="calendarOptions"
      default-view="dayGridMonth"
    />
</template>

<script>
import FullCalendar from '@fullcalendar/vue';
import dayGrid from '@fullcalendar/daygrid';
import list from '@fullcalendar/list';
import googleCalendar from '@fullcalendar/google-calendar';

export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [
          dayGrid,
          list,
          googleCalendar
        ],
        initialView: 'dayGridMonth',
        googleCalendarApiKey: 'AIzaSyBcSbvqJZD2Sgtr2Nv4Y7pNXjRPYj-eAjI',
        events: { googleCalendarId: 'scoutsat307@gmail.com' },
        headerToolbar: {
          left: 'dayGridMonth,listMonth',
          center: 'title',
          right: 'prev,next today'
        }
      },
    };
  },
};
</script>
