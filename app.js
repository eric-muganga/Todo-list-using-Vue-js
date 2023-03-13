const app = Vue.createApp({
  data() {
    return { 
      /*
      myObject: {
        name: 'Eric',
        surname: 'Muganga',
        age: 21,
      },
      */
      enteredGoal: '',
      goals: [] };
  },
  methods: {
    addGoal(){
      this.goals.push(this.enteredGoal);
    },
    removeGoal(idx){
      this.goals.splice(idx, 1);
    }
  }
});

app.mount('#user-goals');
