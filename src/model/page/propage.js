import { uuid } from '../../utils/common'
 
export class ProPage{
    constructor(title, path, imagecut, pagewidth, desc, params){
        this.id = uuid()
        this.title = title
        this.path = path
        this.imagecut = imagecut
        this.pagewidth = pagewidth ? pagewidth : 1920
        this.desc = desc
        this.params = params
    }

    remove(param){
        this.params = this.params.filter((v)=>{ return v.id != param.id })
    }
}

export class ProParam{
    constructor(cname, ename, require, desc){
        this.id = uuid()
        this.cname = cname
        this.ename = ename
        this.require = require
        this.desc = desc
    }
}

export var ListPageWidth = [{width: 1920}, {width: 1440}, {width: 2560}]
