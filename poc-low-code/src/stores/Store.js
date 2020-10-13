import { makeAutoObservable, toJS, makeObservable, observable } from 'mobx' 

const stateProps = [];
const createStateProperty = (data) => {
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const singledata = data[key];
      if (singledata instanceof Object) {
        if (singledata.isStateFull) {
          stateProps.push(singledata.name);
        }
        createStateProperty(singledata);
      }
    }
  }
};


class Store {
  constructor() { 
    this.init = false 
    this.appConfig = null
    makeAutoObservable(this)
  }

  initialize(appConfig){
    console.log('Initialize')
    this.init=true
    this.appConfig=JSON.stringify(appConfig)
    createStateProperty(appConfig)
    stateProps.forEach(prop => {
      this[prop] = null
      makeObservable(this, {
        [prop]: observable
      })
    }) 
  }
}

export default new Store()




 


 