// action merupakan sebuah fungsi biasa, yang di mana fungsinya mengembalikan object

//action Creators file yang berisi semua aksi yang kita pisahkan dari dispatch secara terpisah

//action Creator bekerja secara syncrounus karena hanya merupakan fungsi javascript biasa, bukan merupakan bagian dari react dan juga reduce
import axios from "axios";
import Swal from "sweetalert2";
import * as counter from "./constants";
export const increment = (value) => {
  return {
    type: counter.INC,
    value: value, //value ngambil dari paramter
  };
};
// jika ada action yang nambah maka kita buta lagi. karena perlu dikirim ke reducer

export const decrement = (value) => {
  return {
    //typenya sudah di definisikan disini
    type: counter.DEC,
    //menerima data nya ajja
    value: value,
  };
};

//middelware yang ada di reduce thunk untuk menagan error async/ membuat fungsi secara async
export const decrementWitchCheckingAction = (value) => {
  return (dispatch, getState) => {
    if (getState().a.count > 0) {
      dispatch(decrement(value));
    }
  };
};

//nanti di inport di komponent nya, value nya di terima dari setiap komponent yang d klik dan masuk kedalam parameter a
//type nya nannti di gunakan pada reduder
//dispatch sebuah variabel untuk menampung datanya
export const counterPlus = (nilai) => (dispatch) => {
  dispatch({ type: "ADD COUNTER", value: nilai }); //value nilainya bisa string/interger/array/bolean, karena nilai di tangkap dari Feature Counter, jika nilai yang di berikan 1 maka akan bertambah 1 setiap ada ction klik
  //valuenya sesuai yang ada di state
};
export const counterMinus = (nilai) => (dispatch) => {
  dispatch({ type: "MINUS COUNTER", value: nilai });
};
export const handleMinus = (value) => {
  return (dispatch, getState) => {
    if (getState().a.chart > 0) {
      dispatch(counterMinus(value));
    }
  };
};

export const getDataMahasiswa = () => async (dispatch) => {
  dispatch({ type: "GET_DATA_MAHASISWA_Proses" });
  try {
    const dataMahasiswa = await axios(
      "https://jsonplaceholder.typicode.com/users",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const hasil = await dataMahasiswa.data;
    dispatch({ type: "GET_DATA_MAHASISWA", value: hasil });
    Swal.fire("Sukses", "Berhasil Menampilkan Data", "success");
  } catch (error) {
    dispatch({ type: "GET_DATA_MAHASISWA_error" });
    console.log(error);
    Swal.fire("Error", "Terjadi kesalahan pada saat menampilkan data", "error");
  }
};
