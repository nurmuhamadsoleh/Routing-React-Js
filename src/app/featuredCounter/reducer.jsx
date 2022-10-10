import React from "react";
import * as counter from "./constants";
//valuenya di simpan dalam bentuk object sama seperti membuat state
//untuk menampung state secara global
let initialState = {
  //inisialstate nya bebas bisa array, interger, atau string
  count: 0,
  chart: 0,
  // jika fetching API menggunakan reduc
  data: [],
  loading: false,
  //Jika Fetching API selain Array dan Object maka akan terjadi error
};

//reducer di buat bebas tidak ada aturan nya dengan react js, merupakan sebuah fungsi biasa tidak menggunakan library pihak ke 3
//parameter acion dari action.js
const CounterReducer = (state = initialState, action) => {
  //Logic menggunakan switch
  //actions.jsx di tangkat oleh reducer ke component Counter
  switch (action.type) {
    case "ADD COUNTER":
      return {
        ...state,
        chart: state.chart + action.value,
      };
    case "MINUS COUNTER":
      return {
        ...state,
        chart: state.chart - action.value,
      };
    case "GET_DATA_MAHASISWA":
      return {
        ...state,
        data: action.value,
        loading: false,
      };
    case "GET_DATA_MAHASISWA_Proses":
      return {
        ...state,
        loading: true,
        // data: [],
        // data: action.value,
        // loading
      };
    case "GET_DATA_MAHASISWA_error":
      return {
        ...state,
        loading: false,
        data: [],
        // data: [],
        // data: action.value,
        // loading
      };
    //case counter.INC harus sama dengan type yang ada di action.jsx dimana action menampung type dan value.
    case counter.INC:
      return {
        //tidak bisa melakukan action yang di bawahnya sebelum melakukan copy state nya

        ...state, //melakukan copy state yang sebelumnya lalu timpa dengan yang baru
        //JIka tidak menggunakan copy state yang sebelumnya
        //acti.valuenya ebeb
        //type Counter.Inc akan menjalankan action count untuk menambahkan nilai state sebelumnya di tambah 1 value dari component HomeReducer
        count: state.count + action.value, // membuat lebih dinamis lagi bisa menggunakan action.value yang dimana action nya akan memilki payload, bisa tambhan value langsung 3 atau 5, nanti action akan mempunyai payload selain type juga mengirimkan data
      };
    // jika ada case yang nambah maka kita buta lagi.
    case counter.DEC:
      return {
        ...state,
        count: state.count - action.value,
      };
    //Memberikan nilai default, JIka kondisi diatas tidak terpenuhi maka akan menjalankan inisialstate / state awal yang di jalankan
    default:
      return state;
  }
};
export default CounterReducer;
