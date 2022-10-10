//memanggil state yang ada di global. import connect dari react-redux
import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  counterPlus,
  getDataMahasiswa,
  handleMinus,
} from "../app/featuredCounter/actions";

const HomeReducer = ({
  counter,
  handleMinus,
  handlePlus,
  getDataMahasiswa,
  data,
}) => {
  console.log(counter);

  useEffect(() => {
    getDataMahasiswa();
  }, [getDataMahasiswa]);
  console.log(data);
  return (
    <>
      <button onClick={() => handleMinus(1)}>Minus</button>
      <h6>{counter}</h6>
      <button onClick={() => handlePlus(1)}>Tambah</button>
      {data.map((d) => {
        return (
          <ul key={d.id}>
            <li>
              <p>
                {d.name} - {d.username}
              </p>
            </li>
          </ul>
        );
      })}
    </>
  );
};

//untuk mengambil state global
const reduxState = (state) => ({
  //JIka State Globalnya nambah maka buat variabel baru untuk triger action lalu masukan ke parameter component manjadi props
  counter: state.a.chart, //nama variabel counter nya bebas. dan counter merupakan sebuah props bisa langsung destrcution object atau menggunakan props.counter
  data: state.a.data,
});
//membuat fungsi untuk menampung increment, lalu masuk ke paramter dispatch untuk penamaan parameternya bebas
const reduxDispatch = () => (dispatch) => {
  return {
    //namahanldleCounter bebas tidak ada aturannya, tapi nanti kita akan jadikan sebuah function untuk triger komponent
    //nilai nya dari triger component akan di kirimkan ke state global melalui action.
    handlePlus: (nilai) => dispatch(counterPlus(nilai)),
    handleMinus: (nilai) => dispatch(handleMinus(nilai)),
    getDataMahasiswa: () => dispatch(getDataMahasiswa()),
  };
};
//untuk variabel connect bebas untuk penamaannye
export default connect(reduxState, reduxDispatch)(HomeReducer);
