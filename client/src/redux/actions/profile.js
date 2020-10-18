import axios from "axios";
import { setAlert } from "./alert";

import {
   CLEAR_PROFILE,
   GET_PROFILE,
   GET_PROFILES,
   PROFILE_ERROR,
   UPDATE_PROFILE,
} from "./types";

// Get the current user profile
export const getCurrentProfile = () => async (dispatch) => {
   try {
      const res = await axios.get("/api/v1/profile/");
      // console.log("Current profile", res);
      dispatch({
         type: GET_PROFILE,
         payload: res.data,
      });
   } catch (err) {
      dispatch({
         type: PROFILE_ERROR,
         payload: { msg: err.response.statusText, status: err.response.status },
      });
   }
};

// Get all profiles
export const getProfiles = () => async (dispatch) => {
   // Clear Single user profile before get all profiles
   dispatch({
      type: CLEAR_PROFILE,
   });

   try {
      const res = await axios.get("/api/v1/profile/all");
      console.log("Current profile", res.data);
      dispatch({
         type: GET_PROFILES,
         payload: res.data,
      });
   } catch (err) {
      dispatch({
         type: PROFILE_ERROR,
         payload: { msg: err.response.statusText, status: err.response.status },
      });
   }
};

// Get all profile by ID
export const getProfileById = (userId) => async (dispatch) => {
   try {
      const res = await axios.get(`/api/v1/profile/${userId}`);
      // console.log("Current profile", res);
      dispatch({
         type: GET_PROFILE,
         payload: res.data,
      });
   } catch (err) {
      dispatch({
         type: PROFILE_ERROR,
         payload: { msg: err.response.statusText, status: err.response.status },
      });
   }
};

// Create or update a profile
export const createProfile = (formData, history, edit = false) => async (
   dispatch
) => {
   try {
      let res = await axios.post("/api/v1/profile/create-profile", formData);
      // console.log("Profile Creation", res);
      // console.log("Create profile token", localStorage.token);

      // console.log("Header", axios.defaults.headers.common["Authorization"]);

      dispatch({
         type: GET_PROFILE,
         payload: res.data,
      });

      if (res) {
         dispatch(setAlert(edit ? "Job Updated" : "Job Posted", "success"));
      }

      if (!edit) {
         history.push("/dashboard");
      }
   } catch (err) {
      console.log("Profile Creation Error", err.response.data);

      if (err) {
         dispatch(setAlert(err.response.data.message, "danger"));
      }
      dispatch({
         type: PROFILE_ERROR,
         payload: { msg: err.response.statusText, status: err.response.status },
      });
   }
};
