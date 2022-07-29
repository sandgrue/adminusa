// eslint-disable-next-line import/no-anonymous-default-export
export default {
    email: {
        required: "Please enter a valid email.",
        invalid: "Incorrect email. Please try again.",
        usingLoginMail: "Your own email is not allowed.",
        emailMembers: "Please enter a valid email.",
        apple:
            "You have hidden your Email ID from apple account, please unhide it and register again.",
        google:
            "You have hidden your Email ID from google account, please unhide it and register again.",
    },
    referralCodeCheck: {
        required: "Please first check referral code.",
    },
    password: {
        required: "Please enter password.",
        newPassword: "Please enter new password.",
        invalid: "Incorrect password. Please try again.",
        oldPassword: "Please enter current password.",
        confirmNewPassword: "Passwords don't match. Please try again.",
        passwordPattern:
            "Password should be min 8 characters long with one special character, number, lower and upper case letter.",
        // same: 'Mismatch new password and confirm new password.',
        same: "Password does not match.",
        spaceAvoid: "Incorrect password. Please try again.",
    },
    emailCheck: {
        required: "Please enter Email.",
        newEmail: "Please enter new Email.",
        invalid: "Incorrect email. Please try again.",
        oldEmail: "Please enter current Email.",
        confirmNewEmail: "Email don't match. Please try again.",
        emailPattern: "Email is not in correct format.",
        // same: 'Mismatch new password and confirm new password.',
        same: "Emails does not match.",
        spaceAvoid: "Incorrect email. Please try again.",
        sameMail: "Cannot enter old Email.",
    },
    firstName: {
        required: "Please enter first name.",
        alphaOnly: "First name can only contain alphabets.",
    },
    lastName: {
        required: "Please enter last name.",
        alphaOnly: "Last name can only contain alphabets.",
    },
    DOB: {
        required: "Please select date of birth.",
        parentGreater18: "Sorry, you need to be over 18 to become a parent.",
        partnerGreater13: "Sorry, you need to be over 15 to become a partner.",
    },

    parentFirstName: {
        // required: "Please enter parent first name.",
        // alphaOnly: "Parent first name could only contains alphabets.",
        required: "Please enter first name.",
        alphaOnly: "First name could only contains alphabets.",
    },
    parentLastName: {
        // required: "Please enter parent last name.",
        // alphaOnly: "Parent last name can only contain alphabets.",
        required: "Please enter last name.",
        alphaOnly: "Last name can only contain alphabets.",
    },
    parentEmail: {
        // required: "Please enter parent email.",
        // invalid: "Incorrect email. Please try again.",
        required: "Please enter email.",
        invalid: "Incorrect email. Please try again.",
    },
    parentName: {
        required: "Please enter parent's first name.",
        alphaOnly: "Parent's first name could only consist alphabets.",
    },

    parentLName: {
        required: "Please enter parent's last name.",
        alphaOnly: "Parent's last name can only contain alphabets.",
    },
    displayName: {
        required: "Please enter display name.",
        alphaOnly: "First name can only contain alphabets.",
    },
    otherBusinessCategory: {
        required: "Please enter the other business category.",
        alphaOnly: "Business category can only contain alphabets.",
    },
    BusinessCategory: {
        required: "Please enter business category.",
    },
    zipCode: {
        required: "Please enter a valid zip code.",
        invalid: "Please enter a valid zip code.",
    },
    phoneNumber: {
        required: "Please enter phone number.",
        invalid: "Please enter a valid phone number.",
    },
    gender: {
        required: "Please select gender.",
    },
    uploadImage: { required: "Please upload thumnail image." },
    day: { required: "Please select day." },
    month: { required: "Please select month." },
    year: { required: "Please select year." },
    DOBDay: { required: "Select day." },
    DOBMonth: { required: "Select month." },
    DOBYear: { required: "Select year." },
    city: { required: "Please enter city." },
    state: { required: "Please enter state." },
    country: { required: "Please enter country." },

    streetAddress: { required: "Please enter street address." },

    summary: { required: "Please enter summary." },
    instituteName: { required: "Please enter school name." },
    CinstituteName: { required: "Please enter college name." },
    institute: { required: "Please enter school name." },
    startDate: { required: "Please select date." },
    endDate: { required: "Please select date." },
    title: { required: "This field is required." },
    description: { required: "Please enter description." },
    competency: { required: "Please select focus area" },
    importance: { required: "Please select achievement level." },
    skills: { required: "Please select skills." },
    socialLinks: { required: "Please select platform." },
    fromYear: {
        required: "Please select year.",
        less: "From date should be smaller than To date.",
    },
    toYear: {
        required: "Please select year.",
        greater: "To date should not be less than from date.",
        sameFromYear: "Please review and confirm the dates below.",
    },
    fromGrade: {
        required: "Please select grade.",
        greater: "To grade should not be less than from grade.",
    },
    toGrade: { required: "Please select grade." },
    request: { required: "Please enter your request." },
    summaryText: { required: "Please enter something" },
    recommendation: {
        required: "Please enter Recommendation.",
        recommenderFile: {
            // required: "Please select File.",
            required: "",
            filesize: "Please select file size less than 10 mb.",
            filetype: "supported format pdf and doc only",
        },
        recommenderFirstName: {
            required: "Please enter first name.",
            alphaOnly: " First name can only contain alphabets.",
        },
        recommenderLastName: {
            required: "Please enter last name.",
            alphaOnly: "Last name can only contain alphabets.",
        },
        recommenderTitle: {
            required: "Please enter title.",
        },
        // recommendationRequest:{
        //   required: 'Please enter request'
        // },
        recommenderEmail: {
            required: "Please enter a valid email.",
            invalid: "Incorrect email. Please try again.",
        },
        recommendationTitle: {
            required: "Please enter recommendation title.",
        },
        recommendationRequest: {
            required: "Please enter your request.",
        },
        competencyLevel: {
            required: "Please select focus area.",
        },
        competencyLevel1: {
            required: "Please select Focus Area 1.",
        },
        competencyLevel2: {
            required: "Please select Focus Area 2.",
        },
        competencyLevel3: {
            required: "Please select Focus Area 3.",
        },

        fromDate: {
            required: 'Please select "start date".',
        },
        toDate: {
            required: 'Please select "end date".',
        },
        skills: {
            required: "Please select applicable skills.",
        },
    },
    addToStory: {
        step3: {
            title: {
                required: "Please enter title.",
            },
            description: {
                required: "Please enter description.",
            },
            personalReflection: {
                required: "Please enter personal reflection.",
            },
            level3CompetencyName: {
                required: "Please select focus area",
            },
            recommendationRequest: {
                required: "Please enter your request.",
            },
            skills: {
                required: "Please select applicable skills.",
            },
            achievementLevel: {
                required: "Please select achievement level.",
            },
            fromDate: {
                required: 'Please select "from date".',
            },
            toDate: {
                required: 'Please select "to date".',
            },
        },
    },
    editAccomplishment: {
        firstName: {
            required: "Please enter first name.",
            alphaOnly: "First name could only consist alphabets.",
        },
        lastName: {
            required: "Please enter last name.",
            alphaOnly: "Last name can only contain alphabets.",
        },
        email: {
            required: "Please enter a valid email.",
            invalid: "Please enter correct email.",
        },
        designationTitle: {
            required: "Please enter title.",
        },
        recommendationRequest: {
            required: "Please enter title.",
        },
        description: {
            required: "Please enter description.",
        },
        personalReflection: {
            required: "Please enter personal reflection.",
        },
        competencyLevel: {
            required: "Please select focus area",
        },
        skills: {
            required: "Please select applicable skills.",
        },
        achievementLevel: {
            required: "Please select achievement level.",
        },
        fromDate: {
            required: 'Please select "from date".',
        },
        toDate: {
            required: 'Please select "to date".',
        },
        skills: { required: "Please select skills." },
    },
    step3: {
        firstName: {
            required: "Please enter first name.",
            alphaOnly: "First name can only contain alphabets.",
        },
        lastName: {
            required: "Please enter last name.",
            alphaOnly: "Last name can only contain alphabets.",
        },
        email: {
            required: "Please enter a valid email.",
            invalid: "Please enter correct email.",
        },
        recommendationTitle: {
            required: "Please enter title.",
        },
        designationTitle: {
            required: "Please enter title.",
        },
    },
    companyName: { required: "Please enter the company or a display name." },
    companyAddress: { required: "Please enter the company or your address." },
    SocialURL: {
        required: "Please add url.",
        invalid: "URL not valid. Please try again.",
    },
    websiteURL: { required: "Please enter a valid website url." },
    URLOfDocument: { required: "Please enter a valid Doc url." },
    aboutCompany: {
        required: "Please enter details about your company and service.",
    },
    reason: { required: "Please enter reason." },
    problem: { required: "Please select a problem to continue." },
    birthDate: { required: "Please select your date of birth." },
    groupName: { required: "Please enter group name." },
    aboutGroup: { required: "Please enter group motive." },
    passwordPattern:
        "Please select a new password: Password should be min 8 characters long with one special character, number, lower and upper case letter.",
    createOpportunity: {
        jobTitle: { required: "Please enter job title." },
        jobType: { required: "Please enter job type." },
        jobLocation: { required: "Please enter job location." },
        describeRole: { required: "Please describe the role." },
        description: { required: "Please enter description." },
        timeZone: { required: "Please provide timezone." },
        mentor: { required: "Please upload your photo" },
        fromDate: {
            required: 'Please select "start date".',
        },
        toDate: {
            required: 'Please select "end date".',
        },
        eDate: {
            required: "Please enter expiration Date.",
        },
        callToActionValue: {
            required:
                "Please select the type of call to action: This shows up as a button next to your opportunity posting.",
        },
        linkURL: { required: "Please insert link." },
        ChooseGroup: {
            required: "Please select a group.",
            existingGroup: "Please select a group.",
            createGroup: "Please create a group.",
        },
        callNow: { required: "Please enter number." },
        media: { required: "Select one photo or video." },
        targetError: {
            required: "Please select at least one filter for targeting audience.",
        },
        level: {
            required: "Please select the options.",
        },
        myTitle: { required: "Title required." },
        tutorCategories: { required: "Please select category" },
        otherTutorCategory: {
            required: "Please enter other category.",
            alphaOnly: "Other category can only contain alphabets.",
        },
        otherCarrerCategory: {
            required: "Please enter career.",
            alphaOnly: "Career can only contain alphabets.",
        },
        otherSubjectCategory: {
            required: "Please enter other subject.",
            alphaOnly: "Other subject can only contain alphabets.",
        },
        otherQualificationCategory: {
            required: "Please enter other qualification.",
            alphaOnly: "Other qualification can only contain alphabets.",
        },
        subjectsValue: { required: "Please select subject" },
        qualificationsValue: { required: "Please select qualification" },
        fees: {
            required: "Please enter fee's for your service. If free, leave it as $0.",
        },
        bio: { required: "Please enter your bio" },
        projectArea: { required: "Please enter project area" },
        day: { required: "Please enter your availability." },
        menteeSupport: { required: "Please select mentee support" },
        advisorySupport: { required: "Please select advisory support" },
        timeFrom: {
            required: "Please enter the time of your availability.",
            less: "From Time should be smaller than to Time.",
        },
        timeTo: { required: "Please enter the time of your availability." },
    },
    Name: {
        required: "Please enter name.",
        alphaOnly: "Name can only have alphabets.",
    },
    ExistingGroups: {
        required: "Please select atleast one group to share.",
    },
    offering: { required: "Please select at least 1 offering." },
    student: { required: "Please select student." },
    externalLink: {
        labelRequired: "Please enter label",
        urlRequired: "Please enter URL",
        urlValid: "Please enter a valid url.",
        descriptionRequired: "Please enter description",
    },
    otherCategory: { required: "Please enter the other category" },
    artistStatement: { required: "Please enter the artist statement" },
    Age: { required: "Please select your age group." },
    Title: { required: "Title is required." },
    Address: { required: "Address is required." },
    City: { required: "City name is required." },
    County: { required: "County name is required." },
    LicenseFee: { required: "License Fee is required." },
    COnfLicense: { required: "Confedential License Fee is required." },
    Lati: { required: "Latitude is required." },
    Long: { required: "Longitude is required." },
    Phone: { required: "Phone Number is required." },
    StateAbb: { required: "State Abbreviation is required." },
    Zip: { required: "Zip Code is required." },
    Starttime: { required: "Start Time is required." },
    Endtime: { required: "End Time is required." },
    Availdays: { required: "Available Days string is required." },

};
