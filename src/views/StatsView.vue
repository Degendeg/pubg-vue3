<template>
  <div>
    <div class="group">      
      <input type="text" v-model="platform">
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Platform</label>
    </div>
    <div class="group">      
      <input type="text" v-model="playerName" @keyup.enter="getData()">
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Player name</label>
    </div>
    <button class="btn btn-default" @click="getData()" :disabled="!platform || !playerName">Get data</button>
    <div class="clearfix"></div>
    <vue-good-table
      v-if="statsRows && statsRows.length > 0"
      max-height="300px"
      theme="nocturnal"
      :columns="stats"
      :rows="statsRows"/>
    <div class="clearfix"></div>
    <vue-good-table
      v-if="matchRows && matchRows.length > 0"
      max-height="300px"
      theme="nocturnal"
      :columns="match"
      :rows="matchRows"/>
  </div>
</template>

<script>
import config from '../../conf/index.js'
import axios from '../helpers/axios'
import 'vue-good-table-next/dist/vue-good-table-next.css'
import { VueGoodTable } from 'vue-good-table-next';
import { convertInput } from '../helpers/converter'

export default {
  name: 'stats',
  components: {
    VueGoodTable,
  },
  data() {
    return {
      platform: null,
      playerName: null,
      stats: [
        {
          label: 'Duo (FPP)',
          field: 'duo',
        },
        {
          label: 'Solo (FPP)',
          field: 'solo',
        },
        {
          label: 'Squad (FPP)',
          field: 'squad',
        },
      ],
      match: [
        {
          label: 'Map',
          field: 'map',
        },
        {
          label: 'When',
          field: 'time',
        },
        {
          label: 'Damage',
          field: 'dmg',
        },
        {
          label: 'Kills',
          field: 'kills',
        },
        {
          label: 'Rank',
          field: 'rank',
        },
      ],
      statsRows: [],
      matchRows: []
    };
  },
  methods: {
    getTimeDiff (dateCreatedAt) {
      if (dateCreatedAt) {
        const dt1 = new Date();
        const dt2 = new Date(dateCreatedAt);
        var diff = Math.abs(dt1 - dt2);
        var minutes = Math.floor((diff/1000)/60);
        return minutes;
      }
    },
    getData () {
      this.matchRows = [];
      this.statsRows = [];
      axios._get(config.BASE_URL + this.platform + '/players?filter[playerNames]=' + this.playerName).then(res1 => {
        if (res1) {
          const accId = res1.data.data[0].id;
          for (let i = 0; i < 5; i++) {
            const matchId = res1.data.data[0].relationships.matches.data[i].id;
            axios._get(config.BASE_URL + this.platform + '/matches/' + matchId).then(res3 => {
              if (res3) {
                const playerStats = res3.data.included.find(r => r.type === 'participant' && r.attributes.stats.playerId === accId);
                const data = {
                  map: convertInput(res3.data.data.attributes.mapName),
                  time: this.getTimeDiff(res3.data.data.attributes.createdAt) + ' minutes ago',
                  dmg: Math.round(playerStats.attributes.stats.damageDealt),
                  kills: playerStats.attributes.stats.kills,
                  rank: playerStats.attributes.stats.winPlace
                }
                this.matchRows.push(data)
              }
            })
          }
          axios._get(config.BASE_URL + this.platform + '/players/' + accId + '/seasons/lifetime?filter[gamepad]=false').then(res2 => {
            if (res2) {
              const data = {
                duo: res2.data.data.attributes.gameModeStats.duo,
                solo: res2.data.data.attributes.gameModeStats.solo,
                squad: res2.data.data.attributes.gameModeStats.squad
              }
              this.statsRows.push(data);
            }
          }).catch((error) => {
            if (error.response && error.response.status === 401) {
              window.location.href = window.location.origin.concat('/error');
            } else {
              this.$notify(error.message + ' (' + error.response.data.errors[0].detail + ')')
              console.log('Request went bad: ' + error);
            }
          })
        }
      }).catch((error) => {
        if (error.response && error.response.status === 401) {
          window.location.href = window.location.origin.concat('/error');
        } else {
          this.$notify(error.message + ' (' + error.response.data.errors[0].detail + ')')
          console.log('Request went bad: ' + error);
        }
      })
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.clearfix {
  margin: 25px;
}

.btn {
    font-size: 14px;
    padding: 6px 12px;
    margin-bottom: 0;
    display: inline-block;
    text-decoration: none;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
}
.btn:focus,
.btn:active:focus {
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
}
.btn:hover,
.btn:focus {
    color: #333;
    text-decoration: none;
}
.btn:active {
    background-image: none;
    outline: 0;
    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
}

/* default */
.btn-default {
    border-radius: 5px;
    color: #000;
    background-color: #00BD7E;
    border-color: #ccc;
}
.btn-default:focus, .btn-default:hover, .btn-default:active {
    color: #000;
    background-color: #01dd94;
    border-color: #8c8c8c;
}
.btn-default:disabled {
    opacity: 0.2;
}

/* form starting stylings */
.group {
  position: relative;
  margin-bottom: 45px;
}
input {
  background: #181818;
  color: #fff;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 300px;
  border: none;
  border-bottom: 1px solid #757575;
}
input:focus {
  outline: none;
}

/* label */
label {
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

/* active state */
input:focus ~ label,
input:valid ~ label {
  top: -20px;
  font-size: 14px;
  color: #5264ae;
}

/* bottom bars */
.bar {
  position: relative;
  display: block;
  width: 300px;
}
.bar:before,
.bar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #5264ae;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}
.bar:before {
  left: 50%;
}
.bar:after {
  right: 50%;
}

/* active state */
input:focus ~ .bar:before,
input:focus ~ .bar:after {
  width: 50%;
}

/* highlighter */
.highlight {
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

/* active state */
input:focus ~ .highlight {
  -webkit-animation: inputHighlighter 0.3s ease;
  -moz-animation: inputHighlighter 0.3s ease;
  animation: inputHighlighter 0.3s ease;
}

/* anims */
@-webkit-keyframes inputHighlighter {
  from {
    background: #5264ae;
  }
  to {
    width: 0;
    background: transparent;
  }
}
@-moz-keyframes inputHighlighter {
  from {
    background: #5264ae;
  }
  to {
    width: 0;
    background: transparent;
  }
}
@keyframes inputHighlighter {
  from {
    background: #5264ae;
  }
  to {
    width: 0;
    background: transparent;
  }
}
</style>
