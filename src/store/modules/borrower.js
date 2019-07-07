import  borrowerService from '@/services/borrowerService.js'

export const state = {
    borrowers:[],
    editmode:false,
    datez:Date

}

export const mutations = {

    SET_BORROWERS(state , borrowersFromAxios){
        state.borrowers = borrowersFromAxios
    },
     MARK_RETURNED(state , borrowersFromAxios){
        state.borrowers = borrowersFromAxios
    },
    SET_DATE(state,date2){
        state.datez = date2
    }

}

export const actions = {

    fetchBorrowersAction({commit}){
        borrowerService.getEvents()
            .then(response=>{
                commit('SET_BORROWERS',response.data)
            })
            .catch(error=>{
                console.log(error.response)
            })
    },

    markAsReturnedAction( {commit} , $id ){
        borrowerService.markAsReturned($id)
            .then(response =>{
                // commit('MARK_RETURNED',response.data)
            })
            .catch(error=>{
               console.log(error.response)
            });
    },
    fillterByDateAction({commit} ,$date){
        borrowerService.filterByDate($date)
            .then(response=>{
                commit('SET_DATE',$date)
                commit('SET_BORROWERS',response.data)
            })
            .catch(error=>{
                console.log(error.response)
            })
    }



}
