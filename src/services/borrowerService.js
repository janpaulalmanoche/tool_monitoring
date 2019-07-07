import baseAPi from './baseApi.js';
import axios from 'axios';
const baseAPI = baseAPi.baseAPI;

export default{

    getEvents(){
        return baseAPI.get('borrowers')
    },

    saveNewBorrower($first_name,$middle_name,$last_name,$tool_name){
        return baseAPI.post('borrowers',
            {
                'first_name':$first_name,
                'middle_name':$middle_name,
                'last_name':$last_name,
                'tool_name':$tool_name
            })

    },

    markAsReturned($id){
        return baseAPI.get('borrowers/return/'+$id);
    },
    filterByDate($date){
        return baseAPI.get('borrowers/filter/'+$date);
    }


}