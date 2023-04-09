<template>
  <div class="justify-content-center">
      <!-- Display student list -->
      <h1>Articles</h1>
      <div class="row">
          <div class="col-md-12">
              <div class="table-responsive">
                  <table class="table table-striped">
                      <thead class="table-dark">
                          <tr>
                            <th>Title</th>
                            <th>Date Created</th>
                            <th>Description</th>
                            <th>Action</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr v-for="table_data in table_data" :key="table_data.createByBlogUserId">
                            <td>{{ table_data.title }}</td>
                            <td>{{ table_data.createDate }}</td>
                            <td>{{ table_data.shortDescription }}</td>
                            <td>
                                  <button 
                                     class="btn btn-danger">
                                      Delete
                                    </button>
                                </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  </div>
</template>
  
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        table_data: [],
        
      };
    },
    created() {
    this.testApi();
  },
    methods: {
      testApi() {
      var token = sessionStorage.getItem("JWT");
      const headers = {
        'Authorization': "Bearer " + token,
      }
      let url = `https://localhost:7185/api/Admin/ListArticle/${this.$route.params.id}`;
      axios.get(url, {
        headers: headers,
      })
        .then((res) => {
          console.log(res);
          let resc = res.data;
          this.table_data = resc;
          console.log(this.table_data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

      }
  }
  </script>