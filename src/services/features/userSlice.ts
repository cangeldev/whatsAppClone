import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface UserState {
    UserInfo: {
        phoneNumber: string,
        profileName: string,
        profileImage: null,
        code: string,
        verificationId: null
    },
}

const initialState: UserState = {
    UserInfo: {
        phoneNumber: "",
        profileName: "",
        profileImage: null,
        code: "",
        verificationId: null
    }
}

export const userSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {

        setNumber: (state, action: PayloadAction<string>) => {
            state.UserInfo.phoneNumber = action.payload
        },
        setProfileName: (state, action: PayloadAction<string>) => {
            state.UserInfo.profileName = action.payload
        },
        setProfileImage: (state, action: PayloadAction<any>) => {
            state.UserInfo.profileImage = action.payload
        },
        setCode: (state, action: PayloadAction<any>) => {
            state.UserInfo.code = action.payload
        },
        setVerificationId: (state, action: PayloadAction<any>) => {
            state.UserInfo.verificationId = action.payload
        }
    }
})

export const { setNumber, setProfileImage, setProfileName, setCode, setVerificationId } = userSlice.actions
export default userSlice.reducer