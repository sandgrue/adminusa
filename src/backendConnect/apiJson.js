export default {
    login: {
        url: '/admin/login',
        method: "POST",
        data: {
            email: '',
            password: ''
        }
    },
    getAllRecords: {
        url: '/admin/getRecords',
        method: "POST",
        data: {},
        headers: {
            Authorization: ''
        }
    },
    addRecord: {
        url: '/admin/add-content',
        method: "POST",
        data: {
            title: "",
            address: "",
            city_name: "",
            county_name: "",
            license_fee: "",
            confidential_license_fee: "",
            lat_long: [],
            phone: "",
            state_abbr: "",
            zip_code: "",
            start_time: "",
            end_time: "",
            available_days: ""
        },
        headers: {
            Authorization: ''
        }
    },
    getRecordWithId: {
        url: '/admin/get-content?_id=:agencyID',
        method: "GET",
        data: {},
        headers: {
            Authorization: ''
        }
    },
    editRecordWithId: {
        url: '/admin/update-content',
        method: "PUT",
        data: {
            _id: '',
            title: '',
            address: '',
            city_name: '',
            county_name: '',
            license_fee: '',
            confidential_license_fee: '',
            lat_long: [],
            phone: '',
            state_abbr: '',
            zip_code: '',
            start_time: '',
            end_time: '',
            available_days: ''
        },
        headers: {
            Authorization: ''
        }
    }
}



// created_At: "2022-07-21T07:27:16.506Z"
// created_By: "admin"
// id: 1
// updated_At: "2022-07-21T07:27:16.506Z"
// updated_By: "user"



