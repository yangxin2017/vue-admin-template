export function getCategoryByCode(datas, code){
    let cate = null
    for(let d of datas){
        if(d.code == code){
            cate = d
            break
        }
    }
    return cate
}

export function getCategoryChildsById(datas, id){
    let cates = []
    for(let d of datas){
        if(d.id == id){
            cates = d.children
            break
        }
    }
    return cates
}