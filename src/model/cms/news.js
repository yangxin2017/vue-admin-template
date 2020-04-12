import moment from 'moment'

export class NewsModel{
    constructor(item) {
        this.initContent(item.title, item.tpwj, item.spwj, item.nrwj, item.description, item.publishDate, item.lydwmc, item.clicks, item.id, item.tagIds, item.categoryId)
    }

    initContent(title, tpwj, spwj, nrwj, desc, time, source, clicks, id, tagIds, cid){
        this.title = title
        this.link = "detail?id=" + id
        this.desc = desc
        this.pic = tpwj ? '/cms/webfile/' + tpwj : null
        this.video = spwj ? '/cms/webfile/' + spwj : null
        this.file = nrwj
        this.source = source
        this.clicks = clicks
        this.tagIds = tagIds
        this.cid = cid
        this.tags = []
        this.time = moment(time).format("YYYY-MM-DD")
        this.id = id
    }

}