import AV from 'leancloud-storage';

export default class LeanCloud {
  constructor() {
    this.appId = 'PYQ5ahcY8N6LjBcLpDrI2kbG-gzGzoHsz';
    this.appKey = '4VFGrshwIUyQi4uBDMYMWawN';
    this.AV = AV
  }

  init(){
    this.AV.init({
      appId: this.appId,
      appKey: this.appKey
    });
  }

  creatNewQuery(className){
    return new this.AV.Query(className)
  }
}
