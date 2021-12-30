import { AnyAction } from 'redux'
import { HYDRATE } from 'next-redux-wrapper';



export interface UserState {
    loadding: boolean;
    payload: {};
    error: string;
    UserAddress: string;
    verify: number;
    NickName: string;
    Address: string;
    Email: string;
    signupBool: boolean;
    userList: Array<any>;
    loginBool: boolean;
    nicknameChkBool: boolean;
    userInfo: {};
    userIdx: number;
    emailBool: boolean;
    adminApproval: number;
    emailValidation: boolean;
    sellerBool : boolean;
    itemcode: string;
    check: boolean;
    data: any
}

export const initialState: UserState = {
    loadding: false,
    payload: {},
    error: '32523523',
    UserAddress: 'kaikasAddress',
    verify: 0,
    NickName: '',
    Address: '',
    Email: '',
    signupBool: false,
    userList: [],
    loginBool: false,
    nicknameChkBool: false,
    userInfo: {},
    userIdx: 0,
    emailBool: false,
    adminApproval: 0,
    emailValidation: false,
    sellerBool : false,
    itemcode: '',
    check: false,
    data: []
};



export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST" as const;
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS" as const;
export const USER_LOGIN_ERROR = "USER_LOGIN_ERROR" as const;



/* User Login req */
export const UserLogin_REQUEST = (UserAddress) => {
    return {
        type: USER_LOGIN_REQUEST,
        data: UserAddress,
        loginBool: false,
    }
}
export const UserLogin_SUCCESS = (data) => {
    return {
        type: USER_LOGIN_SUCCESS,
        //data: klaytnAddress.UserAddress
        loginBool: true,
        UserAddress: data.UserAddress,
        signupBool: data.signupBool,
        userIdx: data.userIdx,
        adminApproval: data.adminApproval,
        sellerBool: data.sellerBool,
    }
}
export const UserLogin_ERROR = (data) => {
    return {
        type: USER_LOGIN_ERROR,
        //error: error,
        signupBool: data.signupBool,

    }
}






type UserAction =
    | ReturnType<typeof UserLogin_REQUEST>
    | ReturnType<typeof UserLogin_SUCCESS>
    | ReturnType<typeof UserLogin_ERROR>


const reducer = (state: UserState = initialState, action: UserAction) => {
    switch (action.type) {
        /********* */
        case USER_LOGIN_REQUEST:
            return {
                ...state,
                UserAddress: action.data
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                //data: action.data
                loginBool: true,
                UserAddress: action.UserAddress,
                signupBool: action.signupBool,
                userIdx: action.userIdx,
                adminApproval: action.adminApproval,
                sellerBool : action.sellerBool
            }

        case USER_LOGIN_ERROR:
            return {
                ...state,
                //data: action.error
                signupBool: action.signupBool
            }
        default:
            return state;
    }
}

export default reducer