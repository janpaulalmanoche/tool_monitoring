<template>
  <div class="animated fadeIn">
    <div class="col-sm-12">
      <div class="card">
        <!---->
        <div class="card-header">
          <!--<div>-->
            <!--<i class="fa fa-align-justify"></i> Events-->
          <!--</div>-->
          <button class="btn btn-primary" @click="addForm">
            Add Borrower
          </button>
        </div>

        <input data-v-459e9c6b="" v-model="datee" id="date" type="date" class="form-control" @change="filterDate" >

        <div class="card-body">

          <!---->
          <!---->
          <div class="table-responsive-sm">
            <table aria-rowcount="25" aria-busy="false" aria-colcount="4" class="table b-table table-striped table-hover table-bordered table-sm b-table-fixed" id="__BVID__180">
              <!---->
              <!---->
              <thead role="rowgroup" class="">
              <!---->
              <tr role="row">
                <th role="columnheader" scope="col" aria-colindex="1" class="">first name</th>
                <th role="columnheader" scope="col" aria-colindex="2" class="">Middle name</th>
                <th role="columnheader" scope="col" aria-colindex="3" class="">Last name</th>
                <th role="columnheader" scope="col" aria-colindex="4" class="">Tool</th>
                <th role="columnheader" scope="col" aria-colindex="5" class="">Status</th>
                <th role="columnheader" scope="col" aria-colindex="6" class="">Date Borrowed</th>
                <th role="columnheader" scope="col" aria-colindex="7" class="">Date Returned</th>
                <th role="columnheader" scope="col" aria-colindex="7" class="">Action</th>
              </tr>
              </thead>
              <!---->
              <tbody role="rowgroup" class="">
              <!---->
              <tr aria-rowindex="1" role="row" class="" v-for="borrower in borrowerModule" :key="borrower.id">

                <td role="cell" aria-colindex="1" class="">{{borrower.first_name}} </td>
                <td role="cell" aria-colindex="2" class=""> {{borrower.middle_name}} </td>
                <td role="cell" aria-colindex="3" class=""> {{borrower.last_name}}</td>
                <td role="cell" aria-colindex="4" class="">{{borrower.tool_name}}</td>

                <td role="cell" aria-colindex="5" class="">
                  <span v-if="borrower.status == 'Borrowed' " class="badge badge-warning">{{borrower.status}}</span>
                  <span v-if="borrower.status == 'Returned' " class="badge badge-success">{{borrower.status}}</span>
                </td>
                <td role="cell" aria-colindex="6" class=""> {{borrower.created_at}} </td>
                <td role="cell" aria-colindex="7" class=""> {{borrower.updated_at}}</td>

                <td role="cell" v-if="borrower.status == 'Borrowed' " aria-colindex="7" class="" @click="markReturned(borrower.id)"> Mark Returned</td>
                <td role="cell" v-if="borrower.status == 'Returned' " aria-colindex="7" class=""> </td>

              </tr>

              <!---->
              <!---->
              </tbody>
            </table>
          </div>
          <!--<nav>-->
            <!--<ul role="menubar" aria-disabled="false" aria-label="Pagination" class="pagination b-pagination pagination-md">-->
              <!--&lt;!&ndash;&ndash;&gt;-->
              <!--<li role="none presentation" aria-hidden="true" class="page-item disabled">-->
                <!--<span role="menuitem" aria-label="Go to previous page" aria-disabled="true" class="page-link">Prev</span>-->
              <!--</li>-->
              <!--&lt;!&ndash;&ndash;&gt;-->
              <!--<li role="none presentation" class="page-item active">-->
                <!--<a role="menuitemradio" aria-label="Go to page 1" aria-checked="true" aria-posinset="1" aria-setsize="3" tabindex="0" target="_self" href="#" class="page-link">1</a>-->
              <!--</li>-->
              <!--<li role="none presentation" class="page-item">-->
                <!--<a role="menuitemradio" aria-label="Go to page 2" aria-checked="false" aria-posinset="2" aria-setsize="3" tabindex="-1" target="_self" href="#" class="page-link">2</a>-->
              <!--</li>-->
              <!--<li role="none presentation" class="page-item">-->
                <!--<a role="menuitemradio" aria-label="Go to page 3" aria-checked="false" aria-posinset="3" aria-setsize="3" tabindex="-1" target="_self" href="#" class="page-link">3</a>-->
              <!--</li>-->
              <!--&lt;!&ndash;&ndash;&gt;-->
              <!--<li role="none presentation" class="page-item">-->
                <!--<a role="menuitem" tabindex="-1" aria-label="Go to next page" target="_self" href="#" class="page-link">Next</a>-->
              <!--</li>-->
              <!--&lt;!&ndash;&ndash;&gt;-->
            <!--</ul>-->
          <!--</nav>-->
        </div>
        <!---->
        <!---->
      </div>
    </div>
    <p v-for="event in borrowerModule.events" :key="event.borrowers"> {{event.borrowers}}</p>
  </div>
</template>

<script>

import {mapState,mapActions} from 'vuex';

export default {
  name: 'dashboard',

  data() {
    return {
      datee:'1',

    }
  },
  created() {
    this.$store.dispatch('fetchBorrowersAction',{});
  },
  // computed:mapState(['borrowerModule']),

  computed: mapState({
    borrowerModule : state => state.borrowerModule.borrowers
  }),

 methods:{
    addForm:function(){
      this.$router.push({
        name: 'add-form-borrower'
      })
  },

  markReturned:function ($id) {
    // alert($id)

    this.$store.dispatch('markAsReturnedAction',$id);
    this.$store.dispatch('fillterByDateAction',this.datee);
  },

   filterDate:function () {
    this.$store.dispatch('fillterByDateAction',this.datee)
   }

 }

}
</script>


<style>
  /* IE fix */
  #card-chart-01, #card-chart-02 {
    width: 100% !important;
  }
</style>
<!--https://codebeautify.org/htmlviewer/-->
