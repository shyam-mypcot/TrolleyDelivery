import React, { useEffect, useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import axios from 'axios';
import { i18Storage } from '../local-data/i18nStorage';
import { LocalizationContext } from '../utils/Localization';

// const LOCALURL = 'https://2cad-110-227-197-199.ngrok-free.app/trolley';
const LOCALURL = 'http://192.168.1.30/trolley';

// const { locale } = useContext(LocalizationContext)!;

const ApiServices = async ({
  
  data,
  url,
  restHeader = {},
}: { data: any, url: string, restHeader: object }) => {
  let locale ='en'
  const headers = {
    'Content-Type': 'multipart/form-data',
    'Accept-Language': 'en',
    'userLanguage': 'en',
    'Authorization': 'Basic bXlwY290LmNvbTpteXBjb3RpbmZvdGVjaA==',
    // 'X-Access-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzM4NCJ9.eyJ1aWQiOiIxNSIsImF1ZCI6Imh0dHA6Ly9teXBjb3QuY29tIiwic2NvcGVzIjpbInVzZXIiXSwiaXNzIjoiaHR0cDovL2FwaS5teXBjb3QuY29tIiwiZXhwIjoxNjg2NTk5NzUyfQ.yAxp_yqmBZUEnTS0sPsVW1dCSSDxMDWoIf2Tik-z-dhHSFqDClxYm1QWOEfvNKkW3QqpHTOncZfJvwFRe3Hzj_hmgwpTvX103nqyANWiRzS9qBDLU6ZLTFql5VsH0R5UcC2ERrtG4TKn6rtL8zvUPe4tGrbwVz6XpRUJZ1yYTrO5DgoFdkXsrsT1yPYQKl5ZU6UZXPkwCGkdXI-o0rAS_vgMLpcNHgmMXimZk2-Z8jI3tsgtr37NITCgkdRVuOjO8H-CQLWm9-hTDrXg7eQJYrbow0pIyzS9DyuvlsTyfiM0vjoW9qD-m0qJ1iba4J5AxQ5I9iSUuq9aqgK9McAHmw', 
    ...restHeader

  };
  const formData = new FormData();
  formData.append('userLanguage', locale);
  for (let key in data) {
    formData.append(key, data[key]);
  }
  const instance = axios.create({
    baseURL: LOCALURL,
    headers,
  });
  

  instance.interceptors.request.use(response => {
    console.log('++++++++++++++++++++++++++++++++++++');
    console.log(JSON.stringify(response, undefined, 4));
    console.log('++++++++++++++++++++++++++++++++++++');

    return response;
  });

  instance.interceptors.response.use(response => {
    console.log('++++++++++++++RESPONSE RESPONSE++++++++++++++++++++++');
    console.log(JSON.stringify(response, undefined, 4));
    console.log('++++++++++++++RESPONSE RESPONSE++++++++++++++++++++++');
    return response;
  });

  return await instance.request({
    url,
    method: 'POST',
    data: formData,
  });

};

export default ApiServices;
