'use strict'

console.log('MI GENTE')


const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        mails: [],
      }
    },
    created(){
        for(let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                this.mails.push(response.data)
            })
        }
    }
  }).mount('#app')