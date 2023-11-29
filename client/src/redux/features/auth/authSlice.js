import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';

const initialState = {
    user: null,
    token: null,
    isLoading: false,
    status: null
}

export const registerUser = createAsyncThunk('auth/registerUser', async ({ username, password, email }, { rejectWithValue }) => {
    try {

        console.log('Request data:', { username, password, email });

        const { data } = await axios.post('/auth/register', {
            username,
            password,
            email
        });

        if (data.token) {
            window.localStorage.setItem('token', data.token);
        }

        return data;
    } catch (err) {
        console.error(err);

        if (err.response) {
            console.error('Response data:', err.response.data);
            console.error('Response status:', err.response.status);
            console.error('Response headers:', err.response.headers);
            return rejectWithValue(err.response.data || { message: 'Server error' });
        } else if (err.request) {
            console.error('Request:', err.request);
        } else {
            console.error('Error:', err.message);
        }

        return rejectWithValue({ message: 'Server error' });
    }
});

export const loginUser = createAsyncThunk('auth/loginUser', async ({ username, password}, { rejectWithValue }) => {
    try {

        console.log('Request data:', { username, password });

        const { data } = await axios.post('/auth/login', {
            username,
            password
        });

        if (data.token) {
            window.localStorage.setItem('token', data.token);
        }

        return data;
    } catch (err) {
        console.error(err);

        if (err.response) {
            console.error('Response data:', err.response.data);
            console.error('Response status:', err.response.status);
            console.error('Response headers:', err.response.headers);
            return rejectWithValue(err.response.data || { message: 'Server error' });
        } else if (err.request) {
            console.error('Request:', err.request);
        } else {
            console.error('Error:', err.message);
        }

        return rejectWithValue({ message: 'Server error' });
    }
});

export const me = createAsyncThunk('auth/profile', async (_, { rejectWithValue }) => {
    try {
        console.log('Request data:', {});

        const { data } = await axios.get('/auth/profile');

        return data;
    } catch (err) {
        console.error(err);

        if (err.response) {
            console.error('Response data:', err.response.data);
            console.error('Response status:', err.response.status);
            console.error('Response headers:', err.response.headers);
            return rejectWithValue(err.response.data || { message: 'Server error' });
        } else if (err.request) {
            console.error('Request:', err.request);
        } else {
            console.error('Error:', err.message);
        }

        return rejectWithValue({ message: 'Server error' });
    }
});


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.token = null
            state.isLoading = false
            state.status = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.status = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.status = action.payload.message;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = action.payload.message;
                state.isLoading = false;
            })

            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.status = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.status = action.payload.message;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = action.payload.message;
                state.isLoading = false;
            })

            .addCase(me.pending, (state) => {
                state.isLoading = true;
                state.status = null;
            })
            .addCase(me.fulfilled, (state, action) => {
                state.isLoading = false;
                state.status = null;
                state.user = action.payload?.user;
                state.token = action.payload?.token;
            })
            .addCase(me.rejected, (state, action) => {
                state.status = action.payload.message;
                state.isLoading = false;
            });
    }
});

export const checkIsAuth = state => Boolean(state.auth.token)

export const {logout} = authSlice.actions

export default authSlice.reducer;

