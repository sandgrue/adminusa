import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import ValidationMessages from '../Validation/ValidationMessages';
import { isItNull } from '../../containers/functions';

let validateInput = (data) => {

    // console.log(data);

    let errors = {};
    if (isItNull(data.title)) {
        errors.title = ValidationMessages.Title.required;
    }


    if (isItNull(data.address)) {
        errors.address = ValidationMessages.Address.required;
    }

    if (isItNull(data.city_name)) {
        errors.city_name = ValidationMessages.City.required;
    }




    if (isItNull(data.county_name)) {
        errors.county_name = ValidationMessages.County.required;
    }


    if (isItNull(data.license_fee)) {
        errors.license_fee = ValidationMessages.LicenseFee.required;
    }


    if (isItNull(data.confidential_license_fee)) {
        errors.confidential_license_fee = ValidationMessages.COnfLicense.required;
    }






    if (isItNull(data.lat_long)) {
        errors.lat = ValidationMessages.Lati.required;
        errors.lng = ValidationMessages.Long.required;
    }

    else {
        if (isItNull(data.lat_long[0])) {
            errors.lat = ValidationMessages.Lati.required;
        }
        if (isItNull(data.lat_long[1])) {
            errors.lng = ValidationMessages.Long.required;
        }
    }










    if (isItNull(data.phone)) {
        errors.phone = ValidationMessages.Phone.required;
    }


    if (isItNull(data.state_abbr)) {
        errors.state_abbr = ValidationMessages.StateAbb.required;
    }

    if (isItNull(data.zip_code)) {
        errors.zip_code = ValidationMessages.Zip.required;
    }


    if (isItNull(data.start_time) || data.start_time === 'HH:MM AM') {
        errors.start_time = ValidationMessages.Starttime.required;
    }

    if (isItNull(data.end_time) || data.end_time === 'HH:MM AM') {
        errors.end_time = ValidationMessages.Endtime.required;
    }


    if (isItNull(data.available_days)) {
        errors.available_days = ValidationMessages.Availdays.required;
    }



    // console.log(data, errors, "DATA 13");

    return {
        errors,
        isValid: isEmpty(errors)
    };
}

export default validateInput;