import React, { useEffect, useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import axios from 'axios';
import { i18Storage } from '../local-data/i18nStorage';
import { LocalizationContext } from '../utils/Localization';

// const LOCALURL = 'https://2cad-110-227-197-199.ngrok-free.app/trolley';
const LOCALURL = 'http://192.168.1.37/trolley';

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
  console.log('++++++++++++++++++++++++++++++++++++++++++');

  console.log('++++++++++++++++++++++++++++++++++++++++++');

  instance.interceptors.request.use(response => {
    console.log('++++++++++++++++++++++++++++++++++++');
    console.log(JSON.stringify(response, undefined, 4));
    console.log('++++++++++++++++++++++++++++++++++++');

    return response;
  });

  instance.interceptors.response.use(response => {
    // console.log('++++++++++++++RESPONSE RESPONSE++++++++++++++++++++++');
    // console.log(JSON.stringify(response, undefined, 4));
    // console.log('++++++++++++++RESPONSE RESPONSE++++++++++++++++++++++');
    return response;
  });

  return await instance.request({
    url,
    method: 'POST',
    data: formData,
  });

};

export default ApiServices;
