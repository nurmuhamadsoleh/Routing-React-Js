import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementWitchCheckingAction,
  increment,
} from "../app/featuredCounter/actions";

const Counter = () => {
  //selector nya berupa state lalu kita return callbaknya
  // Cara 1
  // let { count } = useSelector((state) => state.a);
  //Cara 2
  let count = useSelector((state) => state.a.count);
  const dispatch = useDispatch(); //dipatch cara untuk menjalankan reducer
  // Jadi tidak perlu menggunakan state local tapi langsung global state
  return (
    <div>
      {/* untuk membuktikan jida sudah menggunakan redux ubah menjadi count */}
      {/* type DEC untuk Valuenya -1 atau tamah 1 */}
      {/* cara sebelum menggunakan actions */}
      {/* <button onClick={() => dispatch({ type: "DEC", value: 1 })}>
        -
      </button>{" "}
      <span>{count}</span>{" "}
      <button onClick={() => dispatch({ type: "INC", value: 1 })}>+</button> */}
      {/* Menggunakan actions, dimana fungsinya sudah di buat didalamnya */}
      <button onClick={() => dispatch(decrementWitchCheckingAction(1))}>
        -
      </button>{" "}
      {/* melakukan dectructering, karena count sebuah onject jadi kita lakukan dectructering */}
      <span>{count}</span> {/* lalu kita panggil action(kirim value) */}
      <button onClick={() => dispatch(increment(1))}>+</button>
    </div>
  );
};

export default Counter;
