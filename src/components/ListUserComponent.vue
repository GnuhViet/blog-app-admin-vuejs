<template>
    <div class="justify-content-center">
        <!-- Display student list -->
        <h1>Show User</h1>
        <div class="row">
            <div class="col-md-12">
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead class="table-dark">
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Full Name</th>
                                <th>Bài viết</th>
                                <th>Bình luận</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="student in Students" :key="student.blogUserId">
                                <td>{{ student.username }}</td>
                                <td>{{ student.email }}</td>
                                <td>{{ student.fullName }}</td>
                                <td>
                                    <router-link :to="{name: 'ListArticle', params: {id: student.blogUserId }}"
                                    class="btn btn-success me-2">
                                        Danh sách
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="{name: 'edit', params: {id: student.blogUserId}}"
                                    class="btn btn-success me-2">
                                        Danh sách
                                    </router-link>
                                </td>
                                <td>
                                    <button @click.prevent="deleteStudent(student.blogUserId)"
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
            Students: []
        }
    },
    created() {
        const headers = {
            'Authorization': 'Bearer ' + sessionStorage.getItem("JWT"),
        }

        let apiURL = 'https://localhost:7185/api/Admin/User';
        axios.get(apiURL, {headers: headers}).then(res => {
            this.Students = res.data
        }).catch(error => {
            console.log(error)
        })
    },
    methods: {
        deleteStudent(id) {
            let apiURL = `http://localhost:4000/api/delete-student/${id}`;
            let indexOfArrayItem = this.Students.findIndex(i => i._id === id);

            if (window.confirm("Do you really want to delete?")) {
                axios.delete(apiURL).then(() => {
                    this.Students.splice(indexOfArrayItem, 1)
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
}
</script>