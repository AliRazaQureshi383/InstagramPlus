import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://whatsappweb.herokuapp.com/',
  }),
  endpoints: builder => ({
    getAllPost: builder.query({
      query: token => {
        let value = token.data3;

        return {
          url: 'dependent/bookingList',
          method: 'GET',

          headers: {
            Authorization: `Bearer ${value}`,
          },
        };
      },
    }),
    bookingDetails: builder.query({
      query: recive => {
        let auth = recive.data.tokenValue;
        let id = recive.data.recivedUserId;

        console.log('auth', auth);

        return {
          url: 'dependent/booking_detail',
          method: 'POST',

          headers: {
            Authorization: `Bearer ${auth}`,
          },

          body: {
            booking_id: id,
          },
        };
      },
    }),
    createPost: builder.mutation({
      query: newPost => {
        return {
          url: 'sign_in',
          method: 'POST',
          body: newPost,
        };
      },
    }),
    signIn: builder.mutation({
        query: recive => {
          console.log('recive', recive);
          let first_name = recive.first_name;
          let email = recive.email;
          let password = recive.password;

  
        //   console.log('auth', auth);
  
          return {
            url: 'users',
            method: 'POST',
  
            headers: {
              // Authorization: `Bearer ${auth}`,
              Accept: 'application/json',
             'Content-Type': 'application/json',
            },
  
            body: {
                user: {
                    first_name,
                    email,
                    password,
                    password_confirmation:password
                }
            },
          };
        },
      }),

      LogIn: builder.mutation({
        query: recive => {
          console.log('recive', recive);
          let email = recive.username;
          let password = recive.password;

  
        //   console.log('auth', auth);
  
          return {
            url: 'authenticate',
            method: 'POST',
  
            headers: {
              // Authorization: `Bearer ${auth}`,
              // Accept: 'application/json',
             'Content-Type': 'application/json',
            },
  
            body: {
              
                    email,
                    password,
                
            },
          };
        },
      }),

      MarketListings: builder.query({
        query: recive => {
          console.log('recive==??-w', recive);
  
  
          return {
            url: 'listings',
            method: 'GET',
  
            headers: {
               Authorization: `${recive}`,
              'Content-Type': 'application/json',
               Accept: 'application/json'
            }
          };
        },
      }),


      PostListings: builder.mutation({
        query: recive => {
          console.log('recive', recive);
          let auth = recive.token;
          let title = recive.title;  
          let description = recive.description;  
          let user_id = recive.user_id;  


          console.log('recive', auth, title,  description, user_id);
  
          return {
            url: 'listings',
            method: 'POST',
  
            headers: {
              Authorization: `${auth}`,
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
  
            body: {

              listing :{

                title : title,
                description : description,
                user_id : user_id

              }
              
                
            },
          };
        },
      }),




  }),
});

export const {
  useGetAllPostQuery,
  useCreatePostMutation,
  useBookingDetailsQuery,
  useSignInMutation,
  useLogInMutation,
  useMarketListingsQuery,
  usePostListingsMutation
} = postApi;