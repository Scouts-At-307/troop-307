<template>
  <Page>
    <h1 class="title is-1">
      {{ title }}
    </h1>
    <div class="content">
      <p>
        Troop 307 is a Boy Scout troop chartered by Saxe Gotha Presbyterian Church. We are located in Lexington, SC <a
          href="https://www.google.com/maps/place/Saxe+Gotha+Presbyterian+Church/"
          target="_blank"
          rel="noopener"
        >on Sunset Boulevard</a>. We meet on Mondays from 7:00 to 8:30 pm. For more information regarding our schedule, <a href="calendar.html">visit the calendar page</a>. If you'd like to learn more about the scouting program, visit the Boy Scouts of America website at
        <a
          href="http://www.scouting.org"
          target="_blank"
          rel="noopener"
        >www.scouting.org</a>. Our troop enjoys camping 11 months out of the year. In June, we visit Camp Rainey Mountain, a BSA summer camp located in the mountains of Northern Georgia.  If you have any questions, please contact our  <a href="mailto:scoutmaster@scoutsat307.org">Scoutmaster</a>.
      </p>
    </div>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      title: 'About Us',
    };
  },
  metaInfo() {
    return {
      title: this.title,
    };
  },
};
</script>
