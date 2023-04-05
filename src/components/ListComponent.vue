<template>
    <div class="justify-content-center">
        <!-- Display student list -->
        <h1>Show Students</h1>
        <div class="row">
            <div class="col-md-12">
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead class="table-dark">
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Full Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="student in Students" :key="student.blogUserId">
                                <td>{{ student.username }}</td>
                                <td>{{ student.email }}</td>
                                <td>{{ student.fullName }}</td>
                                <td>
                                    <router-link :to="{name: 'edit', params: {id: student.blogUserId}}"
                                    class="btn btn-success me-2">
                                        Edit
                                    </router-link>
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
            'Authorization': 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJqdGkiOiI3YTZkYTIyMy1jNzJhLTRkZTUtYWVlNy00NGJkZTI4ODhiMTEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTY4MDY4NjU5NCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzE4NSIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjcxODUifQ.uEoq902Trf0rn16GGpG9pgZ0ZiprJXhtn-LYfaY0PxaDPkSK1AiyGoNPFEsqeDVsiyzI_5fdEcu0AHN0Wf2T4g',
        }

        let apiURL = 'https://localhost:44303/api/Admin/ListUser';
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