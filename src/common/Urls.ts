/**
 * API and Render url defined
 */
export const RENDER_URL = {
    HOME_URL: '/',
    GUEST_DASHBOARD: '/guest-dashboard',
    LOGIN_URL: "/auth",
    REGISTER_URL: "/register",
    STUDENT_DASHBOARD: '/student-dashboard',
    STUDENT_ONBOARD: '/student-onboard',
    STUDENT_UPDATES: '/student-updates',
    STUDENT_NUTRI_SWAP: '/nutri-swap',
    STUDENT_PROFILE: '/student-profile',
    DAILY_UPDATES: "/dailyUpdates",
    WEEKLY_UPDATES: "/weeklyUpdates",
    VIEW_DAILY_UPDATES: "/myDailyUpdates",
    VIEW_WEEKLY_UPDATES: "/myWeeklyUpdates",
    VIEW_WEEKLY_UPDATES_PHOTOS: "/myWeeklyPhotos",
    VIEW_DIET_PLAN: "/mDietPlan",
    VIEW_CLIENT: "/viewClient",
    ADD_MENU: "/addmenu",
    WHY_MAVEN: '/why-studiemaven',
    SERVICES: '/services',
    COURSES: '/courses',
    COUNTRIES: '/countries',
    REFERAL: '/refereal',
    CONTACT: '/contact',
    ADMIN_DASHBOARD: '/admin-dashboard',
    ADMIN_ADD_DIET: '/add-diet',
    ADMIN_UPDATES: '/admin-updates',
    ADMIN_ANALYTICS: '/admin-analytics',
    ADMIN_TARGETS: '/admin-targets',
    ADMIN_COACH_MANAGE: '/admin-coach-manage',
    ADMIN_NUTRISWAP: '/admin-nutriswap',
    ADMIN_SETTINGS: '/admin-settings',
    ADMIN_CLIENT_MANAGEMENT: '/admin-client-manage',
    VIEW_STUDENT: '/student',
    DATA_MANAGEMENT: '/data-management',
    STAFFS: '/staffs',
    LEADS: '/leads',
    ACTIONS: '/actions',
    RESET_PASSWORD: '/reset-password',
    UNIVERSITY: '/university'
};


export const API_URL = {
    REGISTRATION: "/user/register",
    LOGIN: "/user/login",
    VALIDATE_TOKEN_USERTYPE: "/user/validatetoken",
    GET_COACH_DETAILS: '/user/getCoachDetails',
    ONBOARD_PROFILE_ATTRIBUTE_UPDATE: "/user/userOnBoardUpdatesProfile",
    ONBOARD_FILE_UPLOAD: "/user/userOnBoardFileUpload",
    USERLIST: "/user/getAllUserDetails",
    USER_LIST_FOR_COACH: "/user/getAllUserListForCoach",
    USER_LIST_DUPDATES_FOR_COACH: "/user/getAllUserListWithUpdates",
    USER_LIST_WUPDATES_FOR_COACH: "/user/getAllUserListWithWeeklyUpdates",
    APPROVE_USER: "/user/approveuser",
    DAILY_UPADTE: "/student/dailyStudentUpdates",
    WEEKLY_UPDATES: '/student/weeklyStudentUpdates',
    GET_WEEKLY_UPDATES: "/student/getStudentWeeklyUpdate",
    GET_SIMPLE_GRAPH: "/student/getStudentGraphData",
    GET_WEEKLY_GALLERY: "/student/getStudentGallery",
    GET_DIET_PLAN: "/student/getStudentInstructionPlan",
    ADD_DIET_PLAN: "/student/updateDietPlan",
    IS_SUPER_ADMIN : "/user/isSuperAdmin",
    ADD_COACH: "/user/addUpdateCoachDetails",
    GET_COACHALL_LIST: "/user/getAllCoachList",
    ASSIGN_COACH_STUDENT : "/user/assignCoachToStudent",
     ASSIGNED_COACH_LIST : "/user/getAllCoachAssignedUser",
    GET_PROFILE_DETAILS: "/student/getStudentProfile",
    GET_SINGLE_DAY: '/student/getSingleDayUpdate',
    GET_DAILY_UPDATES: '/student/getStudentUpdate',
    SET_FOOD:'/student/addNutriFood',
    GET_FOOD_CATERGORY_BASEDLIST: '/student/getAllFoodAvailable',
    GET_FOOD_SWAPPED: '/student/getAlternativeNutri',
    GET_DAILY_UPDATES_FORWEEK: '/student/getDailyUpdatesForAWeek',
    GET_NOTES: '/student/getLeadNotes',
    ADD_NOTES: '/student/updateLeadNotes',
    UPDATE_IELTS: '/student/updateLeadIELTS',
    GET_STAFFS: '/user/getAllStaffByID',
    ADD_STAFFS: '/user/addStaff',
    UPDATE_LEAD: '/student/updateLeadInfo',
    ADD_COUNTRY: '/document/addCountry',
    GET_COUNTRIES: '/document/getAllCountryList',
    UPDATE_COUNTRY: '/document/updateCountry',
    SEARCH_LEADS: '/student/searchLead',
    CONVERT_LEADS: '/student/convertLead',
    GET_STUDENTS: '/student/getOnGoingApplications',
    GET_PAYMENT_STATUS: '/document/getAllPaymentStatusType',
    ADD_PAYMENT_STATUS: '/document/addPaymentStatusType',
    GET_ALL_COLORS: '/document/getAllColors',
    ADD_COLOR: 'document/addColor',
    UPDATE_COLOR: 'document/updateColor',
    GET_STATUS: '/document/getAllStatusType',
    ADD_STATUS: '/document/addStatus',
    GET_VISA_STATUS: '/document/getAllVisaStatusType',
    ADD_VISA_STATUS: '/document/addVisaStatusType',
    UPDATE_VISA_STATUS: '/document/getAllVisaStatusType',
    GET_AGENTS: '/document/getAllAgent',
    ADD_AGENT: '/document/addAgent',
    UPDATE_AGENT: '/document/addAgent',
    GET_UNIVERSITY: '/document/getAllUni',
    ADD_UNIVERSITY: '/document/addUni',
    UPDATE_UNIVERSITY: '/document/updateUni',
    ADD_STUDENT: '/student/addApplication',
    GET_DOCLIST: '/document/getAllDocumentTypes',
    ADD_DOCTYPE: '/document/addDocumentType',
    SEARCH_STUDENTS: '/student/searchApplication',
    UPLOAD_PROFILE: '/student/uploadprofile',
    GET_ALL_DOCUMENTS: '/student/getAllRelatedDocuments',
    ADD_NEW_DOCUMENTS: '/student/getAllRelatedDocuments',
    UPLOAD_DOCUMENT: '/student/uploaddocuments',


}
