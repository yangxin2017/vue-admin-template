import { getAllCategorys } from '@/api/cms'

const getDefaultState = () => {
    return {
        categorys: [],
        depts: []
    }
}

const state = getDefaultState()

const mutations = {
    SET_CATEGORYS: (state, categorys) => {
        state.categorys = categorys
    },
    SET_DEPTS: (state, depts) => {
        state.depts = depts
    }
}

const actions = {
    getAllCates({ commit, state }){
        return new Promise((resolve, reject)=>{
            getAllCategorys({}).then(res => {
                if(res.success){
                    commit('SET_CATEGORYS', res.data)
                }else{
                    reject(res.mes)
                }
                resolve(res.data)

            }).catch(err=>{
                reject(error)
            })
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}