<template>
    <div class="animated fadeIn">
        <form @submit.prevent="savee">
    <div data-v-459e9c6b="" class="col-lg-12">
        <div data-v-459e9c6b="" class="card">
            <!---->
            <div data-v-459e9c6b="" class="card-header">
                <div data-v-459e9c6b="">
                    <i data-v-459e9c6b="" class="fa fa-edit"></i> Add Borrower

                    <div data-v-459e9c6b="" class="card-header-actions">
                        <a data-v-459e9c6b="" target="_self" href="#" class="card-header-action btn-setting">
                            <i data-v-459e9c6b="" class="icon-settings"></i>
                        </a>
                        <a data-v-459e9c6b="" target="_self" href="#" class="card-header-action btn-minimize" aria-controls="collapse1" aria-expanded="true" role="button">
                            <i data-v-459e9c6b="" class="icon-arrow-up"></i>
                        </a>
                        <a data-v-459e9c6b="" target="_self" href="#" class="card-header-action btn-close">
                            <i data-v-459e9c6b="" class="icon-close"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div data-v-459e9c6b="" id="collapse1" class="collapse show">
                <div data-v-459e9c6b="" class="card-body">
                    <!---->
                    <!---->
                    <div data-v-459e9c6b="" role="group" class="form-group" id="__BVID__594">
                        <label for="elementsEmail"  class="d-block" id="__BVID__594__BV_label_">First name</label>
                        <div>
                            <div data-v-459e9c6b="" role="group" class="input-group">
                                <div data-v-459e9c6b="" class="input-group-prepend">
                                </div>
                                <input data-v-459e9c6b="" v-model="first_name" type="text" autocomplete="text" class="form-control" aria-describedby="__BVID__594__BV_description_">
                            </div>
                        </div>
                    </div>

                    <div data-v-459e9c6b="" role="group" class="form-group" >
                        <label for="elementsEmail" class="d-block">Middle name</label>
                        <div>
                            <div data-v-459e9c6b="" role="group" class="input-group">
                                <div data-v-459e9c6b="" class="input-group-prepend">
                                </div>
                                <input data-v-459e9c6b="" v-model="middle_name" type="text" autocomplete="text" class="form-control" aria-describedby="__BVID__594__BV_description_">
                            </div>
                        </div>
                    </div>

                    <div data-v-459e9c6b="" role="group" class="form-group" >
                        <label for="elementsEmail" class="d-block" >Last name</label>
                        <div>
                            <div data-v-459e9c6b="" role="group" class="input-group">
                                <div data-v-459e9c6b="" class="input-group-prepend">
                                </div>
                                <input data-v-459e9c6b="" id="elementsEmail" v-model="last_name" type="text" autocomplete="text" class="form-control" aria-describedby="__BVID__594__BV_description_">
                            </div>
                        </div>
                    </div>

                    <div data-v-459e9c6b="" role="group" class="form-group" >
                        <label for="elementsEmail" class="d-block" >Tool(s)</label>
                        <div>
                            <div data-v-459e9c6b="" role="group" class="input-group">
                                <div data-v-459e9c6b="" class="input-group-prepend">
                                </div>
                                <input data-v-459e9c6b="" v-model="tool_name" type="text" autocomplete="text" class="form-control" aria-describedby="__BVID__594__BV_description_">
                            </div>
                        </div>
                    </div>


                    <div data-v-459e9c6b="" class="form-actions">
                        <button data-v-459e9c6b="" type="submit" class="btn btn-primary">Save changes</button>
                        <button data-v-459e9c6b="" type="button" @click="backHome" class="btn btn-secondary">Cancel</button>
                    </div>
                </div>
            </div>
            <!---->
            <!---->
        </div>
    </div>
        </form>
    </div>
</template>

<script>
    import borrowerService from '@/services/borrowerService.js';
    // import {mapState} from 'vuex';
    export default {
        data() {
            return {

                    first_name :'',
                    middle_name:'',
                    last_name:'',
                    tool_name:'',

            }
        },
        // computed:mapState(['first_name','middle_name','last_name','tool_name']),

        methods:{
          savee:function () {
              borrowerService.saveNewBorrower(this.first_name,this.middle_name,this.last_name,this.tool_name)
                  .then(()=>{
                     this.first_name = ''
                      this.middle_name = ''
                      this.last_name = ''
                      this.tool_name = ''

                      this.backHome()
                  })
          },
            backHome:function () {
                this.$router.push({
                    name:'Dashboard'
                })
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

