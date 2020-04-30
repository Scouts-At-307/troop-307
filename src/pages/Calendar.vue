<template>
  <Page>
    <h1 class="title is-1">
      {{ title }}
    </h1>
    <FullCalendar
      :plugins="calendarPlugins"
      :header="calendarHeader"
      :events="calendarEvents"
      :googleCalendarApiKey="googleCalendarApiKey"
      default-view="dayGridMonth"
    />
  </Page>
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
      title: 'Calendar',
      calendarPlugins: [
        dayGrid,
        list,
        googleCalendar,
      ],
      calendarHeader: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,listMonth',
      },
      googleCalendarApiKey: 'AIzaSyBcSbvqJZD2Sgtr2Nv4Y7pNXjRPYj-eAjI',
      calendarEvents: {
        googleCalendarId: 'scoutsat307@gmail.com',
      },
    };
  },
  metaInfo() {
    return {
      title: this.title,
    };
  },
};
</script>

<style lang='scss'>

@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';
@import '~@fullcalendar/list/main.css';

</style>
