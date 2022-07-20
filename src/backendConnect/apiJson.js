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
    },    addRecord: {
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
    }
}